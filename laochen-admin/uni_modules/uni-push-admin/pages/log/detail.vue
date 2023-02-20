<template>
	<view class="root">
		<view class="base-data">
			<text class="title-box">基本信息</text>
			<view class="base-data-table">
				<uni-table border>
					<uni-tr>
						<uni-td>推送标题</uni-td>
						<uni-td>{{formData.title}}</uni-td>
					</uni-tr>
					<uni-tr>
						<uni-td>推送时间</uni-td>
						<uni-td>
							<uni-dateformat :threshold="[0, 0]" :date="formData.creat_time"></uni-dateformat>
						</uni-td>
					</uni-tr>
					<uni-tr>
						<uni-td>推送操作员</uni-td>
						<uni-td>{{formData.operator_id[0]?formData.operator_id[0].username:'-'}}</uni-td>
					</uni-tr>
					<uni-tr>
						<uni-td>任务id</uni-td>
						<uni-td>{{formData.taskid}}</uni-td>
					</uni-tr>
					<uni-tr>
						<uni-td>目标平台</uni-td>
						<uni-td>
							{{base_data_platform}}
						</uni-td>
					</uni-tr>
					<uni-tr>
						<uni-td>发送目标</uni-td>
						<uni-td>
							{{base_data_audience_type}}
						</uni-td>
					</uni-tr>
				</uni-table>
			</view>
		</view>
		<view class="report">
			<view class="title-box">
				<text class="title">推送数据</text>
				<view class="help">
					<uni-icons type="help" color="#"></uni-icons>
					<view class="tips">
						<text> 成功下发数 ：实际下发到客户端的数量（不包含卸载数）</text>
						<text> 到达数 ：实际送达到客户端的数量（不包含卸载数，包含关闭通知）</text>
						<text> 展示数 ：透传消息无法统计展示数，可通过自定义事件补全</text>
						<text> 点击数 ：透传消息无法统计点击数，可通过自定义事件补全</text>
					</view>
				</view>
			</view>
			
			<view class="total">
				<uni-table border>
					<uni-tr>
						<uni-th>目标设备数</uni-th>
						<uni-th>成功下发数</uni-th>
						<uni-th>成功接收数</uni-th>
						<uni-th>消息展示数</uni-th>
						<uni-th>消息点击数</uni-th>
					</uni-tr>
					<uni-tr>
						<uni-td>{{formData.report.total.msg_num}}</uni-td>
						<uni-td>{{formData.report.total.target_num}}</uni-td>
						<uni-td>{{formData.report.total.receive_num}}</uni-td>
						<uni-td>{{formData.report.total.display_num}}</uni-td>
						<uni-td>{{formData.report.total.click_num}}</uni-td>
					</uni-tr>
				</uni-table>
			</view>
			<view class="channel">
				<uni-table border>
					<uni-tr>
						<uni-th>下发渠道</uni-th>
						<uni-th>成功下发数</uni-th>
						<uni-th>到达数</uni-th>
						<uni-th>展示数</uni-th>
						<uni-th>点击数</uni-th>
					</uni-tr>
					<uni-tr>
						<uni-td>个推渠道</uni-td>
						<uni-td>{{formData.report.gt.target_num}}</uni-td>
						<uni-td>{{formData.report.gt.receive_num}}</uni-td>
						<uni-td>{{formData.report.gt.display_num}}</uni-td>
						<uni-td>{{formData.report.gt.click_num}}</uni-td>
					</uni-tr>
					<uni-tr v-if="formData.report.mz">
						<uni-td>魅族渠道</uni-td>
						<uni-td>{{formData.report.mz.target_num}}</uni-td>
						<uni-td>{{formData.report.mz.receive_num}}</uni-td>
						<uni-td>{{formData.report.mz.display_num}}</uni-td>
						<uni-td>{{formData.report.mz.click_num}}</uni-td>
					</uni-tr>
					<uni-tr v-if="formData.report.hw">
						<uni-td>华为渠道</uni-td>
						<uni-td>{{formData.report.hw.target_num}}</uni-td>
						<uni-td>{{formData.report.hw.receive_num}}</uni-td>
						<uni-td>{{formData.report.hw.display_num}}</uni-td>
						<uni-td>{{formData.report.hw.click_num}}</uni-td>
					</uni-tr>
					<uni-tr v-if="formData.report.op">
						<uni-td>OPPO渠道</uni-td>
						<uni-td>{{formData.report.op.target_num}}</uni-td>
						<uni-td>{{formData.report.op.receive_num}}</uni-td>
						<uni-td>{{formData.report.op.display_num}}</uni-td>
						<uni-td>{{formData.report.op.click_num}}</uni-td>
					</uni-tr>
					<uni-tr v-if="formData.report.vv">
						<uni-td>VIVO渠道</uni-td>
						<uni-td>{{formData.report.vv.target_num}}</uni-td>
						<uni-td>{{formData.report.vv.receive_num}}</uni-td>
						<uni-td>{{formData.report.vv.display_num}}</uni-td>
						<uni-td>{{formData.report.vv.click_num}}</uni-td>
					</uni-tr>
					<uni-tr v-if="formData.report.xm">
						<uni-td>小米渠道</uni-td>
						<uni-td>{{formData.report.xm.target_num}}</uni-td>
						<uni-td>{{formData.report.xm.receive_num}}</uni-td>
						<uni-td>{{formData.report.xm.display_num}}</uni-td>
						<uni-td>{{formData.report.xm.click_num}}</uni-td>
					</uni-tr>
					<!-- <uni-tr>
						<uni-td>小米海外</uni-td>
						<uni-td>{{formData.report.total.target_num}}</uni-td>
						<uni-td>{{formData.report.total.receive_num}}</uni-td>
						<uni-td>{{formData.report.total.display_num}}</uni-td>
						<uni-td>{{formData.report.total.click_num}}</uni-td>
					</uni-tr> -->
					<uni-tr v-if="formData.report.fcm">
						<uni-td>FCM</uni-td>
						<uni-td>{{formData.report.fcm.target_num}}</uni-td>
						<uni-td>{{formData.report.fcm.receive_num}}</uni-td>
						<uni-td>{{formData.report.fcm.display_num}}</uni-td>
						<uni-td>{{formData.report.fcm.click_num}}</uni-td>
					</uni-tr>
					<uni-tr v-if="formData.report.ups">
						<uni-td>UPS</uni-td>
						<uni-td>{{formData.report.ups.target_num}}</uni-td>
						<uni-td>{{formData.report.ups.receive_num}}</uni-td>
						<uni-td>{{formData.report.ups.display_num}}</uni-td>
						<uni-td>{{formData.report.ups.click_num}}</uni-td>
					</uni-tr>
				</uni-table>
			</view>
		</view>
		

	</view>
