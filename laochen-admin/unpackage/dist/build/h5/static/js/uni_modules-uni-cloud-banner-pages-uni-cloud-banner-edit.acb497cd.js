(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uni_modules-uni-cloud-banner-pages-uni-cloud-banner-edit"],{"0e18":function(t,e,n){"use strict";var i=n("30fa"),a=n.n(i);a.a},1400:function(t,e,n){"use strict";n.r(e);var i=n("db60"),a=n("46e7");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("0e18");var o,s=n("f0c5"),l=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"0c5cc850",null,!1,i["a"],o);e["default"]=l.exports},"1e25":function(t,e,n){"use strict";var i=n("23e7"),a=n("58a8").end,r=n("c8d2"),o=r("trimEnd"),s=o?function(){return a(this)}:"".trimEnd;i({target:"String",proto:!0,forced:o},{trimEnd:s,trimRight:s})},2131:function(t,e,n){"use strict";n.r(e);var i=n("2d0f"),a=n("a2fd");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);var o,s=n("f0c5"),l=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);e["default"]=l.exports},"2d0f":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={uniForms:n("c005").default,uniFormsItem:n("4a09").default,uniFilePicker:n("a121").default,uniEasyinput:n("1400").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-container"},[n("uni-forms",{ref:"form",attrs:{value:t.formData,validateTrigger:"bind"}},[n("uni-forms-item",{attrs:{name:"bannerfile",label:"图片文件",required:!0}},[n("uni-file-picker",{attrs:{"file-mediatype":"image","return-type":"object"},model:{value:t.formData.bannerfile,callback:function(e){t.$set(t.formData,"bannerfile",e)},expression:"formData.bannerfile"}})],1),n("uni-forms-item",{attrs:{name:"open_url",label:"点击目标地址"}},[n("uni-easyinput",{attrs:{placeholder:"点击跳转目标地址。如果是web地址则使用内置web-view打开；如果是本地页面则跳转本地页面；如果是schema地址则打开本地的app",trim:"both"},model:{value:t.formData.open_url,callback:function(e){t.$set(t.formData,"open_url",e)},expression:"formData.open_url"}})],1),n("uni-forms-item",{attrs:{name:"title",label:"标题"}},[n("uni-easyinput",{attrs:{placeholder:"注意标题文字颜色和背景图靠色导致看不清的问题",trim:"both"},model:{value:t.formData.title,callback:function(e){t.$set(t.formData,"title",e)},expression:"formData.title"}})],1),n("uni-forms-item",{attrs:{name:"sort",label:"排序"}},[n("uni-easyinput",{attrs:{placeholder:"数字越小，排序越前",type:"number"},model:{value:t.formData.sort,callback:function(e){t.$set(t.formData,"sort",e)},expression:"formData.sort"}})],1),n("uni-forms-item",{attrs:{name:"category_id",label:"分类id"}},[n("uni-easyinput",{attrs:{placeholder:"多个栏目的banner都存在一个表里时可用这个字段区分"},model:{value:t.formData.category_id,callback:function(e){t.$set(t.formData,"category_id",e)},expression:"formData.category_id"}})],1),n("uni-forms-item",{attrs:{name:"status",label:"生效状态"}},[n("v-uni-switch",{attrs:{checked:t.formData.status},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.binddata("status",e.detail.value)}}})],1),n("uni-forms-item",{attrs:{name:"description",label:"备注"}},[n("uni-easyinput",{attrs:{placeholder:"维护者自用描述",trim:"both"},model:{value:t.formData.description,callback:function(e){t.$set(t.formData,"description",e)},expression:"formData.description"}})],1),n("v-uni-view",{staticClass:"uni-button-group"},[n("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("提交")]),n("v-uni-navigator",{staticStyle:{"margin-left":"15px"},attrs:{"open-type":"navigateBack"}},[n("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"}},[t._v("返回")])],1)],1)],1)],1)},r=[]},"30fa":function(t,e,n){var i=n("7146");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("116045cd",i,!0,{sourceMap:!1,shadowMode:!1})},"46e7":function(t,e,n){"use strict";n.r(e);var i=n("789b"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},6697:function(t,e,n){"use strict";var i=n("4ea4");n("4d63"),n("ac1f"),n("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.filterToWhere=l,e.enumConverter=e.validator=void 0;var a=i(n("3835")),r=i(n("b85c")),o={bannerfile:{rules:[{required:!0},{format:"file"}],label:"图片文件"},open_url:{rules:[{format:"string"},{format:"url"},{pattern:"^(http://|https://|/|./|@/)\\S"}],label:"点击目标地址"},title:{rules:[{format:"string"},{maxLength:20}],label:"标题"},sort:{rules:[{format:"int"}],label:"排序"},category_id:{rules:[{format:"string"}],label:"分类id"},status:{rules:[{format:"bool"}],defaultValue:!0,label:"生效状态"},description:{rules:[{format:"string"}],label:"备注"}};e.validator=o;var s={};function l(t,e){var n={};for(var i in t){var o=t[i],s=o.type,l=o.value;switch(s){case"search":"string"===typeof l&&l.length&&(n[i]=new RegExp(l));break;case"select":if(l.length){var c,u=[],d=(0,r.default)(l);try{for(d.s();!(c=d.n()).done;){var f=c.value;u.push(e.eq(f))}}catch(S){d.e(S)}finally{d.f()}n[i]=e.or(u)}break;case"range":if(l.length){var p=l[0],h=l[1];n[i]=e.and([e.gte(p),e.lte(h)])}break;case"date":if(l.length){var m=(0,a.default)(l,2),v=m[0],b=m[1],g=new Date(v),y=new Date(b);n[i]=e.and([e.gte(g),e.lte(y)])}break;case"timestamp":if(l.length){var x=(0,a.default)(l,2),w=x[0],_=x[1];n[i]=e.and([e.gte(w),e.lte(_)])}break}}return n}e.enumConverter=s},"6dc4":function(t,e,n){"use strict";(function(t){var i=n("4ea4");n("caad"),n("b64b"),n("d3b7"),n("2532"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("5530")),r=n("6697"),o=t.database(),s=(o.command,"opendb-banner");function l(t){var e={};for(var n in r.validator)t.includes(n)&&(e[n]=r.validator[n]);return e}var c={data:function(){var t={bannerfile:null,open_url:"",title:"",sort:null,category_id:"",status:!0,description:""};return{formData:t,formOptions:{},rules:(0,a.default)({},l(Object.keys(t)))}},onLoad:function(t){if(t.id){var e=t.id;this.formDataId=e,this.getDetail(e)}},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{submit:function(){var t=this;uni.showLoading({mask:!0}),this.$refs.form.validate().then((function(e){t.submitForm(e)})).catch((function(){uni.hideLoading()}))},submitForm:function(t){var e=this;o.collection(s).doc(this.formDataId).update(t).then((function(t){uni.showToast({title:"修改成功"}),e.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))},getDetail:function(t){var e=this;uni.showLoading({mask:!0}),o.collection(s).doc(t).field("bannerfile,open_url,title,sort,category_id,status,description").get().then((function(t){var n=t.result.data[0];n&&(e.formData=n)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))}}};e.default=c}).call(this,n("a9ff")["default"])},7146:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-easyinput[data-v-0c5cc850]{width:100%;flex:1;position:relative;text-align:left;color:#333;font-size:14px}.uni-easyinput__content[data-v-0c5cc850]{flex:1;width:100%;display:flex;box-sizing:border-box;flex-direction:row;align-items:center;border-color:#fff;transition-property:border-color;transition-duration:.3s}.uni-easyinput__content-input[data-v-0c5cc850]{width:auto;position:relative;overflow:hidden;flex:1;line-height:1;font-size:14px;height:35px}.uni-easyinput__placeholder-class[data-v-0c5cc850]{color:#999;font-size:12px}.is-textarea[data-v-0c5cc850]{align-items:flex-start}.is-textarea-icon[data-v-0c5cc850]{margin-top:5px}.uni-easyinput__content-textarea[data-v-0c5cc850]{position:relative;overflow:hidden;flex:1;line-height:1.5;font-size:14px;margin:6px;margin-left:0;height:80px;min-height:80px;min-height:80px;width:auto}.input-padding[data-v-0c5cc850]{padding-left:10px}.content-clear-icon[data-v-0c5cc850]{padding:0 5px}.label-icon[data-v-0c5cc850]{margin-right:5px;margin-top:-1px}.is-input-border[data-v-0c5cc850]{display:flex;box-sizing:border-box;flex-direction:row;align-items:center;border:1px solid #dcdfe6;border-radius:4px}.uni-error-message[data-v-0c5cc850]{position:absolute;bottom:-17px;left:0;line-height:12px;color:#e43d33;font-size:12px;text-align:left}.uni-error-msg--boeder[data-v-0c5cc850]{position:relative;bottom:0;line-height:22px}.is-input-error-border[data-v-0c5cc850]{border-color:#e43d33}.is-input-error-border .uni-easyinput__placeholder-class[data-v-0c5cc850]{color:#f29e99}.uni-easyinput--border[data-v-0c5cc850]{margin-bottom:0;padding:10px 15px;border-top:1px #eee solid}.uni-easyinput-error[data-v-0c5cc850]{padding-bottom:0}.is-first-border[data-v-0c5cc850]{border:none}.is-disabled[data-v-0c5cc850]{background-color:#f7f6f6;color:#d5d5d5}.is-disabled .uni-easyinput__placeholder-class[data-v-0c5cc850]{color:#d5d5d5;font-size:12px}',""]),t.exports=e},"789b":function(t,e,n){"use strict";function i(t){var e="";for(var n in t){var i=t[n];i&&(e+="".concat(n," "))}return e}function a(t){var e="";for(var n in t){var i=t[n];e+="".concat(n,":").concat(i,";")}return e}n("99af"),n("a9e3"),n("ac1f"),n("5319"),n("498a"),n("1e25"),n("eee7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"uni-easyinput",emits:["click","iconClick","update:modelValue","input","focus","blur","confirm","clear","eyes","change"],model:{prop:"modelValue",event:"update:modelValue"},options:{virtualHost:!0},inject:{form:{from:"uniForm",default:null},formItem:{from:"uniFormItem",default:null}},props:{name:String,value:[Number,String],modelValue:[Number,String],type:{type:String,default:"text"},clearable:{type:Boolean,default:!0},autoHeight:{type:Boolean,default:!1},placeholder:{type:String,default:" "},placeholderStyle:String,focus:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},confirmType:{type:String,default:"done"},clearSize:{type:[Number,String],default:24},inputBorder:{type:Boolean,default:!0},prefixIcon:{type:String,default:""},suffixIcon:{type:String,default:""},trim:{type:[Boolean,String],default:!0},passwordIcon:{type:Boolean,default:!0},styles:{type:Object,default:function(){return{color:"#333",disableColor:"#F7F6F6",borderColor:"#e5e5e5"}}},errorMessage:{type:[String,Boolean],default:""}},data:function(){return{focused:!1,val:"",showMsg:"",border:!1,isFirstBorder:!1,showClearIcon:!1,showPassword:!1,focusShow:!1,localMsg:""}},computed:{isVal:function(){var t=this.val;return!(!t&&0!==t)},msg:function(){return this.localMsg||this.errorMessage},inputMaxlength:function(){return Number(this.maxlength)},boxStyle:function(){return"color:".concat(this.inputBorder&&this.msg?"#e43d33":this.styles.color,";")},inputContentClass:function(){return i({"is-input-border":this.inputBorder,"is-input-error-border":this.inputBorder&&this.msg,"is-textarea":"textarea"===this.type,"is-disabled":this.disabled})},inputContentStyle:function(){var t=this.focusShow?"#2979ff":this.styles.borderColor,e=this.inputBorder&&this.msg?"#dd524d":t;return a({"border-color":e||"#e5e5e5","background-color":this.disabled?this.styles.disableColor:"#fff"})},inputStyle:function(){var t="password"===this.type||this.clearable||this.prefixIcon?"":"10px";return a({"padding-right":t,"padding-left":this.prefixIcon?"":"10px"})}},watch:{value:function(t){this.val=t},modelValue:function(t){this.val=t},focus:function(t){var e=this;this.$nextTick((function(){e.focused=e.focus,e.focusShow=e.focus}))}},created:function(){var t=this;this.init(),this.form&&this.formItem&&this.$watch("formItem.errMsg",(function(e){t.localMsg=e}))},mounted:function(){var t=this;this.$nextTick((function(){t.focused=t.focus,t.focusShow=t.focus}))},methods:{init:function(){this.value||0===this.value?this.val=this.value:this.modelValue||0===this.modelValue?this.val=this.modelValue:this.val=null},onClickIcon:function(t){this.$emit("iconClick",t)},onEyes:function(){this.showPassword=!this.showPassword,this.$emit("eyes",this.showPassword)},onInput:function(t){var e=t.detail.value;this.trim&&("boolean"===typeof this.trim&&this.trim&&(e=this.trimStr(e)),"string"===typeof this.trim&&(e=this.trimStr(e,this.trim))),this.errMsg&&(this.errMsg=""),this.val=e,this.$emit("input",e),this.$emit("update:modelValue",e)},onFocus:function(){var t=this;this.$nextTick((function(){t.focused=!0})),this.$emit("focus",null)},_Focus:function(t){this.focusShow=!0,this.$emit("focus",t)},onBlur:function(){this.focused=!1,this.$emit("focus",null)},_Blur:function(t){t.detail.value;if(this.focusShow=!1,this.$emit("blur",t),this.$emit("change",this.val),this.form&&this.formItem){var e=this.form.validateTrigger;"blur"===e&&this.formItem.onFieldChange()}},onConfirm:function(t){this.$emit("confirm",this.val),this.$emit("change",this.val)},onClear:function(t){this.val="",this.$emit("input",""),this.$emit("update:modelValue",""),this.$emit("clear")},trimStr:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"both";return"both"===e?t.trim():"left"===e?t.trimLeft():"right"===e?t.trimRight():"start"===e?t.trimStart():"end"===e?t.trimEnd():"all"===e?t.replace(/\s+/g,""):t}}};e.default=r},a2fd:function(t,e,n){"use strict";n.r(e);var i=n("6dc4"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},db60:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={uniIcons:n("bc0e").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-easyinput",class:{"uni-easyinput-error":t.msg},style:t.boxStyle},[n("v-uni-view",{staticClass:"uni-easyinput__content",class:t.inputContentClass,style:t.inputContentStyle},[t.prefixIcon?n("uni-icons",{staticClass:"content-clear-icon",attrs:{type:t.prefixIcon,color:"#c0c4cc",size:"22"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickIcon("prefix")}}}):t._e(),"textarea"===t.type?n("v-uni-textarea",{staticClass:"uni-easyinput__content-textarea",class:{"input-padding":t.inputBorder},attrs:{name:t.name,value:t.val,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled,"placeholder-class":"uni-easyinput__placeholder-class",maxlength:t.inputMaxlength,focus:t.focused,autoHeight:t.autoHeight},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.onInput.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t._Blur.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t._Focus.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}):n("v-uni-input",{staticClass:"uni-easyinput__content-input",style:t.inputStyle,attrs:{type:"password"===t.type?"text":t.type,name:t.name,value:t.val,password:!t.showPassword&&"password"===t.type,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,"placeholder-class":"uni-easyinput__placeholder-class",disabled:t.disabled,maxlength:t.inputMaxlength,focus:t.focused,confirmType:t.confirmType},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t._Focus.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t._Blur.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.onInput.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}),"password"===t.type&&t.passwordIcon?[t.isVal?n("uni-icons",{staticClass:"content-clear-icon",class:{"is-textarea-icon":"textarea"===t.type},attrs:{type:t.showPassword?"eye-slash-filled":"eye-filled",size:22,color:t.focusShow?"#2979ff":"#c0c4cc"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onEyes.apply(void 0,arguments)}}}):t._e()]:t.suffixIcon?[t.suffixIcon?n("uni-icons",{staticClass:"content-clear-icon",attrs:{type:t.suffixIcon,color:"#c0c4cc",size:"22"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickIcon("suffix")}}}):t._e()]:[t.clearable&&t.isVal&&!t.disabled&&"textarea"!==t.type?n("uni-icons",{staticClass:"content-clear-icon",class:{"is-textarea-icon":"textarea"===t.type},attrs:{type:"clear",size:t.clearSize,color:t.msg?"#dd524d":t.focusShow?"#2979ff":"#c0c4cc"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClear.apply(void 0,arguments)}}}):t._e()],t._t("right")],2)],1)},r=[]},eee7:function(t,e,n){"use strict";var i=n("23e7"),a=n("58a8").start,r=n("c8d2"),o=r("trimStart"),s=o?function(){return a(this)}:"".trimStart;i({target:"String",proto:!0,forced:o},{trimStart:s,trimLeft:s})}}]);