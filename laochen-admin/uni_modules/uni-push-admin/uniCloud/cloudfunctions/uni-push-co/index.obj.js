// 开发文档: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
function uniPush(appId) {
	return uniCloud.getPushManager({appId})
}
const uniID = require('uni-id-common')
module.exports = {
	_before: async function() {
		const clientInfo = this.getClientInfo()
		this.uniID = uniID.createInstance({
			clientInfo
		})
		const token = this.getUniIdToken()
		let payload = await this.uniID.checkToken(token)
		let role = payload.role||[]
		//检查是不是管理员，或者自己的云函数调用此云函数
		if(clientInfo.source != 'server' && !role.includes('admin')){
			return {
				errCode: 'uni-push-co-permission-denied',
				errMsg: '你没有访问此接口权限'
			}
		}
	},
	async sendMessage(data) {
		const appId = data.appId
		data.must_report = true //默认为false，消息接受者为单设备时，不统计推送结果。开启此项将都会统计。但整体推送速度会慢100-500毫秒
		// delete data.appId
		let res = await uniPush(appId).sendMessage(data)
		if (res.errCode == 0 && res.before_id) {
			const UniPushCo = uniCloud.importObject("uni-push-co")
			data.before_id = res.before_id //查询的初始id，用于高性能分页查询
			data.taskid = res.data.taskid || Object.keys(res.data)[0]
			
			UniPushCo.sendMessage(data).catch(e=>{
				// console.log(e.message);
			}) 
			// 等待500毫秒给下一个请求发出去的时间
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve(res)
				}, 500)
			})
		}
		return res
	},
	async getReport({
		appId,
		taskid
	}) {
		let res = await uniPush(appId).getReport({
			taskid
		})
		//获取推送结果
		console.log(JSON.stringify(res));
		return res
	},
	async getAdminUrl(appId) {
		let res = await uniPush(appId).getAdminUrl() //获取推送结果
		console.log(JSON.stringify(res));
		return res
	}
}
