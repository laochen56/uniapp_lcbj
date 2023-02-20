<template>
	<view class="uni-container">
		<uni-forms ref="form" :value="formData" validate-trigger="submit" err-show-type="toast" id="from">
			<uni-forms-item name="appId" label="选择应用" required>
				<uni-data-select collection="opendb-app-list" field="appid as value, name as text" orderby="text asc"
					:defItem="1" v-model="formData.appId" :clear="false" />
			</uni-forms-item>
			<uni-forms-item name="platform" label="目标平台" required>
				<uni-data-checkbox ref="platform"
					:disabled="['device_id','push_clientid','getui_custom_tag'].includes(formData.audience_type)"
					@change="setPlatform" v-model="platform" :localdata="formOptions.setPlatform">
				</uni-data-checkbox>
			</uni-forms-item>
			<view id="platform-value-box" v-if="formData.platform != 'ALL'">
				<uni-data-checkbox
					:disabled="['device_id','push_clientid','getui_custom_tag'].includes(formData.audience_type)"
					:multiple="true" :min="1" v-model="formData.platform" :localdata="formOptions.platform">
				</uni-data-checkbox>
			</view>
			<uni-forms-item name="platform" label="发送目标" required>
				<uni-data-checkbox @change="setAudienceType" value="ALL" :localdata="formOptions.setAudienceType">
				</uni-data-checkbox>
			</uni-forms-item>
			<view id="audience-value-box" v-if="formData.audience_type != 'ALL'">
				<uni-data-checkbox v-model="formData.audience_type" :localdata="formOptions.audience_type">
				</uni-data-checkbox>
				<uni-forms-item name="audience_value">
					<uni-easyinput
						:type="['getui_custom_tag','jql'].includes(formData.audience_type) ? 'text':'textarea'"
						autoHeight id="audience-value" :placeholder="audience_tip.placeholder"
						v-model="formData.audience_value">
					</uni-easyinput>
				</uni-forms-item>
				<text style="font-size: 12px;color: #bbb;">{{audience_tip.msg}}</text>
				<!-- <view v-if="formData.audience_type == 'jql'">
					<uni-link href="https://uniapp.dcloud.io/uniCloud/jql.html" text="jql详情"></uni-link>
				</view> -->
				<view class="audience-tip" v-if="formData.audience_type == 'push_clientid'">
					<text>发送目标基于“</text>
					<uni-link href="https://uniapp.dcloud.net.cn/uniCloud/uni-cloud-push/api.html#getpushclientid"
						text="个推客户端id" color="#2979ff" fontSize="12"></uni-link>
					<text>”，不能限制目标平台</text>
				</view>
				<view class="audience-tip" v-if="formData.audience_type == 'getui_custom_tag'">
					<text>发送目标基于“</text>
					<uni-link
						href="https://uniapp.dcloud.net.cn/uniCloud/uni-cloud-push/api.html#%E5%AE%A2%E6%88%B7%E7%AB%AF%E6%A0%87%E7%AD%BE"
						text="个推自定义客户端标签" color="#2979ff" fontSize="12"></uni-link>
					<text>”，不能限制目标平台</text>
				</view>
				<view class="audience-tip" v-if="formData.audience_type == 'device_id'">
					<text>发送目标基于设备ID时，不能限制目标平台</text>
				</view>
			</view>
			<uni-forms-item label="通知栏点击行为" required>
				<uni-data-checkbox v-model="clickNotificationAction" :localdata="formOptions.clickNotificationAction">
				</uni-data-checkbox>
			</uni-forms-item>

			<uni-forms-item v-if="platformHasApp" name="force_notification" label="强制通知栏消息">
				<view class="force-notification-tip">
					<uni-icons type="help-filled" size="16" color="#DDD" @click="showForceNotificationTip">
					</uni-icons>
				</view>
				<switch @change="setData('force_notification', $event.detail.value)" :disabled="!platformHasApp"
					:checked="formData.force_notification"></switch>
				<text style="color: #666666;">(仅App端有效)</text>
			</uni-forms-item>

			<uni-forms-item key="open_url" v-if="this.clickNotificationAction" name="open_url" label="URL链接" required>
				<uni-easyinput type="text" v-model="formData.open_url" placeholder="以http(s)://开头的有效可访问链接">
				</uni-easyinput>
			</uni-forms-item>

			<uni-forms-item key="payload" v-else name="payload" label="透传内容" :required="this.platformHasWithoutApp">
				<uni-link class="payload-help" href="https://uniapp.dcloud.io/unipush-v2.html#listener"
					:showUnderLine="false">
					<uni-icons type="help-filled" size="16" color="#DDD"></uni-icons>
				</uni-link>
				<uni-easyinput type="textarea" maxlength="3072" :placeholder="payload_tip" v-model="formData.payload"
					trim="both"></uni-easyinput>
			</uni-forms-item>

			<view v-if="platformHasApp">
				<uni-forms-item name="title" label="APP通知栏标题" required>
					<uni-easyinput placeholder="应用离线时,显示在通知栏的标题,长度小于20字" v-model="formData.title" trim="both">
					</uni-easyinput>
				</uni-forms-item>
				<uni-forms-item name="content" label="APP通知栏内容" required>
					<uni-easyinput placeholder="应用离线时,显示在通知栏的内容,长度小于50字" v-model="formData.content" trim="both">
					</uni-easyinput>
				</uni-forms-item>
				<uni-forms-item name="channel" class="channel-box"
					v-if="formData.platform == 'ALL' || formData.platform.includes('app-android')" label="渠道_id">
					<uni-link class="channel-help"
						href="https://uniapp.dcloud.io/uniCloud/uni-cloud-push/api.html#channel" :showUnderLine="false">
						<uni-icons type="help-filled" size="16" color="#DDD"></uni-icons>
					</uni-link>
					<view class="channel-input-box">
						<uni-easyinput placeholder="华为渠道_id" v-model="channel.HW" trim="both"></uni-easyinput>
						<uni-easyinput placeholder="小米渠道_id" v-model="channel.XM" trim="both"></uni-easyinput>
						<uni-easyinput placeholder="vivo渠道_id" v-model="channel.VO" trim="both"></uni-easyinput>
						<uni-easyinput placeholder="oppo渠道_id" v-model="channel.OP" trim="both"></uni-easyinput>
					</view>
				</uni-forms-item>
				<uni-forms-item name="sound" label="自定义push铃声">
					<uni-link class="sound-help" href="https://uniapp.dcloud.io/uniCloud/uni-cloud-push/api.html#sound"
						:showUnderLine="false">
						<uni-icons type="help-filled" size="16" color="#DDD"></uni-icons>
					</uni-link>
					<uni-easyinput placeholder="填写文件名,不含扩展名；如：pushsound.caf填写pushsound即可。不填或铃声文件未找到，响铃为系统默认铃声。"
						v-model="formData.sound">
					</uni-easyinput>
				</uni-forms-item>
				<uni-forms-item v-if="platformHasApp" name="content_available" label="静默消息">
					<view class="content-available-tip">
						<uni-icons type="help-filled" size="16" color="#DDD" @click="showContentAvailableTip">
						</uni-icons>
					</view>
					<switch @change="setData('content_available', $event.detail.value)"
						:checked="formData.content_available" :disabled="!onlyIos"></switch>
					<text style="color: #666666;">(仅选择iOS平台时有效)</text>
				</uni-forms-item>
				<uni-forms-item label="扩展字段">
					<uni-link class="options-help" href="https://uniapp.dcloud.io/uniCloud/uni-cloud-push/options.html"
						:showUnderLine="false">
						<uni-icons type="help-filled" size="16" color="#DDD"></uni-icons>
					</uni-link>
					<uni-easyinput type="textarea" maxlength="3072" placeholder="JSON格式，用于厂商消息拓展"
						v-model="formData.options" trim="both">
					</uni-easyinput>
				</uni-forms-item>
			</view>
			<view class="uni-button-group">
				<button type="primary" class="uni-button" @click="submit">提交</button>
			</view>
		</uni-forms>
	</view>
