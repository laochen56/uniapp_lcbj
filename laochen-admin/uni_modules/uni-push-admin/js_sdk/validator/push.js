// 表单校验规则由 schema2code 生成，不建议直接修改校验规则，而建议通过 schema2code 生成, 详情: https://uniapp.dcloud.net.cn/uniCloud/schema


const validator = {
	"platform": {
		"rules": [{
			"required": true
		}],
		"label": "目标平台"
	},
	"audience_type": {
		"rules": [{
				"required": true
			},
			{
				"format": "string"
			},
			{
				validateFunction: function(rule, value, data, callback) {
					// console.log({rule, value, data, callback});
					if (data.audience_type != "ALL" && !data.audience_value) {
						// let text = validator.audience_type.rules[2].range.find(item => item.value == formData
						let textObj = {
							"ALL": "所有用户",
							"user_id": "用户ID",
							"custom_tag": "用户标签",
							"cid": "推送设备标识"
						}
						callback(textObj[data.audience_type] + '不能为空')
						return false
					}
				}
			},
			{
				"range": [{
						"text": "所有用户",
						"value": "ALL"
					},
					{
						"text": "用户ID",
						"value": "user_id"
					},
					{
						"text": "用户标签",
						"value": "custom_tag"
					},
					{
						"text": "推送设备标识",
						"value": "cid"
					}
				]
			}
		],
		"label": "目标用户"
	},
	"audience_value": {
		"rules": [{
				"required": false
			},
			{
				"format": "string"
			},
			{
				"maxLength": 99
			}
		]
	},
	"url": {
		"rules": [{
				"required": true
			},
			{
				"format": "url"
			}
		],
		"label": "url链接，华为平台必须使用https"
	},
	"title": {
		"rules": [{
				"format": "string"
			},
			{
				"required": true
			},
			{
				"maxLength": 32
			}
		],
		"label": "标题"
	},
	"content": {
		"rules": [{
				"required": true
			},
			{
				"format": "string"
			},
			{
				"maxLength": 32
			}
		],
		"label": "副标题"
	},
	"click_type": {
		"rules": [{
				"required": true
			},
			{
				"format": "string"
			},
			{
				"range": [{
						"text": "透传参数并唤醒APP",
						"value": "intent"
					},
					{
						"text": "使用浏览器打开链接",
						"value": "open_url"
					}
				]
			}
		],
		"label": "点击通知后"
	},
	"payload": {
		"rules": [{
				"required": true
			}, {
				"format": "string"
			},
			{
				validateFunction: function(rule, value, data, callback) {
					console.log(value);
					if (!value) {
						callback('非APP端，透传内容不能为空')
					}
				}
			}
		],
		"label": "透传内容"
	},
	"badge": {
		"rules": [{
			"format": "number"
		}],
		"label": "角标"
	},
	"channel": {
		"rules": [{
			"format": "string"
		}],
		"label": "消息渠道channel_id"
	},
	"sound": {
		"rules": [{
			"format": "string"
		}],
		"label": "铃声设置"
	},
	"content-available": {
		"rules": [{
			"format": "bool"
		}],
		"label": "是否为静默消息（仅ios有效）"
	},
	"force_notification": {
		"rules": [{
			"format": "bool"
		}],
		"label": "强制通知栏消息"
	},
}

export {
	validator
}
