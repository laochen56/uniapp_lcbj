(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uni_modules-uni-upgrade-center-pages-version-detail"],{"064e":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={uniForms:a("c005").default,uniFormsItem:a("4a09").default,uniEasyinput:a("1400").default,uniDataCheckbox:a("01d3").default,showInfo:a("b351").default,uniFilePicker:a("a121").default,uniCard:a("f677").default,uniDateformat:a("3cb4").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-container"},[a("v-uni-view",{staticClass:"uni-header"},[a("v-uni-view",{staticClass:"uni-group"},[a("v-uni-view",{staticClass:"uni-title"},[t._v("包类型")]),a("v-uni-view",{staticClass:"uni-sub-title",staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[t._v(t._s(t.type_valuetotext[t.formData.type]))])],1),t.isStable?t._e():a("v-uni-view",{staticClass:"uni-group"},[a("v-uni-button",{staticClass:"uni-button",attrs:{type:"warn",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.deletePackage.apply(void 0,arguments)}}},[t._v("删除")])],1)],1),a("uni-forms",{ref:"form",attrs:{value:t.formData,validateTrigger:"bind",labelWidth:t.labelWidth}},[a("uni-forms-item",{attrs:{name:"appid",label:"AppID",required:!0}},[a("uni-easyinput",{attrs:{disabled:!0,trim:"both"},model:{value:t.formData.appid,callback:function(e){t.$set(t.formData,"appid",e)},expression:"formData.appid"}})],1),a("uni-forms-item",{attrs:{name:"name",label:"应用名称"}},[a("uni-easyinput",{attrs:{disabled:!0,trim:"both"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),a("uni-forms-item",{attrs:{name:"title",label:"更新标题"}},[a("uni-easyinput",{attrs:{disabled:t.detailsState,placeholder:"更新标题"},model:{value:t.formData.title,callback:function(e){t.$set(t.formData,"title",e)},expression:"formData.title"}})],1),a("uni-forms-item",{attrs:{name:"contents",label:"更新内容",required:!0}},[a("v-uni-textarea",{staticClass:"uni-textarea-border",staticStyle:{"box-sizing":"content-box"},attrs:{"auto-height":!0,disabled:t.detailsState,value:t.formData.contents},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.binddata("contents",e.detail.value)},"update:value":function(e){arguments[0]=e=t.$handleEvent(e),function(e){return t.formData.contents=e}.apply(void 0,arguments)}}})],1),a("uni-forms-item",{attrs:{name:"platform",label:"平台",required:!0}},[a("uni-data-checkbox",{attrs:{disabled:!0,multiple:!0,localdata:t.platformLocaldata},model:{value:t.formData.platform,callback:function(e){t.$set(t.formData,"platform",e)},expression:"formData.platform"}})],1),a("uni-forms-item",{attrs:{name:"version",label:"版本号",required:!0}},[a("uni-easyinput",{attrs:{disabled:!0,placeholder:"当前包版本号，必须大于当前已上线版本号"},model:{value:t.formData.version,callback:function(e){t.$set(t.formData,"version",e)},expression:"formData.version"}})],1),t.isWGT?a("uni-forms-item",{key:"min_uni_version",attrs:{name:"min_uni_version",label:"原生App最低版本",required:t.isWGT}},[a("uni-easyinput",{attrs:{disabled:t.detailsState,placeholder:"原生App最低版本"},model:{value:t.formData.min_uni_version,callback:function(e){t.$set(t.formData,"min_uni_version",e)},expression:"formData.min_uni_version"}}),a("show-info",{attrs:{content:t.minUniVersionContent}})],1):t._e(),t.isiOS||t.detailsState?t._e():a("uni-forms-item",{attrs:{label:"上传apk包"}},[a("uni-file-picker",{attrs:{"file-extname":t.fileExtname,disabled:t.hasPackage,returnType:"object","file-mediatype":"all",limit:"1"},on:{success:function(e){arguments[0]=e=t.$handleEvent(e),t.packageUploadSuccess.apply(void 0,arguments)},delete:function(e){arguments[0]=e=t.$handleEvent(e),t.packageDelete.apply(void 0,arguments)}},model:{value:t.appFileList,callback:function(e){t.appFileList=e},expression:"appFileList"}},[a("v-uni-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectFile.apply(void 0,arguments)}}},[t._v("选择文件")])],1),t.hasPackage?a("v-uni-text",{staticStyle:{"padding-left":"20px",color:"#a8a8a8"}},[t._v(t._s(Number(t.appFileList.size/1024/1024).toFixed(2))+"M")]):t._e()],1),a("uni-forms-item",{key:"url",attrs:{name:"url",label:t.isiOS?"AppStore":"下载链接",required:!0}},[a("uni-easyinput",{attrs:{disabled:t.detailsState,placeholder:"下载链接",maxlength:-1},model:{value:t.formData.url,callback:function(e){t.$set(t.formData,"url",e)},expression:"formData.url"}})],1),t.isiOS||t.isWGT||!t.formData.store_list.length?t._e():a("uni-forms-item",{key:"store_list",attrs:{label:"Android应用市场",name:"store_list",labelWidth:"120"}},[a("v-uni-view",{staticStyle:{flex:"1"}},t._l(t.formData.store_list,(function(e,n){return a("v-uni-view",{key:e.id},[a("uni-card",{staticStyle:{margin:"0px 0px 20px 0px"}},[a("v-uni-view",{staticStyle:{display:"flex"}},[a("v-uni-checkbox-group",{staticStyle:{"user-select":"none"},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),function(t){var a=t.detail.value;e.enable=!!a.length}.apply(void 0,arguments)}}},[a("v-uni-label",{staticClass:"title_padding"},[a("v-uni-checkbox",{attrs:{disabled:t.detailsState,value:"scheme",checked:e.enable}}),a("v-uni-text",[t._v("是否启用")])],1)],1)],1),a("uni-forms-item",{attrs:{label:"商店名称"}},[a("uni-easyinput",{attrs:{disabled:!0,trim:"both"},model:{value:e.name,callback:function(a){t.$set(e,"name",a)},expression:"item.name"}})],1),a("uni-forms-item",{attrs:{label:"Scheme"}},[a("uni-easyinput",{attrs:{disabled:!0,trim:"both"},model:{value:e.scheme,callback:function(a){t.$set(e,"scheme",a)},expression:"item.scheme"}})],1),a("uni-forms-item",{attrs:{label:"优先级"}},[a("uni-easyinput",{attrs:{disabled:t.detailsState,type:"number"},model:{value:e.priority,callback:function(a){t.$set(e,"priority",a)},expression:"item.priority"}}),a("show-info",{attrs:{top:-100,left:-180,content:t.priorityContent}})],1)],1)],1)})),1)],1),t.isWGT?a("uni-forms-item",{key:"is_silently",attrs:{name:"is_silently",label:"静默更新"}},[a("v-uni-switch",{attrs:{disabled:t.detailsState,checked:t.formData.is_silently},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.binddata("is_silently",e.detail.value),t.formData.is_silently=e.detail.value}}}),a("show-info",{attrs:{top:-80,content:t.silentlyContent}})],1):t._e(),t.isiOS?t._e():a("uni-forms-item",{key:"is_mandatory",attrs:{name:"is_mandatory",label:"强制更新"}},[a("v-uni-switch",{attrs:{disabled:t.detailsState,checked:t.formData.is_mandatory},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.binddata("is_mandatory",e.detail.value),t.formData.is_mandatory=e.detail.value}}}),a("show-info",{attrs:{width:"230",top:-30,content:t.mandatoryContent}})],1),a("uni-forms-item",{attrs:{name:"stable_publish",label:"上线发行"}},[a("v-uni-switch",{attrs:{disabled:t.detailsState||t.isStable,checked:t.formData.stable_publish},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.binddata("stable_publish",e.detail.value),t.formData.stable_publish=e.detail.value}}}),t.isStable?a("show-info",{attrs:{top:-50,width:"350",content:t.stablePublishContent}}):a("show-info",{attrs:{top:-40,content:t.stablePublishContent2}})],1),a("uni-forms-item",{attrs:{name:"create_date",label:"上传时间"}},[a("uni-dateformat",{attrs:{format:"yyyy-MM-dd hh:mm:ss",date:t.formData.create_date,threshold:[0,0]}})],1),a("uni-forms-item",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{name:"type",label:"安装包类型"}},[a("uni-data-checkbox",{attrs:{localdata:t.formOptions.type_localdata},model:{value:t.formData.type,callback:function(e){t.$set(t.formData,"type",e)},expression:"formData.type"}})],1),a("v-uni-view",{staticClass:"uni-button-group"},[t.detailsState?a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.detailsState=!1}}},[t._v("修改")]):t._e(),t.detailsState?t._e():a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("提交")]),t.detailsState?t._e():a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"warn"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancelEdit.apply(void 0,arguments)}}},[t._v("取消")]),a("v-uni-navigator",{staticStyle:{"margin-left":"15px"},attrs:{"open-type":"navigateBack"}},[a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"}},[t._v("返回")])],1)],1)],1)],1)},r=[]},"10d1":function(t,e,a){"use strict";var n,i=a("da84"),r=a("e2cc"),o=a("f183"),s=a("6d61"),l=a("acac"),u=a("861d"),c=a("69f3").enforce,f=a("7f9a"),d=!i.ActiveXObject&&"ActiveXObject"in i,p=Object.isExtensible,m=function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},h=t.exports=s("WeakMap",m,l);if(f&&d){n=l.getConstructor(m,"WeakMap",!0),o.REQUIRED=!0;var v=h.prototype,b=v["delete"],y=v.has,_=v.get,g=v.set;r(v,{delete:function(t){if(u(t)&&!p(t)){var e=c(this);return e.frozen||(e.frozen=new n),b.call(this,t)||e.frozen["delete"](t)}return b.call(this,t)},has:function(t){if(u(t)&&!p(t)){var e=c(this);return e.frozen||(e.frozen=new n),y.call(this,t)||e.frozen.has(t)}return y.call(this,t)},get:function(t){if(u(t)&&!p(t)){var e=c(this);return e.frozen||(e.frozen=new n),y.call(this,t)?_.call(this,t):e.frozen.get(t)}return _.call(this,t)},set:function(t,e){if(u(t)&&!p(t)){var a=c(this);a.frozen||(a.frozen=new n),y.call(this,t)?g.call(this,t,e):a.frozen.set(t,e)}else g.call(this,t,e);return this}})}},"383e":function(t,e,a){"use strict";var n=a("9561"),i=a.n(n);i.a},"3cb4":function(t,e,a){"use strict";a.r(e);var n=a("91fc"),i=a("7bc6");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);var o,s=a("f0c5"),l=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"7d20afea",null,!1,n["a"],o);e["default"]=l.exports},"58b5":function(t,e,a){"use strict";var n=a("4ea4");a("caad"),a("b64b"),a("2532"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.fields=void 0;var i=n(a("3835"));a("96cf");var r=n(a("1da1")),o=n(a("5530")),s=a("bf3a"),l="iOS",u="Android";function c(t){var e={};for(var a in s.validator)t.includes(a)&&(e[a]=s.validator[a]);return e}var f="appid,name,title,contents,platform,type,version,min_uni_version,url,stable_publish,is_silently,is_mandatory,create_date,store_list";e.fields=f;var d={data:function(){return{labelWidth:"80px",enableiOSWgt:!0,silentlyContent:"静默更新：App升级时会在后台下载wgt包并自行安装。新功能在下次启动App时生效",mandatoryContent:"强制更新：App升级弹出框不可取消",stablePublishContent:"同时只可有一个线上发行版，线上发行不可更设为下线。\n未上线可以设为上线发行并自动替换当前线上发行版",stablePublishContent2:"使用本包替换当前线上发行版",uploadFileContent:"可下载安装包地址。上传文件到云存储自动填写，也可以手动填写",minUniVersionContent:"上次使用新Api或打包新模块的App版本",priorityContent:"检查更新时，按照优先级从大到小依次尝试跳转商店。如果都跳转失败，则会打开浏览器使用下载链接下载apk安装包",latestStableData:[],appFileList:null,type_valuetotext:s.enumConverter.type_valuetotext,preUrl:"",formData:{appid:"",name:"",title:"",contents:"",platform:[],store_list:[],type:"",version:"",min_uni_version:"",url:"",stable_publish:!1,create_date:null},formOptions:{platform_localdata:[{value:"Android",text:"安卓"},{value:"iOS",text:"苹果"}],type_localdata:[{value:"native_app",text:"原生App安装包"},{value:"wgt",text:"App资源包"}]},rules:(0,o.default)({},c(["appid","contents","platform","type","version","min_uni_version","url","stable_publish","title","name","is_silently","is_mandatory","store_list"]))}},onReady:function(){this.$refs.form.setRules(this.rules)},computed:{isWGT:function(){return"wgt"===this.formData.type},isiOS:function(){return!this.isWGT&&this.formData.platform.includes(l)},hasPackage:function(){return this.appFileList&&!!Object.keys(this.appFileList).length},fileExtname:function(){return this.isWGT?["wgt"]:["apk"]},platformLocaldata:function(){return this.isWGT?this.enableiOSWgt?this.formOptions.platform_localdata:[this.formOptions.platform_localdata[0]]:this.formOptions.platform_localdata},uni_platform:function(){return(this.isiOS?l:u).toLocaleLowerCase()}},methods:{packageUploadSuccess:function(t){uni.showToast({icon:"success",title:"上传成功",duration:800}),this.preUrl=this.formData.url,this.formData.url=t.tempFilePaths[0]},packageDelete:function(t){var e=this;return(0,r.default)(regeneratorRuntime.mark((function a(){var n,r,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.hasPackage){a.next=2;break}return a.abrupt("return");case 2:return a.next=4,e.$request("deleteFile",{fileList:[t.tempFilePath]},{functionName:"uni-app-manager"});case 4:n=a.sent,r=(0,i.default)(n,1),o=r[0],o.success&&(uni.showToast({icon:"success",title:"删除成功",duration:800}),e.formData.url=e.preUrl,e.$refs.form.clearValidate("url"));case 8:case"end":return a.stop()}}),a)})))()},selectFile:function(){this.hasPackage&&uni.showToast({icon:"none",title:"只可上传一个文件，请删除已上传后重试",duration:1e3})},createCenterRecord:function(t){return(0,o.default)((0,o.default)({},t),{},{uni_platform:this.uni_platform,create_env:"upgrade-center"})},createCenterQuery:function(t){var e=t.appid;return{appid:e,create_env:"upgrade-center"}},createStatQuery:function(t){var e=t.appid,a=t.type,n=t.version,i=t.uni_platform;return{appid:e,type:a,version:n,uni_platform:i||this.uni_platform,create_env:"uni-stat",stable_publish:!1}}}};e.default=d},7037:function(t,e,a){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}a("a4d3"),a("e01a"),a("d28b"),a("d3b7"),a("3ca3"),a("ddb0"),t.exports=n},"7bc6":function(t,e,a){"use strict";a.r(e);var n=a("9222"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"86a5":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.show-stable-info[data-v-9ee7a570]{position:absolute;left:165px;padding:5px 10px;background-color:#f4f4f5;color:#909399;border-radius:4px;border:1px solid #e9e9eb}[data-v-9ee7a570] .uni-forms-item__content{display:flex;align-items:center}.uni-button-group uni-button[data-v-9ee7a570]{margin-left:15px}.uni-button-group uni-button[data-v-9ee7a570]:first-child{margin-left:0}',""]),t.exports=e},"91fc":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-text",[t._v(t._s(t.dateShow))])},r=[]},9222:function(t,e,a){"use strict";a("a9e3"),a("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a("274a"),i={name:"uniDateformat",props:{date:{type:[Object,String,Number],default:function(){return"-"}},locale:{type:String,default:"zh"},threshold:{type:Array,default:function(){return[0,0]}},format:{type:String,default:"yyyy/MM/dd hh:mm:ss"},refreshRate:{type:[Number,String],default:0}},data:function(){return{refreshMark:0}},computed:{dateShow:function(){return this.refreshMark,(0,n.friendlyDate)(this.date,{locale:this.locale,threshold:this.threshold,format:this.format})}},watch:{refreshRate:{handler:function(){this.setAutoRefresh()},immediate:!0}},methods:{refresh:function(){this.refreshMark++},setAutoRefresh:function(){var t=this;clearInterval(this.refreshInterval),this.refreshRate&&(this.refreshInterval=setInterval((function(){t.refresh()}),parseInt(this.refreshRate)))}}};e.default=i},9418:function(t,e,a){"use strict";a.r(e);var n=a("b84d"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},9561:function(t,e,a){var n=a("86a5");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("0cf5eb3a",n,!0,{sourceMap:!1,shadowMode:!1})},acac:function(t,e,a){"use strict";var n=a("e2cc"),i=a("f183").getWeakData,r=a("825a"),o=a("861d"),s=a("19aa"),l=a("2266"),u=a("b727"),c=a("5135"),f=a("69f3"),d=f.set,p=f.getterFor,m=u.find,h=u.findIndex,v=0,b=function(t){return t.frozen||(t.frozen=new y)},y=function(){this.entries=[]},_=function(t,e){return m(t.entries,(function(t){return t[0]===e}))};y.prototype={get:function(t){var e=_(this,t);if(e)return e[1]},has:function(t){return!!_(this,t)},set:function(t,e){var a=_(this,t);a?a[1]=e:this.entries.push([t,e])},delete:function(t){var e=h(this.entries,(function(e){return e[0]===t}));return~e&&this.entries.splice(e,1),!!~e}},t.exports={getConstructor:function(t,e,a,u){var f=t((function(t,n){s(t,f,e),d(t,{type:e,id:v++,frozen:void 0}),void 0!=n&&l(n,t[u],t,a)})),m=p(e),h=function(t,e,a){var n=m(t),o=i(r(e),!0);return!0===o?b(n).set(e,a):o[n.id]=a,t};return n(f.prototype,{delete:function(t){var e=m(this);if(!o(t))return!1;var a=i(t);return!0===a?b(e)["delete"](t):a&&c(a,e.id)&&delete a[e.id]},has:function(t){var e=m(this);if(!o(t))return!1;var a=i(t);return!0===a?b(e).has(t):a&&c(a,e.id)}}),n(f.prototype,a?{get:function(t){var e=m(this);if(o(t)){var a=i(t);return!0===a?b(e).get(t):a?a[e.id]:void 0}},set:function(t,e){return h(this,t,e)}}:{add:function(t){return h(this,t,!0)}}),f}}},b84d:function(t,e,a){"use strict";(function(t){var n=a("dbce"),i=a("4ea4");a("7db0"),a("4160"),a("caad"),a("d3b7"),a("acd8"),a("25f0"),a("2532"),a("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var r=i(a("1da1")),o=(a("bf3a"),n(a("58b5"))),s=a("c07f"),l=t.database(),u=(l.command,s.appVersionListDbName);var c={mixins:[o.default],data:function(){return{showStableInfo:!1,isStable:!0,originalData:{},detailsState:!0}},onLoad:function(t){var e=this;return(0,r.default)(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.id,e.formDataId=n,a.next=4,e.getDetail(n);case 4:return e.isStable=e.formData.stable_publish,a.next=7,e.getLatestVersion();case 7:e.latestStableData=a.sent,e.isWGT&&e.rules.min_uni_version.rules.push({required:!0});case 9:case"end":return a.stop()}}),a)})))()},methods:{submit:function(){var t=this;uni.showLoading({mask:!0}),this.$refs.form.validate(["store_list"]).then((function(e){e.store_list&&e.store_list.forEach((function(t){t.priority=parseFloat(t.priority)})),t.submitForm(e)})).catch((function(t){uni.hideLoading()}))},submitForm:function(t){var e=this;return(0,r.default)(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:n=l.collection(u),n.doc(e.formDataId).update(t).then(function(){var a=(0,r.default)(regeneratorRuntime.mark((function a(i){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.isStable||!0!==t.stable_publish||!e.latestStableData){a.next=3;break}return a.next=3,n.doc(e.latestStableData._id).update({stable_publish:!1});case 3:uni.showToast({title:"修改成功"}),e.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500);case 6:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}()).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}));case 2:case"end":return a.stop()}}),a)})))()},getDetail:function(t){var e=this;return uni.showLoading({mask:!0}),l.collection(u).doc(t).field(o.fields).get().then((function(t){var a=t.result.data[0];a&&(e.formData=a,e.originalData=(0,s.deepClone)(e.formData))})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))},deletePackage:function(){var t=this;uni.showModal({title:"提示",content:"是否删除该版本",success:function(e){e.confirm&&(uni.showLoading({mask:!0}),l.collection(u).doc(t.formDataId).remove().then((function(){uni.showToast({title:"删除成功"}),t.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()})))}})},getLatestVersion:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={appid:t.formData.appid,type:t.formData.type,stable_publish:!0},t.isWGT||(a.platform=t.formData.platform[0]),e.next=4,l.collection(u).where(a).get();case 4:return n=e.sent,e.abrupt("return",n.result.data.find((function(e){return e.platform.toString()===t.formData.platform.toString()})));case 6:case"end":return e.stop()}}),e)})))()},cancelEdit:function(){var t=this,e="";!this.isiOS&&this.hasPackage&&(e+="\n将会删除已上传的包"),uni.showModal({title:"取消修改",content:e,success:function(e){if(e.confirm&&(t.formData=(0,s.deepClone)(t.originalData),t.detailsState=!0,t.hasPackage)){var a=[];a.push(t.appFileList.url),t.$request("deleteFile",{fileList:a},{functionName:"upgrade-center"})}}})}}};e.default=c}).call(this,a("a9ff")["default"])},bf3a:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.enumConverter=e.validator=void 0;var n={appid:{rules:[{required:!0},{format:"string"}],label:"AppID"},name:{rules:[{format:"string"}],label:"应用名称"},title:{rules:[{format:"string"}],label:"更新标题"},contents:{rules:[{required:!0},{format:"string"}],label:"更新内容"},platform:{rules:[{required:!0},{range:[{value:"Android",text:"安卓"},{value:"iOS",text:"苹果"}]}],label:"平台"},type:{rules:[{required:!0},{format:"string"},{range:[{value:"native_app",text:"原生App安装包"},{value:"wgt",text:"wgt资源包"}]}],label:"安装包类型"},version:{rules:[{required:!0},{format:"string"}],label:"版本号"},min_uni_version:{rules:[{format:"string"}],label:"原生App最低版本"},url:{rules:[{required:!0},{format:"string"}],label:"链接"},stable_publish:{rules:[{format:"bool"}],label:"上线发行"},create_date:{rules:[{format:"timestamp"}],label:"上传时间"},is_silently:{rules:[{format:"bool"}],label:"静默更新",defaultValue:!1},is_mandatory:{rules:[{format:"bool"}],label:"强制更新",defaultValue:!1},store_list:{rules:[{format:"array"}],label:"应用市场"}};e.validator=n;var i={platform_valuetotext:[{value:"Android",text:"安卓"},{value:"iOS",text:"苹果"}],type_valuetotext:{native_app:"原生App安装包",wgt:"wgt资源包"}};e.enumConverter=i},c07f:function(t,e,a){"use strict";function n(t){return"[object Array]"===Object.prototype.toString.call(t)}function i(t){if([null,void 0,NaN,!1].includes(t))return t;if("object"!==typeof t&&"function"!==typeof t)return t;var e=n(t)?[]:{};for(var a in t)t.hasOwnProperty(a)&&(e[a]="object"===typeof t[a]?i(t[a]):t[a]);return e}a("caad"),a("d3b7"),a("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.deepClone=i,e.defaultDisplayApp=e.appVersionListDbName=e.appListDbName=void 0;var r="opendb-app-list";e.appListDbName=r;var o="opendb-app-versions";e.appVersionListDbName=o;var s="";e.defaultDisplayApp=s},d54a:function(t,e,a){"use strict";a.r(e);var n=a("064e"),i=a("9418");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("383e");var o,s=a("f0c5"),l=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"9ee7a570",null,!1,n["a"],o);e["default"]=l.exports},dbce:function(t,e,a){a("e439"),a("d3b7"),a("3ca3"),a("10d1"),a("ddb0");var n=a("7037");function i(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return i=function(){return t},t}function r(t){if(t&&t.__esModule)return t;if(null===t||"object"!==n(t)&&"function"!==typeof t)return{default:t};var e=i();if(e&&e.has(t))return e.get(t);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var s=r?Object.getOwnPropertyDescriptor(t,o):null;s&&(s.get||s.set)?Object.defineProperty(a,o,s):a[o]=t[o]}return a["default"]=t,e&&e.set(t,a),a}t.exports=r}}]);