</template>

<script>
	import {
		validator
	} from '../../js_sdk/validator/push.js';
	const UniPush = uniCloud.importObject("uni-push-co")

	function getValidator(fields) {
		let result = {}
		for (let key in validator) {
			if (fields.indexOf(key) > -1) {
				result[key] = validator[key]
			}
		}
		return result
	}
	export default {
		computed: {
			audience_tip() {
				let value = this.formData.audience_value || ''
				let count = value ? value.split('\n').length : 0
				switch (this.formData.audience_type) {
					case 'user_id':
						return {
							placeholder: "请输入uni-id-users表对应的用户_id",
								msg: `多个值可按“回车键”换行分隔，当前已输入${count}个`
						}
						break;
					case 'user_tag':
						return {
							placeholder: "请输入uni-id-tag表对应的nane值",
								msg: `多个值可按“回车键”换行分隔，当前已输入${count}个`
						}
						break;
					case 'device_id':
						return {
							placeholder: "请输入uni-id-device表对应的device_id的值",
								msg: `多个值可按“回车键”换行分隔，当前已输入${count}个`
						}
						break;
					case 'push_clientid':
						return {
							placeholder: "请输入uni-id-device表对应的设备推送标识push_clientid的值",
								msg: `多个值可按“回车键”换行分隔，当前已输入${count}个`
						}
						break;
					case 'getui_custom_tag':
						return {
							placeholder: "请输入通过uni-cloud-push的设置push客户端标签",
								msg: `仅限支持输入1个自定义push客户端标签`
						}
						break;
						// case 'getui_big_data_tag':
						// 	return {
						// 		placeholder: "个推大数据标签",
						// 		msg: `多个值可按“回车键”换行分隔，当前已输入${count}个`
						// 	}
						// 	break;
					case 'jql':
						return {
							placeholder: "请输入查询uni-id-user表的jql查询表达式",
								msg: ``
						}
						break;
					default:
						return {
							placeholder: "",
								msg: ""
						}
						break;
				}
			},
			platformHasApp() {
				let {
					platform
				} = this.formData
				return platform == 'ALL' || platform.includes('app-android') || platform.includes('app-ios')
			},
			platformHasWithoutApp() {
				//1.包含所有 2.包含app以外的端
				let {
					platform
				} = this.formData
				return platform == 'ALL' || platform.filter(e => e.indexOf('app-') == -1).length != 0
			},
			onlyIos() {
				return this.formData.platform.length == 1 && this.formData.platform.includes('app-ios')
			}
		},
		data() {
			let formData = {
				"platform": "ALL",
				"audience_type": "ALL",
				"audience_value": "",
				"title": "",
				"content": "",
				"open_url": "",
				"payload": "",
				"badge": "+1",
				"sound": "",
				"content_available": false,
				"force_notification": false,
				"appId": "",
				"options": ""
			}
			return {
				platform: "ALL",
				formData,
				formOptions: {
					//uniPlatform
					platform: [{
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
					],
					setPlatform: [{
							"text": "所有平台",
							"value": "ALL"
						},
						{
							"text": "指定平台",
							"value": "custom"
						},
					],
					setAudienceType: [{
							"text": "所有设备",
							"value": "ALL"
						},
						{
							"text": "指定设备",
							"value": "custom"
						},
					],
					audience_type: [{
							"text": "用户id",
							"value": 'user_id'
						},
						{
							"text": "用户标签",
							"value": 'user_tag'
						},
						{
							"text": "设备id",
							"value": 'device_id'
						},
						// {
						// 	"text": "设备标签",
						// 	"value": 'device_tag'
						// },
						{
							"text": "个推客户端id",
							"value": 'push_clientid'
						},
						{
							"text": "个推自定义客户端标签",
							"value": 'getui_custom_tag'
						},
						/*{
							"text": "个推大数据标签",
							"value": 'getui_big_data_tag'
						},
						{
							"text": "个推自定义客户端别名",
							"value": 'getui_alias'
						},
						{
							"text": "jql查询",
							"value": 'jql'
						}*/
					],
					"clickNotificationAction": [{
							"text": "打开应用并透传消息",
							"value": 0
						},
						{
							"text": "启动系统浏览器打开链接（仅Android支持）",
							"value": 1,
							"disable": true
						}
					]
				},
				rules: {
					...getValidator(Object.keys(formData))
				},
				clickNotificationAction: 0,
				payload_tip: '建议用json格式,如:{"user_id":"xxx","content":"xxx"}\n可以通过uni.onPushMessage接收;接收。长度 ≤ 3072',
				channel: {
					'hw': null,
					'xm': null,
					'vivo': null,
					'oppo': null
				}
			}
		},
		onReady() {
			this.$refs.form.setRules(this.rules)
			uni.onPushMessage(e => {
				// console.log(e);
				uni.showToast({
					title: '收到push消息：' + JSON.stringify(e),
					icon: 'none',
					duration: 5000
				});
			})
		},
		watch: {
			"formData.audience_type": {
				handler(audience_type) {
					//切换就清空值
					this.formData.audience_value = ''
					// console.log(audience_type);
					if (['device_id', 'push_clientid', 'getui_custom_tag'].includes(audience_type)) {
						this.platform = "ALL"
						this.formData.platform = "ALL"
					}

					// if (audience_type == 'push_clientid') {
					// 	uni.showToast({
					// 		title: 'debug模式自动获取当前push client id',
					// 		icon: 'none'
					// 	});
					// 	uni.getPushClientId({
					// 		success: (e) => {
					// 			this.formData.audience_value = e.cid
					// 		},
					// 		fail: (e) => {
					// 			console.log(e);
					// 		}
					// 	});
					// }
				}
			},
			"formData.platform": {
				handler(platform) {
					if (platform.includes('app-android') && platform.length == 1) {
						this.formOptions.clickNotificationAction[1].disable = false
					} else {
						this.clickNotificationAction = 0
						this.formOptions.clickNotificationAction[1].disable = true
					}
				}
			}
		},
		methods: {
			setData(key, value) {
				this.formData[key] = value
			},
			setPlatform(event) {
				// console.log({
				// 	event
				// });
				if (event.detail.value == 'ALL') {
					this.formData.platform = "ALL"
				} else {
					this.formData.platform = ['web']
				}
			},
			setAudienceType(event) {
				// console.log({
				// 	event
				// });
				if (event.detail.value == 'ALL') {
					this.formData.audience_type = 'ALL'
				} else {
					this.formData.audience_type = 'user_id'
				}
			},
			/**
			 * 验证表单并提交
			 */
			async submit() {
				let formData = {...this.formData};
				//根据是否选择了非app端定义payload是否必填
				validator.payload.rules[0].required = this.platformHasWithoutApp

				if (this.formData.options) {
					try {
						if (typeof(JSON.parse(this.formData.options)) != 'object') {
							return uni.showToast({
								title: '扩展字段必须为json格式',
								icon: 'none'
							});
						}
					} catch (e) {
						return uni.showToast({
							title: '扩展字段必须为json格式',
							icon: 'none'
						});
					}
					formData.options = JSON.parse(this.formData.options)
				}

				// console.log(formData.audience_type , formData.audience_value);

				if (formData.audience_type != 'ALL' && !formData.audience_value) {
					return uni.showToast({
						title: formData.audience_type + '的值不能为空',
						icon: 'none'
					});
				}
				uni.showLoading();

				this.$refs.form.validate().then(async (e) => {
					let data = {
						...formData
					}
					data.channel = this.channel
					if (formData.audience_type != 'ALL') {
						if (['user_id','device_id','push_clientid','getui_custom_tag'].includes(formData.audience_type)) {
							data[formData.audience_type] = formData.audience_value.split('\n')
						} else {
							data[formData.audience_type] = formData.audience_value
						}
					}
					data.content_available = data.content_available ? 1 : 0;

					if (data.payload) {
						try {
							data.payload = JSON.parse(data.payload)
						} catch (e) {
							console.log(e);
							//TODO handle the exception
						}
					}

					delete data.audience_type
					delete data.audience_value

					console.log("data", data);
					// console.log("JSON stringify",JSON.stringify(data));
					// return uni.hideLoading()

					// console.log({
					// 	data
					// });

					let res = await UniPush.sendMessage(data)
					console.log({
						res
					})
					/*
						响应体结构：
							单个cid  taskid:{cid:state}
							多个cid  taskid:{cid1:state，cid2:state}
					*/

					//cid推送判断推了几个用户
					let state = res.errMsg //推送状态
					const taskid = res.data.taskid || Object.keys(res.data)[0]

					// console.log({
					// 	formData
					// });

					const db = uniCloud.database();
					res = await db.collection('uni-push-log').add({
						taskid,
						...formData
					})
					// console.log("res: " + JSON.stringify(res));
					uni.showModal({
						content: "推送成功，任务id:" + taskid,
						confirmText: "查看推送情况",
						success: (e) => {
							if (e.confirm) {
								uni.navigateTo({
									url: '/uni_modules/uni-push-admin/pages/log/list'
								})
							}
						}
					});
				})
			},
			showContentAvailableTip() {
				uni.showModal({
					content: 'iOS设备当应用切到后台时收到push消息，默认以通知栏消息提醒用户。你可以通过开启静默消息来关闭该行为。苹果官方建议1小时最多推送3条静默消息',
					confirmText: "知道了",
					showCancel: false
				});
			},
			showForceNotificationTip() {
				uni.showModal({
					content: '无论是离线推送还是在线推送，都会自创建通知栏消息。HBuilderX 3.5.2 及其以上版本的客户端支持	',
					confirmText: "知道了",
					showCancel: false
				});
			}
		}
	}
</script>

<style>
	view {
		display: flex;
		box-sizing: border-box;
		flex-direction: column;
	}

	.uni-container {
		padding: 15px;
	}

	.uni-container .uni-link ::v-deep {
		text-decoration: none;
	}

	.uni-container ::v-deep .uni-stat__select {
		padding: 0;
	}

	.uni-container ::v-deep .uni-select {
		padding-left: 10px;
	}

	.uni-input-border,
	.uni-textarea-border {
		width: 100%;
		font-size: 14px;
		color: #666;
		border: 1px #e5e5e5 solid;
		border-radius: 5px;
		box-sizing: border-box;
	}

	.uni-input-border {
		padding: 0 10px;
		height: 35px;

	}

	.uni-textarea-border {
		padding: 10px;
		height: 80px;
	}

	.uni-button-group {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		align-items: center;
	}

	.uni-button {
		width: 184px;
		padding: 12px 20px;
		font-size: 14px;
		border-radius: 4px;
		line-height: 1;
		margin: 0;
	}

	#from {
		max-width: 100%;
	}

	.uni-container ::v-deep .uni-forms-item__label {
		flex-shrink: 0;
		width: 125px !important;
	}

	#from ::v-deep .is-required {
		position: relative;
		left: -12px;
		margin-right: -8px;
	}

	#platform-value-box,
	#audience-value-box {
		border: solid 1px #DCDFE6;
		border-radius: 4px;
		margin-bottom: 10px;
		padding: 10px;
		width: 78%;
		margin-left: 120px;
		margin-top: -14px;
	}

	#platform-value-box ::v-deep .uni-forms-item__content,
	#audience-value-box ::v-deep .uni-forms-item__content {
		margin: 10px 0;
	}

	#audience-value-box ::v-deep .uni-forms-item {
		margin-bottom: 0;
	}

	#audience-value-box ::v-deep .uni-easyinput__content-textarea {
		min-height: 20px;
		line-height: 20px;
	}

	#audience-value-box ::v-deep .uni-forms-item__inner {
		padding-bottom: 0;
	}

	#audience-value-box ::v-deep .uni-forms-item__label {
		width: 0 !important;
	}


	#from ::v-deep .uni-forms-item__content {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.channel-box ::v-deep .uni-easyinput {
		margin-right: 30rpx;
	}

	.channel-box ::v-deep .uni-easyinput:last-child {
		margin-right: 0;
	}

	.payload-help {
		left: -45px;
		margin-left: -25px;
		margin-right: 10px;
		position: relative;
		margin-top: -55px;
	}

	.channel-help {
		left: -55px;
		margin-right: 4px;
		margin-left: -20px;
		position: relative;
	}

	.channel-input-box {
		flex-direction: row;
	}


	@media screen and (max-width: 690px) {
		.channel-input-box {
			flex-direction: column;
			width: 100%;
		}

		.channel-input-box .uni-easyinput {
			margin-bottom: 10px;
		}

		.channel-input-box input {
			width: 100%;
		}

		.channel-help {
			top: -73px;
			left: -55px;
			margin-left: -20px;
			position: relative;
		}
	}

	.sound-help {
		margin-left: -20px;
		margin-right: 5px;
		position: relative;
	}

	.force-notification-tip {
		left: -5px;
		margin-left: -20px;
		margin-right: 4px;
		position: relative;
		cursor: pointer;
	}

	.content-available-tip {
		left: -45px;
		margin-left: -20px;
		margin-right: 4px;
		position: relative;
		cursor: pointer;
	}

	.options-help {
		left: -45px;
		margin-left: -20px;
		position: relative;
		margin-top: -55px;
		margin-right: 4px;
	}

	.audience-tip {
		flex-direction: row;
		color: #bbb;
		font-size: 12px;
	}
</style>