</template>

<script>
	export default {
		computed:{
			base_data_audience_type(){
				return this.options.audience_type_localdata.filter(e=>e.value == this.formData.audience_type)[0].text
			},
			base_data_platform(){
				return this.options.platform_localdata.filter(e=>e.value == this.formData.platform)[0].text
			}
		},
		data() {
			return {
				formData: {},
				options: {
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
				}
			}
		},
		onLoad({
			data
		}) {
			this.formData = JSON.parse(decodeURIComponent(data));
			console.log(this.formData);
		},
		onReady() {},
		methods: {}
	}
</script>

<style>
	.root {
		padding: 15px;
	}
	
	.base-data{
		margin-bottom: 15px;
	}
	.base-data-table{
		padding: 30px;
	}
	
	.title-box{
		display: flex;
		flex-direction: row;
	}
	
	.uni-table-scroll {
		min-height: auto;
	}

	.tips {
		display: none;
		flex-direction: column;
		font-size: 12px;
		background-color: rgba(0, 0, 0, 0.7);
		color: #fff;
		padding: 12px;
		border-radius: 5px;
		position: absolute;
		left: -10px;
		width: 380px;
		z-index: 999;
		line-height: 30px;
	}
	.help{
		position: relative;
	}
	.help::after{
		display: none;
		content: " ";
		position: absolute;
		left: 4px;
		top: 18px;
		width: 0;
		height: 0;
		border-left: 5px solid transparent;
		border-right: 5px solid transparent;
		border-bottom: 5px solid rgba(0, 0, 0, 0.7);
	}
	.help:hover .help::after,
	.help:hover .tips {
		display: flex;
	}
	
	.total {
		padding: 30px;
		max-width: 800px;
	}

	.channel {
		padding:0 30px;
		max-width: 800px;
	}
</style>
