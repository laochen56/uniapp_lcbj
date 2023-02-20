<template>
	<view>
		<view class="uni-header">
			<view class="uni-group">
				<view class="uni-title"></view>
				<view class="uni-sub-title"></view>
			</view>
			<view class="uni-group">
				<input class="uni-search" type="text" v-model="query" @confirm="search" placeholder="请输入搜索内容" />
				<button class="uni-button" type="default" size="mini" @click="search">搜索</button>
				<button class="uni-button" type="default" size="mini" :disabled="!selectedIndexs.length"
					@click="delTable">批量删除</button>
				<download-excel class="hide-on-phone" :fields="exportExcel.fields" :data="exportExcelData"
					:type="exportExcel.type" :name="exportExcel.filename">
					<button class="uni-button" type="primary" size="mini">导出 Excel</button>
				</download-excel>
			</view>
		</view>
		<view class="uni-container">
			<unicloud-db ref="udb" :collection="collectionList"
				field="report,title,creat_time,audience_type,audience_value,platform,state,payload,appId,taskid,msg_num,target_num,receive_num,display_num,click_num,operator_id{username}"
				:where="where" page-data="replace" :orderby="orderby" :getcount="true" :page-size="options.pageSize"
				:page-current="options.pageCurrent" v-slot:default="{data,pagination,loading,error,options}"
				:options="options" loadtime="manual" @load="onqueryload">
				<uni-table ref="table" :loading="loading" :emptyText="error.message || '没有更多数据'" border stripe
					type="selection" @selection-change="selectionChange">
					<uni-tr>
						<uni-th align="center" >操作员</uni-th>
						<uni-th align="center" sortable @sort-change="sortChange($event, 'title')">通知栏标题</uni-th>
						<uni-th align="center" filter-type="timestamp"
							@filter-change="filterChange($event, 'creat_time')" sortable
							@sort-change="sortChange($event, 'creat_time')">推送时间</uni-th>
						<uni-th align="center" filter-type="select"
							:filter-data="options.filterData.audience_type_localdata"
							@filter-change="filterChange($event, 'audience_type')">发送目标</uni-th>
						<!-- <uni-th align="center" sortable @sort-change="sortChange($event, 'audience_value')">目标用户标识</uni-th> -->
						<uni-th align="center" filter-type="select" :filter-data="options.filterData.platform_localdata"
							@filter-change="filterChange($event, 'platform')">目标平台</uni-th>
						<!-- <uni-th align="center" sortable @sort-change="sortChange($event, 'state')">推送状态</uni-th> -->
						<!-- <uni-th align="center" sortable @sort-change="sortChange($event, 'payload')">消息内容</uni-th> -->
						<uni-th align="center" filter-type="search" @filter-change="filterChange($event, 'appId')"
							@sort-change="sortChange($event, 'appId')">应用的id</uni-th>
						<uni-th align="center">目标设备数</uni-th>
						<uni-th align="center">成功下发数</uni-th>
						<uni-th align="center">成功接收数（比例）</uni-th>
						<uni-th align="center">消息展示数（比例）</uni-th>
						<uni-th align="center">消息点击数（比例）</uni-th>
						<uni-th align="center">操作</uni-th>
					</uni-tr>
					<uni-tr v-for="(item,index) in data" :key="index">
						<uni-td align="center">{{item.operator_id[0]?item.operator_id[0].username:'-'}}</uni-td>
						<uni-td align="center">{{item.title}}</uni-td>
						<uni-td align="center">
							<uni-dateformat :threshold="[0, 0]" :date="item.creat_time"></uni-dateformat>
						</uni-td>
						<uni-td align="center">根据{{options.audience_type_valuetotext[item.audience_type]}}</uni-td>
						<uni-td align="center">
							<text v-if="item.platform=='ALL'">所有平台</text>
							<uni-data-picker v-else :localdata="options.platform_valuetotext" :value="item.platform"
								:border="false" :readonly="true" split=","></uni-data-picker>
						</uni-td>
						<!-- <uni-td align="center">{{item.state}}</uni-td> -->
						<!-- <uni-td align="center">{{item.payload}}</uni-td> -->
						<uni-td align="center">{{item.appId}}</uni-td>
						<uni-td align="center">{{item.report?item.report.total.msg_num:'-'}}</uni-td>
						<uni-td align="center">{{item.report?item.report.total.target_num+'，（'+parseInt(item.report.total.target_num/item.report.total.msg_num*100)+'%）':'-'}}</uni-td>
						<uni-td align="center">{{item.report?item.report.total.receive_num+'，（'+parseInt(item.report.total.receive_num/item.report.total.msg_num*100)+'%）':'-'}}</uni-td>
						<uni-td align="center">{{item.report?item.report.total.display_num+'，（'+parseInt(item.report.total.display_num/item.report.total.msg_num*100)+'%）':'-'}}</uni-td>
						<uni-td align="center">{{item.report?item.report.total.click_num+'，（'+parseInt(item.report.total.click_num/item.report.total.msg_num*100)+'%）':'-'}}</uni-td>
						<uni-td align="center">
							<view class="uni-group">
								<button @click="navigateTo('./detail?data='+encodeURIComponent(JSON.stringify(item)),false)" class="uni-button" size="mini" type="primary">详情</button>
								<button @click="confirmDelete(item._id)" class="uni-button" size="mini"
									type="warn">删除</button>
							</view>
						</uni-td>
					</uni-tr>
				</uni-table>
				<view class="uni-pagination-box">
					<uni-pagination show-icon :page-size="pagination.size" v-model="pagination.current"
						:total="pagination.count" @change="onPageChanged" />
				</view>
			</unicloud-db>
		</view>
	</view>
