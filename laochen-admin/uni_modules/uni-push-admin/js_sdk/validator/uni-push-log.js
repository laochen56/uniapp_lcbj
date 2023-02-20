// 表单校验规则由 schema2code 生成，不建议直接修改校验规则，而建议通过 schema2code 生成, 详情: https://uniapp.dcloud.net.cn/uniCloud/schema


const validator = {
	"title": {
		"rules": [],
		"label": "通知标题"
	},
	"subtitle": {
		"rules": [],
		"label": "副标题"
	},
	"audience_type": {
		"rules": [{
				"format": "string"
			},
			{
				"range": [{
						"text": "所有用户",
						"value": "ALL"
					},
					{
						"text": "指定用户ID",
						"value": "user_id"
					},
					{
						"text": "指定用户标签",
						"value": "custom_tag"
					},
					{
						"text": "客户端标识",
						"value": "cid"
					}
				]
			}
		],
		"label": "目标用户"
	},
	"audience_value": {
		"rules": [],
		"label": "目标用户标识"
	},
	"platform": {
		"rules": [{
				"format": "array"
			},
			{
				"range": [{
						"text": "小程序和H5",
						"value": "web"
					},
					{
						"text": "iOS",
						"value": "ios"
					},
					{
						"text": "Android",
						"value": "android"
					}
				]
			}
		],
		"label": "目标平台"
	},
	"state": {
		"rules": [],
		"label": "推送状态"
	},
	"channel": {
		"rules": [],
		"label": "渠道id"
	},
	"url": {
		"rules": [{
			"format": "url"
		}],
		"label": "点击打开链接"
	},
	"payload": {
		"rules": [],
		"label": "消息内容"
	},
	"badge": {
		"rules": [],
		"label": "角标值"
	},
	"sound": {
		"rules": [{
			"format": "string"
		}],
		"label": "铃声文件名"
	},
	"content_available": {
		"rules": [],
		"label": "消息类型（仅iOS支持）"
	},
	"appid": {
		"rules": [{
			"format": "string"
		}],
		"label": "应用的id"
	},
	"taskid": {
		"rules": [{
			"format": "string"
		}],
		"label": "任务id"
	},
	"msg_num": {
		"rules": [{
			"format": "int"
		}],
		"label": "消息可下发数"
	},
	"target_num": {
		"rules": [{
			"format": "int"
		}],
		"label": "消息下发数"
	},
	"receive_num": {
		"rules": [{
			"format": "int"
		}],
		"label": "消息接收数"
	},
	"display_num": {
		"rules": [{
			"format": "int"
		}],
		"label": "消息展示数"
	},
	"click_num": {
		"rules": [{
			"format": "int"
		}],
		"label": "消息点击数"
	}
}

const enumConverter = {
	"audience_type_valuetotext": {
		"ALL": "所有用户",
		"user_id": "用户ID",
		"user_tag": "用户标签",
		"device_id": "设备id",
		"push_clientid": "个推客户端id",
		"getui_custom_tag": "个推自定义客户端标签"
	},
	"platform_valuetotext": [{
			"text": "小程序和H5",
			"value": "web"
		},
		{
			"text": "iOS",
			"value": "ios"
		},
		{
			"text": "Android",
			"value": "android"
		}
	]
}

function filterToWhere(filter, command) {
	let where = {}
	for (let field in filter) {
		let {
			type,
			value
		} = filter[field]
		switch (type) {
			case "search":
				if (typeof value === 'string' && value.length) {
					where[field] = new RegExp(value)
				}
				break;
			case "select":
				if (value.length) {
					let selectValue = []
					for (let s of value) {
						selectValue.push(command.eq(s))
					}
					where[field] = command.or(selectValue)
				}
				break;
			case "range":
				if (value.length) {
					let gt = value[0]
					let lt = value[1]
					where[field] = command.and([command.gte(gt), command.lte(lt)])
				}
				break;
			case "date":
				if (value.length) {
					let [s, e] = value
					let startDate = new Date(s)
					let endDate = new Date(e)
					where[field] = command.and([command.gte(startDate), command.lte(endDate)])
				}
				break;
			case "timestamp":
				if (value.length) {
					let [startDate, endDate] = value
					where[field] = command.and([command.gte(startDate), command.lte(endDate)])
				}
				break;
		}
	}
	return where
}

export {
	validator,
	enumConverter,
	filterToWhere
}
