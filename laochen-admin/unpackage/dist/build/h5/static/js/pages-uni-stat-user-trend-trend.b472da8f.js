(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-uni-stat-user-trend-trend"],{"01be":function(t){t.exports=JSON.parse('{"uni-pagination.prevText":"prev","uni-pagination.nextText":"next","uni-pagination.piecePerPage":"piece/page"}')},"093e":function(t,e,a){"use strict";var n=a("cee4"),i=a.n(n);i.a},"15fa":function(t,e,a){"use strict";(function(t){var n=a("4ea4");a("4de4"),a("4160"),a("d3b7"),a("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("b85c")),r=n(a("3835")),u=a("c859"),o=n(a("28ec")),s={data:function(){return{fieldsMap:o.default,query:{dimension:"hour",appid:"",platform_id:"",uni_platform:"",version_id:"",channel_id:"",start_time:[]},options:{pageSize:20,pageCurrent:1,total:0},loading:!1,currentDateTab:1,currentDimensionTab:0,tableData:[],panelData:o.default.filter((function(t){return t.hasOwnProperty("value")})),chartData:{},chartTab:"new_user_count",channelData:[],tabName:"新增用户"}},computed:{chartTabs:function(){var t=[];return o.default.forEach((function(e){var a=e.field,n=e.title,i=e.hasOwnProperty("value");a&&n&&i&&t.push({_id:a,name:n})})),t},dimensionTabs:function(){var t=[{_id:"hour",name:"按时"},{_id:"day",name:"按日"},{_id:"week",name:"按周"},{_id:"month",name:"按月"}];return this.getDays()?(this.query.dimension="day",t.forEach((function(t,e){"hour"===t._id?t.disabled=!0:t.disabled=!1})),this.currentDimensionTab=1):(this.query.dimension="hour",t.forEach((function(t,e){"hour"===t._id?t.disabled=!1:t.disabled=!0})),this.currentDimensionTab=0),t},channelQuery:function(){var t=this.query.platform_id;return(0,u.stringifyQuery)({platform_id:t})},versionQuery:function(){var t=this.query,e=t.appid,a=t.uni_platform,n=(0,u.stringifyQuery)({appid:e,uni_platform:a});return n}},created:function(){var t=this;this.debounceGet=(0,u.debounce)((function(){return t.getAllData(t.query)})),this.getChannelData()},watch:{query:{deep:!0,handler:function(t){this.debounceGet()}}},methods:{getDays:function(){if(!this.query.start_time.length)return!0;var t=864e5,e=(0,r.default)(this.query.start_time,2),a=e[0],n=e[1],i=n-a>=t;return i},useDatetimePicker:function(){this.currentDateTab=-1},changeAppid:function(t){this.getChannelData(t,!1)},changePlatform:function(t,e,a,n){this.getChannelData(null,t),this.query.version_id=0,this.query.uni_platform=n.code},changeTimeRange:function(t,e){this.currentDateTab=e;var a,n,i=864e5;a=(0,u.getTimeOfSomeDayAgo)(t),n=t?(0,u.getTimeOfSomeDayAgo)(0)-1:(0,u.getTimeOfSomeDayAgo)(0)+i-1,this.query.start_time=[a,n]},changePageCurrent:function(t){this.options.pageCurrent=t.current,this.getTabelData(this.query)},changePageSize:function(t){this.options.pageSize=t,this.getTabelData(this.query)},changeChartTab:function(t,e,a){this.tabName=a,this.getChartData(this.query,t,a)},getAllData:function(t){this.getPanelData(),this.getChartData(t,this.chartTab,this.tabName),this.getTabelData(t)},getChartData:function(e){var a=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.chartTab,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"新增用户";e=(0,u.stringifyQuery)(e,!0,["uni_platform"]);var s=this.query.dimension,c=t.database();c.collection("uni-stat-result").where(e).field("".concat((0,u.stringifyField)(o.default,n),", start_time")).groupBy("start_time").groupField((0,u.stringifyGroupField)(o.default,n)).orderBy("start_time","asc").get({getCount:!0}).then((function(t){var e=t.result,c=(e.count,e.data),l={categories:[],series:[{name:r,data:[]}]},d=o.default.filter((function(t){return t.field===n}));d=JSON.parse(JSON.stringify(d)),delete d[0].value,d[0].formatter="";var p,f=(0,i.default)(c);try{for(f.s();!(p=f.n()).done;){var h=p.value;(0,u.mapfields)(d,h,h);var v=(0,u.formatDate)(h.start_time,s),g=h[n];l.series[0].data.push(g),l.categories.push(v)}}catch(m){f.e(m)}finally{f.f()}a.chartData=l})).catch((function(t){})).finally((function(){a.loading=!1}))},getTabelData:function(e){var a=this,n=this.options.pageCurrent;e=(0,u.stringifyQuery)(e,!0,["uni_platform"]),this.options.pageCurrent=1,this.loading=!0;var r=t.database();r.collection("uni-stat-result").where(e).field((0,u.stringifyField)(o.default)).groupBy("start_time").groupField((0,u.stringifyGroupField)(o.default)).orderBy("start_time","desc").skip((n-1)*this.options.pageSize).limit(this.options.pageSize).get({getCount:!0}).then((function(t){var e,n=t.result,r=n.count,s=n.data,c=(0,i.default)(s);try{for(c.s();!(e=c.n()).done;){var l=e.value,d=l.start_time;if(d){var p=a.query.dimension;l.start_time=(0,u.formatDate)(d,p)}(0,u.mapfields)(o.default,l,l)}}catch(f){c.e(f)}finally{c.f()}a.tableData=[],a.options.total=r,a.tableData=s})).catch((function(t){})).finally((function(){a.loading=!1}))},getPanelData:function(){var e=this,a=JSON.parse(JSON.stringify(this.query));a.dimension="day";var n=(0,u.stringifyQuery)(a,null,["uni_platform"]),i=t.database();i.collection("uni-stat-result").where(n).field("".concat((0,u.stringifyField)(o.default),",stat_date")).groupBy("appid").groupField((0,u.stringifyGroupField)(o.default)).orderBy("stat_date","desc").get().then((function(t){var a=t.result.data[0];a&&(a.total_users=0),e.panelData=[],e.panelData=(0,u.mapfields)(o.default,a),u.getFieldTotal.call(e,n,"total_users")}))},navTo:function(t){var e="/pages/uni-stat/overview/overview?id=".concat(t);uni.navigateTo({url:e})},getChannelData:function(e,a){var n=this;this.query.channel_id="";var i=t.database(),r={};e=e||this.query.appid,e&&(r.appid=e),a=a||this.query.platform_id,a&&(r.platform_id=a);var u=i.collection("uni-stat-app-platforms").field("_id, name").getTemp(),o=i.collection("uni-stat-app-channels").where(r).field("_id, channel_name, create_time, platform_id").getTemp();i.collection(o,u).orderBy("platform_id","asc").get().then((function(t){var e,a=t.result.data,i=[];if(a.length>0)for(var r in a)e=a[r].channel_name?a[r].channel_name:"默认",a[r].platform_id.length>0&&(e=a[r].platform_id[0].name+"-"+e),i.push({value:a[r]._id,text:e});n.channelData=i})).catch((function(t){})).finally((function(){}))}}};e.default=s}).call(this,a("a9ff")["default"])},"22a9":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"uni-stat-table",data:function(){return{}},props:{data:{type:Array,default:function(){return[]}},filedsMap:{type:Array,default:function(){return[]}},loading:{type:Boolean,default:!1},tooltip:{type:Boolean,default:!1}}};e.default=n},"243e":function(t){t.exports=JSON.parse('{"uni-pagination.prevText":"上一頁","uni-pagination.nextText":"下一頁","uni-pagination.piecePerPage":"條/頁"}')},"28ec":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=[{title:"日期",field:"start_time",tooltip:"",formatter:"",stat:-1},{title:"新增用户",field:"new_user_count",tooltip:"首次访问应用的用户数（以设备为判断标准，去重）",value:0},{title:"活跃用户",field:"active_user_count",tooltip:"访问过应用内任意页面的总用户数（去重）",value:0},{title:"次均停留时长",field:"avg_user_session_time",formatter:":",tooltip:"平均每次打开应用停留在应用内的总时长，即应用停留总时长/启动次数",value:0,stat:"avg"},{title:"人均停留时长 ",field:"avg_user_time",formatter:":",tooltip:"平均每个用户停留在应用内的总时长，即应用停留总时长/活跃用户",value:0,stat:"avg"},{title:"总用户数",field:"total_users",tooltip:"从添加统计到当前选择时间的总用户数（去重）",value:0}];e.default=n},"2fa2":function(t,e,a){var n=a("ba92");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("bbfb3d14",n,!0,{sourceMap:!1,shadowMode:!1})},"3f63":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={uniStatBreadcrumb:a("0f01").default,uniDataSelect:a("6dd8").default,uniStatTabs:a("d9f1").default,uniDatetimePicker:a("4d3d").default,uniStatPanel:a("7538").default,qiunDataCharts:a("5cff").default,uniStatTable:a("5eaa").default,uniPagination:a("bd36").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"fix-top-window"},[a("v-uni-view",{staticClass:"uni-header"},[a("uni-stat-breadcrumb",{staticClass:"uni-stat-breadcrumb-on-phone"}),a("v-uni-view",{staticClass:"uni-group"},[a("v-uni-view",{staticClass:"uni-sub-title hide-on-phone"},[t._v("各指标趋势分析")])],1)],1),a("v-uni-view",{staticClass:"uni-container"},[a("v-uni-view",{staticClass:"uni-stat--x flex"},[a("uni-data-select",{attrs:{collection:"opendb-app-list",field:"appid as value, name as text",orderby:"text asc",defItem:1,label:"应用选择",clear:!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeAppid.apply(void 0,arguments)}},model:{value:t.query.appid,callback:function(e){t.$set(t.query,"appid",e)},expression:"query.appid"}}),a("uni-data-select",{attrs:{collection:"opendb-app-versions",where:t.versionQuery,field:"_id as value, version as text",orderby:"text asc",label:"版本选择"},model:{value:t.query.version_id,callback:function(e){t.$set(t.query,"version_id",e)},expression:"query.version_id"}}),a("v-uni-view",{staticClass:"flex"},[a("uni-stat-tabs",{attrs:{label:"日期选择",current:t.currentDateTab,mode:"date"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTimeRange.apply(void 0,arguments)}}}),a("uni-datetime-picker",{staticClass:"uni-stat-datetime-picker",class:{"uni-stat__actived":t.currentDateTab<0&&!!t.query.start_time.length},attrs:{type:"daterange",end:(new Date).getTime(),returnType:"timestamp",clearIcon:!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.useDatetimePicker.apply(void 0,arguments)}},model:{value:t.query.start_time,callback:function(e){t.$set(t.query,"start_time",e)},expression:"query.start_time"}})],1),a("uni-stat-tabs",{attrs:{label:"维度选择",type:"box",current:t.currentDimensionTab,tabs:t.dimensionTabs},model:{value:t.query.dimension,callback:function(e){t.$set(t.query,"dimension",e)},expression:"query.dimension"}})],1),a("v-uni-view",{staticClass:"uni-stat--x"},[a("uni-stat-tabs",{attrs:{label:"平台选择",type:"boldLine",mode:"platform"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changePlatform.apply(void 0,arguments)}},model:{value:t.query.platform_id,callback:function(e){t.$set(t.query,"platform_id",e)},expression:"query.platform_id"}}),t.query.platform_id&&-1===t.query.platform_id.indexOf("==")?a("uni-data-select",{attrs:{localdata:t.channelData,label:"渠道选择"},model:{value:t.query.channel_id,callback:function(e){t.$set(t.query,"channel_id",e)},expression:"query.channel_id"}}):t._e()],1),a("uni-stat-panel",{attrs:{items:t.panelData}}),a("v-uni-view",{staticClass:"uni-stat--x p-m"},[a("v-uni-view",{staticClass:"label-text mb-l"},[t._v("趋势图")]),a("uni-stat-tabs",{staticClass:"mb-l",attrs:{type:"box",tabs:t.chartTabs},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeChartTab.apply(void 0,arguments)}},model:{value:t.chartTab,callback:function(e){t.chartTab=e},expression:"chartTab"}}),a("v-uni-view",{staticClass:"uni-charts-box"},[a("qiun-data-charts",{attrs:{type:"area",chartData:t.chartData,echartsH5:!0,echartsApp:!0}})],1)],1),a("v-uni-view",{staticClass:"uni-stat--x p-m"},[a("uni-stat-table",{attrs:{data:t.tableData,filedsMap:t.fieldsMap,loading:t.loading}}),a("v-uni-view",{staticClass:"uni-pagination-box"},[a("uni-pagination",{attrs:{"show-icon":!0,"show-page-size":!0,"page-size":t.options.pageSize,current:t.options.pageCurrent,total:t.options.total},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changePageCurrent.apply(void 0,arguments)},pageSizeChange:function(e){arguments[0]=e=t.$handleEvent(e),t.changePageSize.apply(void 0,arguments)}}})],1)],1)],1)],1)},r=[]},"46ba":function(t,e,a){"use strict";a.r(e);var n=a("22a9"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"5eaa":function(t,e,a){"use strict";a.r(e);var n=a("a973"),i=a("46ba");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("8fc8");var u,o=a("f0c5"),s=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"79afc08f",null,!1,n["a"],u);e["default"]=s.exports},"6b00":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={uniIcons:a("bc0e").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-pagination"},[!0===t.showPageSize||"true"===t.showPageSize?a("v-uni-picker",{staticClass:"select-picker",attrs:{mode:"selector",value:t.pageSizeIndex,range:t.pageSizeRange},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.pickerChange.apply(void 0,arguments)},cancel:function(e){arguments[0]=e=t.$handleEvent(e),t.pickerClick.apply(void 0,arguments)}},nativeOn:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pickerClick.apply(void 0,arguments)}}},[a("v-uni-button",{attrs:{type:"default",size:"mini",plain:!0}},[a("v-uni-text",[t._v(t._s(t.pageSizeRange[t.pageSizeIndex])+" "+t._s(t.piecePerPage))]),a("uni-icons",{staticClass:"select-picker-icon",attrs:{type:"arrowdown",size:"12",color:"#999"}})],1)],1):t._e(),a("v-uni-view",{staticClass:"uni-pagination__total is-phone-hide"},[t._v("共 "+t._s(t.total)+" 条")]),a("v-uni-view",{staticClass:"uni-pagination__btn",class:1===t.currentIndex?"uni-pagination--disabled":"uni-pagination--enabled",attrs:{"hover-class":1===t.currentIndex?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickLeft.apply(void 0,arguments)}}},[!0===t.showIcon||"true"===t.showIcon?[a("uni-icons",{attrs:{color:"#666",size:"16",type:"left"}})]:[a("v-uni-text",{staticClass:"uni-pagination__child-btn"},[t._v(t._s(t.prevPageText))])]],2),a("v-uni-view",{staticClass:"uni-pagination__num uni-pagination__num-flex-none"},[a("v-uni-view",{staticClass:"uni-pagination__num-current"},[a("v-uni-text",{staticClass:"uni-pagination__num-current-text is-pc-hide",staticStyle:{color:"#409EFF"}},[t._v(t._s(t.currentIndex))]),a("v-uni-text",{staticClass:"uni-pagination__num-current-text is-pc-hide"},[t._v("/"+t._s(t.maxPage||0))]),t._l(t.paper,(function(e,n){return a("v-uni-view",{key:n,staticClass:"uni-pagination__num-tag tag--active is-phone-hide",class:{"page--active":e===t.currentIndex},on:{click:function(a){if(!a.type.indexOf("key")&&t._k(a.keyCode,"top",void 0,a.key,void 0))return null;arguments[0]=a=t.$handleEvent(a),t.selectPage(e,n)}}},[a("v-uni-text",[t._v(t._s(e))])],1)}))],2)],1),a("v-uni-view",{staticClass:"uni-pagination__btn",class:t.currentIndex>=t.maxPage?"uni-pagination--disabled":"uni-pagination--enabled",attrs:{"hover-class":t.currentIndex===t.maxPage?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickRight.apply(void 0,arguments)}}},[!0===t.showIcon||"true"===t.showIcon?[a("uni-icons",{attrs:{color:"#666",size:"16",type:"right"}})]:[a("v-uni-text",{staticClass:"uni-pagination__child-btn"},[t._v(t._s(t.nextPageText))])]],2)],1)},r=[]},7538:function(t,e,a){"use strict";a.r(e);var n=a("939f"),i=a("7e32");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("f4f1");var u,o=a("f0c5"),s=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"6a63ad00",null,!1,n["a"],u);e["default"]=s.exports},"7ae3":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-stat-tooltip-s[data-v-6a63ad00]{width:160px;white-space:normal}.uni-stat--sum-x[data-v-6a63ad00]{display:flex;justify-content:space-evenly;flex-wrap:wrap;border-radius:4px;padding:15px;box-shadow:-1px -1px 5px 0 rgba(0,0,0,.1)}.uni-stat--sum-item[data-v-6a63ad00]{white-space:nowrap;text-align:center;margin:10px 18px}.uni-stat--sum-item-width[data-v-6a63ad00]{width:100px}.uni-stat--sum-item-title[data-v-6a63ad00]{display:flex;align-items:center;justify-content:center;min-height:17px;font-size:12px;color:#666}.uni-stat--sum-item-value[data-v-6a63ad00]{font-size:24px;line-height:48px;font-weight:700;color:#333}.uni-stat--sum-item-contrast[data-v-6a63ad00]{font-size:14px;color:#666}@media screen and (max-width:500px){.uni-stat--sum-x[data-v-6a63ad00]{padding:15px 0;justify-content:space-between;flex-wrap:unset;overflow-x:auto!important}[data-v-6a63ad00]::-webkit-scrollbar{display:none}}',""]),t.exports=e},"7e32":function(t,e,a){"use strict";a.r(e);var n=a("d30f"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"7f2e":function(t,e,a){"use strict";a.r(e);var n=a("8aba"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},8181:function(t,e,a){"use strict";a.r(e);var n=a("3f63"),i=a("e461");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);var u,o=a("f0c5"),s=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"0e69f014",null,!1,n["a"],u);e["default"]=s.exports},"8aba":function(t,e,a){"use strict";var n=a("4ea4");a("4160"),a("a9e3"),a("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a("37dc"),r=n(a("e68d")),u=(0,i.initVueI18n)(r.default),o=u.t,s={name:"UniPagination",emits:["update:modelValue","input","change","pageSizeChange"],props:{value:{type:[Number,String],default:1},modelValue:{type:[Number,String],default:1},prevText:{type:String},nextText:{type:String},piecePerPageText:{type:String},current:{type:[Number,String],default:1},total:{type:[Number,String],default:0},pageSize:{type:[Number,String],default:10},showIcon:{type:[Boolean,String],default:!1},showPageSize:{type:[Boolean,String],default:!1},pagerCount:{type:Number,default:7},pageSizeRange:{type:Array,default:function(){return[20,50,100,500]}}},data:function(){return{pageSizeIndex:0,currentIndex:1,paperData:[],pickerShow:!1}},computed:{piecePerPage:function(){return this.piecePerPageText||o("uni-pagination.piecePerPage")},prevPageText:function(){return this.prevText||o("uni-pagination.prevText")},nextPageText:function(){return this.nextText||o("uni-pagination.nextText")},maxPage:function(){var t=1,e=Number(this.total),a=Number(this.pageSize);return e&&a&&(t=Math.ceil(e/a)),t},paper:function(){for(var t=this.currentIndex,e=this.pagerCount,a=this.total,n=this.pageSize,i=[],r=[],u=Math.ceil(a/n),o=0;o<u;o++)i.push(o+1);r.push(1);var s=i[i.length-(e+1)/2];return i.forEach((function(a,n){(e+1)/2>=t?a<e+1&&a>1&&r.push(a):t+2<=s?a>t-(e+1)/2&&a<t+(e+1)/2&&r.push(a):(a>t-(e+1)/2||u-e<a)&&a<i[i.length-1]&&r.push(a)})),u>e?((e+1)/2>=t?r[r.length-1]="...":t+2<=s?(r[1]="...",r[r.length-1]="..."):r[1]="...",r.push(i[i.length-1])):(e+1)/2>=t||t+2<=s||(r.shift(),r.push(i[i.length-1])),r}},watch:{current:{immediate:!0,handler:function(t,e){this.currentIndex=t<1?1:t}},value:{immediate:!0,handler:function(t){1===Number(this.current)&&(this.currentIndex=t<1?1:t)}},pageSizeIndex:function(t){this.$emit("pageSizeChange",this.pageSizeRange[t])}},methods:{pickerChange:function(t){this.pageSizeIndex=t.detail.value,this.pickerClick()},pickerClick:function(){var t=document.querySelector("body");if(t){var e="uni-pagination-picker-show";this.pickerShow=!this.pickerShow,this.pickerShow?t.classList.add(e):setTimeout((function(){return t.classList.remove(e)}),300)}},selectPage:function(t,e){if(parseInt(t))this.currentIndex=t,this.change("current");else{var a=Math.ceil(this.total/this.pageSize);if(e<=1)return void(this.currentIndex-5>1?this.currentIndex-=5:this.currentIndex=1);if(e>=6)return void(this.currentIndex+5>a?this.currentIndex=a:this.currentIndex+=5)}},clickLeft:function(){1!==Number(this.currentIndex)&&(this.currentIndex-=1,this.change("prev"))},clickRight:function(){Number(this.currentIndex)>=this.maxPage||(this.currentIndex+=1,this.change("next"))},change:function(t){this.$emit("input",this.currentIndex),this.$emit("update:modelValue",this.currentIndex),this.$emit("change",{type:t,current:this.currentIndex})}}};e.default=s},"8fc8":function(t,e,a){"use strict";var n=a("2fa2"),i=a.n(n);i.a},"939f":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={uniTooltip:a("225f").default,uniIcons:a("bc0e").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-stat--sum-x mb-m"},t._l(t.items,(function(e,n){return a("v-uni-view",{key:n,staticClass:"uni-stat--sum-item",class:["今天"===e.value?"uni-stat--sum-item-width":""]},[a("uni-tooltip",{scopedSlots:t._u([e.tooltip?{key:"content",fn:function(){return[a("v-uni-view",{staticClass:"uni-stat-tooltip-s"},[t._v(t._s(e.tooltip))])]},proxy:!0}:null],null,!0)},[a("v-uni-view",{staticClass:"uni-stat--sum-item-title"},[t._v(t._s(e.title?e.title:"")),e.title?a("uni-icons",{staticClass:"ml-s",attrs:{type:"help",color:"#666"}}):t._e()],1)],1),a("v-uni-view",{staticClass:"uni-stat--sum-item-value"},[t._v(t._s(e.value?e.value:0))]),t.contrast?a("v-uni-view",{staticClass:"uni-stat--sum-item-contrast"},[t._v(t._s(e.contrast?e.contrast:0))]):t._e()],1)})),1)},r=[]},"9ebc":function(t){t.exports=JSON.parse('{"uni-pagination.prevText":"précédente","uni-pagination.nextText":"suivante","uni-pagination.piecePerPage":"Articles/Pages"}')},a214:function(t,e,a){var n=a("7ae3");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("33957f06",n,!0,{sourceMap:!1,shadowMode:!1})},a31d:function(t){t.exports=JSON.parse('{"uni-pagination.prevText":"上一页","uni-pagination.nextText":"下一页","uni-pagination.piecePerPage":"条/页"}')},a973:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={uniTable:a("7dfe").default,uniTr:a("31d4").default,uniTh:a("d6c2").default,uniTooltip:a("225f").default,uniIcons:a("bc0e").default,uniTd:a("6999").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("uni-table",{attrs:{loading:t.loading,border:!0,stripe:!0,emptyText:"暂无数据"}},[a("uni-tr",[t._l(t.filedsMap,(function(e,n){return[e.title?a("uni-th",{key:n,attrs:{align:"center"}},[a("uni-tooltip",{scopedSlots:t._u([t.tooltip&&e.tooltip?{key:"content",fn:function(){return[a("v-uni-view",{staticClass:"uni-stat-tooltip-s"},[t._v(t._s(e.tooltip))])]},proxy:!0}:null],null,!0)},[t._v(t._s(e.title)),t.tooltip&&e.tooltip?a("uni-icons",{attrs:{type:"help",color:"#666"}}):t._e()],1)],1):t._e()]}))],2),t._l(t.data,(function(e,n){return a("uni-tr",{key:n},[t._l(t.filedsMap,(function(n,i){return[n.title?a("uni-td",{key:i,attrs:{align:"center"}},[t._v(t._s(void 0!==e[n.field]?e[n.field]:"-"))]):t._e()]}))],2)}))],2)},r=[]},ba92:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".uni-stat-tooltip-s[data-v-79afc08f]{width:160px;white-space:normal}",""]),t.exports=e},bd36:function(t,e,a){"use strict";a.r(e);var n=a("6b00"),i=a("7f2e");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("093e");var u,o=a("f0c5"),s=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"323ae21c",null,!1,n["a"],u);e["default"]=s.exports},c599:function(t){t.exports=JSON.parse('{"uni-pagination.prevText":"anterior","uni-pagination.nextText":"prxima","uni-pagination.piecePerPage":"Art��culo/P��gina"}')},cee4:function(t,e,a){var n=a("d00e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("0643de0e",n,!0,{sourceMap:!1,shadowMode:!1})},d00e:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-pagination[data-v-323ae21c]{display:flex;position:relative;overflow:hidden;flex-direction:row;justify-content:center;align-items:center}.uni-pagination__total[data-v-323ae21c]{font-size:14px;color:#999;margin-right:15px}.uni-pagination__btn[data-v-323ae21c]{display:flex;cursor:pointer;padding:0 8px;line-height:30px;font-size:12px;position:relative;background-color:#f0f0f0;flex-direction:row;justify-content:center;align-items:center;text-align:center;border-radius:5px}.uni-pagination__child-btn[data-v-323ae21c]{display:flex;font-size:12px;position:relative;flex-direction:row;justify-content:center;align-items:center;text-align:center;color:#666;font-size:12px}.uni-pagination__num[data-v-323ae21c]{display:flex;flex:1;flex-direction:row;justify-content:center;align-items:center;height:30px;line-height:30px;font-size:12px;color:#666;margin:0 5px}.uni-pagination__num-tag[data-v-323ae21c]{cursor:pointer;min-width:30px;margin:0 5px;height:30px;text-align:center;line-height:30px;color:#999;border-radius:4px}.uni-pagination__num-current[data-v-323ae21c]{display:flex;flex-direction:row}.uni-pagination__num-current-text[data-v-323ae21c]{font-size:15px}.uni-pagination--enabled[data-v-323ae21c]{color:#333;opacity:1}.uni-pagination--disabled[data-v-323ae21c]{opacity:.5;cursor:default}.uni-pagination--hover[data-v-323ae21c]{color:rgba(0,0,0,.6);background-color:#eee}.tag--active[data-v-323ae21c]:hover{color:#2979ff}.page--active[data-v-323ae21c]{color:#fff;background-color:#2979ff}.page--active[data-v-323ae21c]:hover{color:#fff}.is-pc-hide[data-v-323ae21c]{display:block}.is-phone-hide[data-v-323ae21c]{display:none}@media screen and (min-width:450px){.is-pc-hide[data-v-323ae21c]{display:none}.is-phone-hide[data-v-323ae21c]{display:block}.uni-pagination__num-flex-none[data-v-323ae21c]{flex:none}}',""]),t.exports=e},d30f:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"uni-stat-panel",data:function(){return{}},props:{items:{type:Array,default:function(){return[]}},contrast:{type:Boolean,default:!1}}};e.default=n},e461:function(t,e,a){"use strict";a.r(e);var n=a("15fa"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},e68d:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("01be")),r=n(a("c599")),u=n(a("9ebc")),o=n(a("a31d")),s=n(a("243e")),c={en:i.default,es:r.default,fr:u.default,"zh-Hans":o.default,"zh-Hant":s.default};e.default=c},f4f1:function(t,e,a){"use strict";var n=a("a214"),i=a.n(n);i.a}}]);