</template>

<script>
	import {
		enumConverter,
		filterToWhere
	} from '../../js_sdk/validator/uni-push-log.js';

	const db = uniCloud.database()
	// 表查询配置
	const dbOrderBy = 'creat_time desc' // 排序字段
	const dbSearchFields = [] // 模糊搜索字段，支持模糊搜索的字段列表。联表查询格式: 主表字段名.副表字段名，例如用户表关联角色表 role.role_name
	// 分页配置
	const pageSize = 20
	const pageCurrent = 1

	const orderByMapping = {
		"ascending": "asc",
		"descending": "desc"
	}

	export default {
		data() {
			return {
				collectionList: "uni-push-log,uni-id-users",
				query: '',
				where: '',
				orderby: dbOrderBy,
				orderByFieldName: "",
				selectedIndexs: [],
				options: {
					pageSize,
					pageCurrent,
					filterData: {
						"audience_type_localdata": [
							{
								"text": "所有用户",
								"value": "ALL"
							},
							{
								"text":"用户id",
								"value":"user_id"
							},{
								"text":"用户标签",
								"value":"user_tag"
							},{
								"text":"设备id",
								"value":"device_id"
							},{
								"text":"个推客户端id",
								"value":"push_clientid"
							},{
								"text":"个推自定义客户端标签",
								"value":"getui_custom_tag"
							}
						],
						"platform_localdata": [{
								"text": "全部",
								"value": "ALL"
							},
							{
									"text": "网页端",
									"value": "web"
								},
							{
								"text": "App-iOS",
								"value": "app-ios"
							},
							{
								"text": "App-Android",
								"value": "app-android"
							},
							{
								"text": "微信小程序",
								"value": "mp-weixin"
							},
							{
								"text": "360小程序",
								"value": "mp-360"
							}, {
								"text": "百度小程序",
								"value": "mp-baidu"
							},
							{
								"text": "支付宝小程序",
								"value": "mp-alipay"
							},
							{
								"text": "字节跳动小程序",
								"value": "mp-toutiao"
							},
							{
								"text": "QQ小程序",
								"value": "mp-qq"
							},
							{
								"text": "快应用联盟",
								"value": "quickapp-webview-union"
							},
							{
								"text": "快应用华为",
								"value": "quickapp-webview-huawei"
							},
							{
								"text": "快手小程序",
								"value": "mp-kuaishou"
							},
							{
								"text": "飞书小程序",
								"value": "mp-lark"
							},
							{
								"text": "京东小程序",
								"value": "mp-jd"
							}
						]
					},
					...enumConverter
				},
				imageStyles: {
					width: 64,
					height: 64
				},
				exportExcel: {
					"filename": "uni-push-log.xls",
					"type": "xls",
					"fields": {
						"通知标题": "title",
						"推送时间": "creat_time",
						"目标用户": "audience_type",
						"目标用户标识": "audience_value",
						"目标平台": "platform",
						"推送状态": "state",
						"消息内容": "payload",
						"应用的id": "appId",
						"任务id": "taskid",
						"消息可下发数": "msg_num",
						"消息下发数": "target_num",
						"消息接收数": "receive_num",
						"消息展示数": "display_num",
						"消息点击数": "click_num"
					}
				},
				exportExcelData: []
			}
		},
		onLoad() {
			this._filter = {}
		},
		onReady() {
			this.$refs.udb.loadData()
		},
		methods: {
			async onqueryload(data) {
				const UniPush = uniCloud.importObject("uni-push-co")
				let obj = {}
				data.forEach(item => {
					obj[item.appId] ? obj[item.appId].push(item) : obj[item.appId] = [item]
				})
				// console.log({
				// 	obj
				// });
				for (let appId in obj) {
					// console.log({
					// 	appId
					// });
					let taskids = obj[appId].map(e => e.taskid)
					let reports = await UniPush.getReport({
						appId,
						taskid: taskids
					})
					// console.log({
					// 	reports
					// });
					if (!reports.data) {
						console.log('查不到相关记录');
						continue;
					}
					data.forEach(item => {
						if (reports.data[item.taskid]) {
							if (!item.report || !isObjEqual(item.report, reports.data[item.taskid])) {
								// console.log('与数据库中不等，执行更新', item.report, reports.data[item.taskid]);
								item.report = reports.data[item.taskid]
								db.collection('uni-push-log').doc(item._id).update({
									"report": item.report
								}).then(e => {
									// console.log(e);
								})
							} else {
								// console.log('与数据库中内容相等，不做任何操作');
							}
						}
					})
					// console.log({
					// 	data
					// });
				}
				this.$set(data, data)
				this.exportExcelData = data
			},
			getWhere() {
				const query = this.query.trim()
				if (!query) {
					return ''
				}
				const queryRe = new RegExp(query, 'i')
				return dbSearchFields.map(name => queryRe + '.test(' + name + ')').join(' || ')
			},
			search() {
				const newWhere = this.getWhere()
				this.where = newWhere
				this.$nextTick(() => {
					this.loadData()
				})
			},
			loadData(clear = true) {
				this.$refs.udb.loadData({
					clear
				})
			},
			onPageChanged(e) {
				this.selectedIndexs.length = 0
				this.$refs.table.clearSelection()
				this.$refs.udb.loadData({
					current: e.current
				})
			},
			navigateTo(url, clear) {
				// clear 表示刷新列表时是否清除页码，true 表示刷新并回到列表第 1 页，默认为 true
				uni.navigateTo({
					url,
					events: {
						refreshData: () => {
							this.loadData(clear)
						}
					}
				})
			},
			// 多选处理
			selectedItems() {
				var dataList = this.$refs.udb.dataList
				return this.selectedIndexs.map(i => dataList[i]._id)
			},
			// 批量删除
			delTable() {
				this.$refs.udb.remove(this.selectedItems(), {
					success: (res) => {
						this.$refs.table.clearSelection()
					}
				})
			},
			// 多选
			selectionChange(e) {
				this.selectedIndexs = e.detail.index
			},
			confirmDelete(id) {
				this.$refs.udb.remove(id, {
					success: (res) => {
						this.$refs.table.clearSelection()
					}
				})
			},
			sortChange(e, name) {
				this.orderByFieldName = name;
				if (e.order) {
					this.orderby = name + ' ' + orderByMapping[e.order]
				} else {
					this.orderby = ''
				}
				this.$refs.table.clearSelection()
				this.$nextTick(() => {
					this.$refs.udb.loadData()
				})
			},
			filterChange(e, name) {
				this._filter[name] = {
					type: e.filterType,
					value: e.filter
				}
				let newWhere = filterToWhere(this._filter, db.command)
				if (Object.keys(newWhere).length) {
					this.where = newWhere
				} else {
					this.where = ''
				}
				this.$nextTick(() => {
					this.$refs.udb.loadData()
				})
			}
		}
	}

	function isObjEqual(obj1, obj2) {
		const keys = Object.keys(obj1)
		//先判断长度
		if (keys.length != Object.keys(obj2).length) {
			return false
		}
		for (let i = 0; i < keys.length; i++) {
			let key = keys[i],
				item = obj1[key]
			if (item != obj2[key]) { //如果不相等先判断是否都是对象
				if (typeof item == 'object' && typeof obj2[key] == 'object') { // 都是对象继续递归比较
					if (!isObjEqual(item, obj2[key])) {
						return false
						break;
					}
				} else {
					return false
					break;
				}
			}
		}
		return true;
	}
</script>

<style>
</style>
