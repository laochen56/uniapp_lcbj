# 文档已移至uni-push文档[https://uniapp.dcloud.io/uniCloud/uni-push/introduction.html](https://uniapp.dcloud.io/uniCloud/uni-push/introduction.html)

关于插件更新的说明：

所有uni_modules，在HBuilderX里点右键都可以直接升级。或者在插件市场导入覆盖。

覆盖时HBuilderX会弹出代码差异比对，可以决定接受哪些更改、拒绝哪些更改。

当拒绝局部修改时，注意可能产生兼容性问题。



### 安装指南：
在插件市场打开本插件页面，在右侧点击`使用 HBuilderX 导入插件`，选择你的 `uniCloud admin` 项目点击确定

1. 等待下载安装完毕。由于本插件依赖一些插件，下载完成后会显示合并插件页面，自行选择即可

2. 找到`/uni_modules/uni-push-admin/uniCloud/cloudfunctions/uni-push-co/index.obj.js`，右键上传DB Schema。如果你在部署客户端时已经上传本步骤可跳过

3. 找到`/uni_modules/uni-push-admin/pages_init.json`，手动复制以下内容，添加到项目的 `pages.json` 文件 `pages` 节点

```js
{
	"path": "uni_modules/uni-push-admin/pages/extra/extra",
	"style": {
		"navigationBarTitleText": "push-admin"
		/* #ifndef H5 */
		,"navigationStyle": "default"
		/* #endif */
	}
}, {
	"path": "uni_modules/uni-push-admin/pages/log/list",
	"style": {
		"navigationBarTitleText": "推送记录"
		/* #ifndef H5 */
		,"navigationStyle": "default"
		/* #endif */
	}
}, {
	"path": "uni_modules/uni-push-admin/pages/log/detail",
	"style": {
		"navigationBarTitleText": "推送详情",
		"navigationStyle": "default"
	}
}, {
	"path": "uni_modules/uni-push-admin/pages/sendMessage/sendMessage",
	"style": {
		"navigationBarTitleText": "消息推送"
		/* #ifndef H5 */
		,"navigationStyle": "default"
		/* #endif */
	}
}
```



4. 运行项目到`Chrome`（注意：连接云端云函数）

5. 运行起来uniCloud admin，菜单管理模块会自动读取`/uni_modules/uni-push-admin/pages_init.json`文件中的菜单配置，生成【待添加菜单】，选中`推送管理`、`消息推送`、`推送统计`、`其他功能`，点击`添加选中的菜单`即可

<div align="center">
<img src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/c2465f46-f8d8-4bb2-895a-66e3105b09ad.jpg" width="800"></img>
</div>

5. 添加成功后，就可以在左侧的菜单栏中找到`推送管理`菜单