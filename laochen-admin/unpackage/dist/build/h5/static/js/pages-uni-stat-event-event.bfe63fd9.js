(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-uni-stat-event-event"],{"111e":function(e,t,a){"use strict";var i=a("f0ec"),n=a.n(i);n.a},"170a":function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */@media screen and (max-width:500px){.hide-on-phone[data-v-e55e4c64]{display:none}}.uni-stat__select[data-v-e55e4c64]{display:flex;align-items:center;padding:15px;cursor:pointer}.uni-label-text[data-v-e55e4c64]{font-size:14px;font-weight:700;color:#6a6a6a;margin:auto 0;margin-right:5px}.uni-select[data-v-e55e4c64]{font-size:14px;border:1px solid #dcdcdc;box-sizing:border-box;border-radius:4px;padding:0 5px;position:relative;display:flex;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;flex-direction:row;align-items:center;border-bottom:solid 1px #dcdcdc}.uni-select__label[data-v-e55e4c64]{font-size:16px;line-height:22px;padding-right:10px;color:#909399}.uni-select__input-box[data-v-e55e4c64]{min-height:36px;position:relative;display:flex;flex:1;flex-direction:row;align-items:center}.uni-select__input[data-v-e55e4c64]{flex:1;font-size:14px;height:22px;line-height:22px}.uni-select__input-plac[data-v-e55e4c64]{font-size:14px;color:#909399}.uni-select__selector[data-v-e55e4c64]{box-sizing:border-box;position:absolute;top:calc(100% + 12px);left:0;width:100%;background-color:#fff;border:1px solid #ebeef5;border-radius:6px;box-shadow:0 2px 12px 0 rgba(0,0,0,.1);z-index:2;padding:4px 0}.uni-select__selector-scroll[data-v-e55e4c64]{max-height:200px;box-sizing:border-box}.uni-select__selector-empty[data-v-e55e4c64],\r\n.uni-select__selector-item[data-v-e55e4c64]{display:flex;cursor:pointer;line-height:36px;font-size:14px;text-align:center;\r\n  /* border-bottom: solid 1px $uni-border-3; */padding:0 10px}.uni-select__selector-item[data-v-e55e4c64]:hover{background-color:#f9f9f9}.uni-select__selector-empty[data-v-e55e4c64]:last-child,\r\n.uni-select__selector-item[data-v-e55e4c64]:last-child{border-bottom:none}.uni-select__selector__disabled[data-v-e55e4c64]{opacity:.4;cursor:default}\r\n/* picker 弹出层通用的指示小三角 */.uni-popper__arrow[data-v-e55e4c64],\r\n.uni-popper__arrow[data-v-e55e4c64]::after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid;border-width:6px}.uni-popper__arrow[data-v-e55e4c64]{filter:drop-shadow(0 2px 12px rgba(0,0,0,.03));top:-6px;left:10%;margin-right:3px;border-top-width:0;border-bottom-color:#ebeef5}.uni-popper__arrow[data-v-e55e4c64]::after{content:" ";top:1px;margin-left:-6px;border-top-width:0;border-bottom-color:#fff}.uni-select__input-text[data-v-e55e4c64]{width:280px;color:#3a3a3a;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis;overflow:hidden}.uni-select__input-placeholder[data-v-e55e4c64]{color:#6a6a6a}.uni-select--mask[data-v-e55e4c64]{position:fixed;top:0;bottom:0;right:0;left:0}',""]),e.exports=t},"245e":function(e,t,a){"use strict";var i=a("79d1"),n=a.n(i);n.a},"527e7":function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return i}));var i={uniIcons:a("bc0e").default},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"uni-stat__select"},[e.label?a("span",{staticClass:"uni-label-text hide-on-phone"},[e._v(e._s(e.label+"："))]):e._e(),a("v-uni-view",{staticClass:"uni-select"},[a("v-uni-view",{staticClass:"uni-select__input-box",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toggleSelector.apply(void 0,arguments)}}},[e.current?a("v-uni-view",{staticClass:"uni-select__input-text"},[e._v(e._s(e.current))]):a("v-uni-view",{staticClass:"uni-select__input-text uni-select__input-placeholder"},[e._v(e._s(e.typePlaceholder))]),e.current&&e.clear?a("uni-icons",{attrs:{type:"clear",color:"#e1e1e1",size:"18"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clearVal.apply(void 0,arguments)}}}):a("uni-icons",{attrs:{type:e.showSelector?"top":"bottom",size:"14",color:"#999"}})],1),e.showSelector?a("v-uni-view",{staticClass:"uni-select--mask",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toggleSelector.apply(void 0,arguments)}}}):e._e(),e.showSelector?a("v-uni-view",{staticClass:"uni-select__selector"},[a("v-uni-view",{staticClass:"uni-popper__arrow"}),a("v-uni-scroll-view",{staticClass:"uni-select__selector-scroll",attrs:{"scroll-y":"true"}},[0===e.mixinDatacomResData.length?a("v-uni-view",{staticClass:"uni-select__selector-empty"},[a("v-uni-text",[e._v(e._s(e.emptyTips))])],1):e._l(e.mixinDatacomResData,(function(t,i){return a("v-uni-view",{key:i,staticClass:"uni-select__selector-item",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.change(t)}}},[a("v-uni-text",{class:{"uni-select__selector__disabled":t.disable}},[e._v(e._s(e.formatItemName(t)))])],1)}))],2)],1):e._e()],1)],1)},o=[]},"5cdd":function(e,t,a){"use strict";var i=a("5d97"),n=a.n(i);n.a},"5d97":function(e,t,a){var i=a("b04c");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("7146d307",i,!0,{sourceMap:!1,shadowMode:!1})},"5fee":function(e,t,a){"use strict";a.r(t);var i=a("8a05"),n=a("75bc");for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a("5cdd");var r,l=a("f0c5"),s=Object(l["a"])(n["default"],i["b"],i["c"],!1,null,"604a1870",null,!1,i["a"],r);t["default"]=s.exports},"687c":function(e,t,a){"use strict";a.r(t);var i=a("e1cc"),n=a("bcdb");for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a("111e");var r,l=a("f0c5"),s=Object(l["a"])(n["default"],i["b"],i["c"],!1,null,"d5ef9116",null,!1,i["a"],r);t["default"]=s.exports},"6dd8":function(e,t,a){"use strict";a.r(t);var i=a("527e7"),n=a("b260");for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a("245e");var r,l=a("f0c5"),s=Object(l["a"])(n["default"],i["b"],i["c"],!1,null,"e55e4c64",null,!1,i["a"],r);t["default"]=s.exports},"734b":function(e,t,a){"use strict";(function(e){var i=a("4ea4");a("d3b7"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("b85c")),o=a("c859"),r=i(a("760a")),l={data:function(){return{fieldsMap:r.default,query:{appid:"",platform_id:"",uni_platform:"",channel_id:"",version_id:"",create_time:[]},options:{pageSize:20,pageCurrent:1,total:0},loading:!1,currentDateTab:1,tableData:[],panelData:[],queryId:"",updateValue:"",channelData:[]}},computed:{channelQuery:function(){var e=this.query.platform_id;return(0,o.stringifyQuery)({platform_id:e})},versionQuery:function(){var e=this.query,t=e.appid,a=e.uni_platform,i=(0,o.stringifyQuery)({appid:t,uni_platform:a});return i}},created:function(){var e=this;this.debounceGet=(0,o.debounce)((function(){return e.getAllData()})),this.getChannelData()},watch:{query:{deep:!0,handler:function(e){this.options.pageCurrent=1,this.debounceGet()}}},methods:{useDatetimePicker:function(){this.currentDateTab=-1},changeAppid:function(e){this.getChannelData(e,!1)},changePlatform:function(e,t,a,i){this.getChannelData(null,e),this.query.version_id=0,this.query.uni_platform=i.code},changeTimeRange:function(e,t){this.currentDateTab=t;var a=(0,o.getTimeOfSomeDayAgo)(e),i=(0,o.getTimeOfSomeDayAgo)(0)-1;this.query.create_time=[a,i]},changePageCurrent:function(e){this.options.pageCurrent=e.current,this.getTableData()},changePageSize:function(e){this.options.pageSize=e,this.options.pageCurrent=1,this.getTableData()},getAllData:function(e){this.getTableData(e)},getTableData:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,o.stringifyQuery)(this.query,null,["uni_platform"]),i=this.options.pageCurrent;this.loading=!0;var l=e.database();l.collection("uni-stat-event-logs","uni-stat-app-platforms").where(a).orderBy("create_time","desc").skip((i-1)*this.options.pageSize).limit(this.options.pageSize).get({getCount:!0}).then((function(e){var a=e.result,i=a.count,l=a.data;t.tableData=[],t.options.total=i;var s,c=(0,n.default)(l);try{for(c.s();!(s=c.n()).done;){var u=s.value;u.create_time=(0,o.parseDateTime)(u.create_time,"dateTime"),u.platform=u.platform&&u.platform[0].name,(0,o.mapfields)(r.default,u,u),t.tableData.push(u)}}catch(d){c.e(d)}finally{c.f()}})).catch((function(e){})).finally((function(){t.loading=!1}))},getChannelData:function(t,a){var i=this;this.query.channel_id="";var n=e.database(),o={};t=t||this.query.appid,t&&(o.appid=t),a=a||this.query.platform_id,a&&(o.platform_id=a);var r=n.collection("uni-stat-app-platforms").field("_id, name").getTemp(),l=n.collection("uni-stat-app-channels").where(o).field("_id, channel_name, create_time, platform_id").getTemp();n.collection(l,r).orderBy("platform_id","asc").get().then((function(e){var t,a=e.result.data,n=[];if(a.length>0)for(var o in a)t=a[o].channel_name?a[o].channel_name:"默认",a[o].platform_id.length>0&&(t=a[o].platform_id[0].name+"-"+t),n.push({value:a[o]._id,text:t});i.channelData=n})).catch((function(e){})).finally((function(){}))}}};t.default=l}).call(this,a("a9ff")["default"])},"75bc":function(e,t,a){"use strict";a.r(t);var i=a("ecf5"),n=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t["default"]=n.a},"760a":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=[{title:"创建时间",field:"create_time",tooltip:"",formatter:""},{title:"事件ID",field:"event_key",stat:-1},{title:"事件参数",field:"param",tooltip:""},{title:"平台",field:"platform",tooltip:""},{title:"设备标识",field:"device_id",tooltip:""}];t.default=i},"79d1":function(e,t,a){var i=a("170a");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("225a6869",i,!0,{sourceMap:!1,shadowMode:!1})},"7a12":function(e,t,a){"use strict";(function(e){a("99af"),a("7db0"),a("4160"),a("c975"),a("a9e3"),a("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"uni-stat-select",mixins:[e.mixinDatacom||{}],data:function(){return{showSelector:!1,current:"",mixinDatacomResData:[],apps:[],channels:[]}},props:{localdata:{type:Array,default:function(){return[]}},value:{type:[String,Number],default:""},modelValue:{type:[String,Number],default:""},label:{type:String,default:""},placeholder:{type:String,default:"请选择"},emptyTips:{type:String,default:"无选项"},clear:{type:Boolean,default:!0},defItem:{type:Number,default:0}},created:function(){this.last="".concat(this.collection,"_last_selected_option_value"),this.collection&&!this.localdata.length&&this.mixinDatacomEasyGet()},computed:{typePlaceholder:function(){var e={"opendb-app-versions":"版本","opendb-app-channels":"渠道","opendb-app-list":"应用"},t="请选择",a=e[this.collection];return a?t+a:t}},watch:{where:function(e){this.mixinDatacomEasyGet()},localdata:{immediate:!0,handler:function(e,t){Array.isArray(e)&&(this.mixinDatacomResData=e)}},value:function(){this.initDefVal()},mixinDatacomResData:{immediate:!0,handler:function(e){e.length&&this.initDefVal()}}},methods:{initDefVal:function(){var e="";if(!this.value&&0!==this.value||this.isDisabled(this.value))if(!this.modelValue&&0!==this.modelValue||this.isDisabled(this.modelValue)){var t;if(this.collection&&(t=uni.getStorageSync(this.last)),t||0===t)e=t;else{var a="";this.defItem>0&&this.defItem<this.mixinDatacomResData.length&&(a=this.mixinDatacomResData[this.defItem-1].value),e=a}this.emit(e)}else e=this.modelValue;else e=this.value;var i=this.mixinDatacomResData.find((function(t){return t.value===e}));this.current=i?this.formatItemName(i):""},isDisabled:function(e){var t=!1;return this.mixinDatacomResData.forEach((function(a){a.value===e&&(t=a.disable)})),t},clearVal:function(){this.emit(""),this.collection&&uni.removeStorageSync(this.last)},change:function(e){e.disable||(this.showSelector=!1,this.current=this.formatItemName(e),this.emit(e.value))},emit:function(e){this.$emit("change",e),this.$emit("input",e),this.$emit("update:modelValue",e),this.collection&&uni.setStorageSync(this.last,e)},toggleSelector:function(){this.showSelector=!this.showSelector},formatItemName:function(e){var t=e.text,a=e.value,i=e.channel_code;return i=i?"(".concat(i,")"):"",this.collection.indexOf("app-list")>0?"".concat(t,"(").concat(a,")"):t||"未命名".concat(i)}}};t.default=i}).call(this,a("a9ff")["default"])},"8a05":function(e,t,a){"use strict";var i;a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return i}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.isShowA?a("a",{staticClass:"uni-link",class:{"uni-link--withline":!0===e.showUnderLine||"true"===e.showUnderLine},style:{color:e.color,fontSize:e.fontSize+"px"},attrs:{href:e.href,download:e.download}},[e._t("default",[e._v(e._s(e.text))])],2):a("v-uni-text",{staticClass:"uni-link",class:{"uni-link--withline":!0===e.showUnderLine||"true"===e.showUnderLine},style:{color:e.color,fontSize:e.fontSize+"px"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openURL.apply(void 0,arguments)}}},[e._t("default",[e._v(e._s(e.text))])],2)},o=[]},b04c:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,"\n.uni-link[data-v-604a1870]{cursor:pointer}\n.uni-link--withline[data-v-604a1870]{text-decoration:underline}",""]),e.exports=t},b260:function(e,t,a){"use strict";a.r(t);var i=a("7a12"),n=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t["default"]=n.a},bcdb:function(e,t,a){"use strict";a.r(t);var i=a("734b"),n=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t["default"]=n.a},e1cc:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return i}));var i={uniStatBreadcrumb:a("0f01").default,uniLink:a("5fee").default,uniDataSelect:a("6dd8").default,uniStatTabs:a("d9f1").default,uniDatetimePicker:a("4d3d").default,uniTable:a("7dfe").default,uniTr:a("31d4").default,uniTh:a("d6c2").default,uniTd:a("6999").default,uniPagination:a("bd36").default,uniPopup:a("9057").default,uniPopupDialog:a("ed6b").default},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"fix-top-window"},[a("v-uni-view",{staticClass:"uni-header"},[a("uni-stat-breadcrumb",{staticClass:"uni-stat-breadcrumb-on-phone"}),a("v-uni-view",{staticClass:"uni-group"},[a("v-uni-view",{staticClass:"uni-sub-title hide-on-phone"},[e._v("分析用户自定义事件"),a("uni-link",{attrs:{href:"https://ask.dcloud.net.cn/article/36304",text:"自定义事件说明>>"}})],1)],1)],1),a("v-uni-view",{staticClass:"uni-container"},[a("v-uni-view",{staticClass:"uni-stat--x flex"},[a("uni-data-select",{attrs:{collection:"opendb-app-list",field:"appid as value, name as text",orderby:"text asc",defItem:1,label:"应用选择",clear:!1},model:{value:e.query.appid,callback:function(t){e.$set(e.query,"appid",t)},expression:"query.appid"}}),a("uni-data-select",{attrs:{collection:"opendb-app-versions",where:e.versionQuery,field:"_id as value, version as text",orderby:"text asc",label:"版本选择"},model:{value:e.query.version_id,callback:function(t){e.$set(e.query,"version_id",t)},expression:"query.version_id"}}),a("v-uni-view",{staticClass:"flex"},[a("uni-stat-tabs",{attrs:{label:"日期选择",current:e.currentDateTab,mode:"date"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changeTimeRange.apply(void 0,arguments)}}}),a("uni-datetime-picker",{staticClass:"uni-stat-datetime-picker",class:{"uni-stat__actived":e.currentDateTab<0&&!!e.query.create_time.length},attrs:{type:"daterange",end:(new Date).getTime(),returnType:"timestamp",clearIcon:!1},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.useDatetimePicker.apply(void 0,arguments)}},model:{value:e.query.create_time,callback:function(t){e.$set(e.query,"create_time",t)},expression:"query.create_time"}})],1)],1),a("v-uni-view",{staticClass:"uni-stat--x"},[a("uni-stat-tabs",{attrs:{label:"平台选择",type:"boldLine",mode:"platform"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changePlatform.apply(void 0,arguments)}},model:{value:e.query.platform_id,callback:function(t){e.$set(e.query,"platform_id",t)},expression:"query.platform_id"}}),e.query.platform_id&&-1===e.query.platform_id.indexOf("==")?a("uni-data-select",{attrs:{localdata:e.channelData,label:"渠道选择"},model:{value:e.query.channel_id,callback:function(t){e.$set(e.query,"channel_id",t)},expression:"query.channel_id"}}):e._e()],1),a("v-uni-view",{staticClass:"uni-stat--x p-m"},[a("uni-table",{attrs:{loading:e.loading,border:!0,stripe:!0,emptyText:e.$t("common.empty")}},[a("uni-tr",[e._l(e.fieldsMap,(function(t,i){return[t.title?a("uni-th",{key:i,attrs:{align:"center"}},[e._v(e._s(t.title))]):e._e()]}))],2),e._l(e.tableData,(function(t,i){return a("uni-tr",{key:i},[e._l(e.fieldsMap,(function(i,n){return[a("uni-td",{attrs:{align:"center"}},[e._v(e._s(void 0!==t[i.field]?t[i.field]:"-"))])]}))],2)}))],2),a("v-uni-view",{staticClass:"uni-pagination-box"},[a("uni-pagination",{attrs:{"show-icon":!0,"show-page-size":!0,"page-size":e.options.pageSize,current:e.options.pageCurrent,total:e.options.total},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changePageCurrent.apply(void 0,arguments)},pageSizeChange:function(t){arguments[0]=t=e.$handleEvent(t),e.changePageSize.apply(void 0,arguments)}}})],1)],1)],1),a("uni-popup",{ref:"inputDialog",attrs:{type:"dialog",maskClick:!0}},[a("uni-popup-dialog",{ref:"inputClose",attrs:{mode:"input",title:"请编辑名称",placeholder:"请输入内容"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.editName.apply(void 0,arguments)}},model:{value:e.updateValue,callback:function(t){e.updateValue=t},expression:"updateValue"}})],1)],1)},o=[]},ecf5:function(e,t,a){"use strict";a("a9e3"),a("2ca0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"uniLink",props:{href:{type:String,default:""},text:{type:String,default:""},download:{type:String,default:""},showUnderLine:{type:[Boolean,String],default:!0},copyTips:{type:String,default:"已自动复制网址，请在手机浏览器里粘贴该网址"},color:{type:String,default:"#999999"},fontSize:{type:[Number,String],default:14}},computed:{isShowA:function(){return this._isH5=!0,!(!this.isMail()&&!this.isTel()||!0!==this._isH5)}},created:function(){this._isH5=null},methods:{isMail:function(){return this.href.startsWith("mailto:")},isTel:function(){return this.href.startsWith("tel:")},openURL:function(){window.open(this.href)},makePhoneCall:function(e){uni.makePhoneCall({phoneNumber:e})}}};t.default=i},f0ec:function(e,t,a){var i=a("f885");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("9b5aa906",i,!0,{sourceMap:!1,shadowMode:!1})},f885:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,".uni-stat-edit--x[data-v-d5ef9116]{display:flex;justify-content:space-between}.uni-stat-edit--btn[data-v-d5ef9116]{cursor:pointer}",""]),e.exports=t}}]);