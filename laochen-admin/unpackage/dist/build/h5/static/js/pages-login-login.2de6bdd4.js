(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{2531:function(a,t,i){var e=i("7ea7");"string"===typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);var n=i("4f06").default;n("18e05a3a",e,!0,{sourceMap:!1,shadowMode:!1})},"726f":function(a,t,i){"use strict";var e=i("4ea4");i("d3b7"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=e(i("5530")),o=i("26cb"),s=e(i("481c")),r=i("fb34"),d={deviceId:(0,r.getDeviceUUID)(),scene:"login"},c={data:function(){return(0,n.default)((0,n.default)({},s.default.navBar),{},{indexPage:s.default.index.url,showPassword:!0,loading:!1,formData:{username:"",password:"",captcha:""},captchaLoading:!1,needCaptcha:!1,captchaBase64:"",rules:{username:{rules:[{required:!0,errorMessage:"请输入账户"},{minLength:1,maxLength:30,errorMessage:"账户长度在{minLength}到{maxLength}个字符"}]},password:{rules:[{required:!0,errorMessage:"请输入正确的密码"},{minLength:6,errorMessage:"密码长度大于{minLength}个字符"}]},captcha:{rules:[{required:!0,errorMessage:"请输入验证码"}]}}})},mounted:function(){this.focus();var a=this;uni.getStorage({key:"lastUsername",success:function(t){a.formData.username=t.data}}),this.getNeedCaptcha()},methods:(0,n.default)((0,n.default)({},(0,o.mapMutations)({setToken:function(a,t){a("user/SET_TOKEN",t)},setUserInfo:function(a,t){a("user/SET_USER_INFO",t,{root:!0})}})),{},{getNeedCaptcha:function(){var a=this;this.$request("getNeedCaptcha",{functionName:"uni-id-cf",showModal:!1}).then((function(t){t.needCaptcha?(a.formData.captcha="",a.createCaptcha(),a.needCaptcha=!0):a.needCaptcha=!1}))},submit:function(){var a=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.formData;this.loading||(this.$refs.usernameInput.$refs.input.blur(),this.$refs.passwordInput.$refs.input.blur(),this.$refs.captchaInput&&this.$refs.captchaInput.$refs.input.blur(),this.loading=!0,this.$request("login",(0,n.default)((0,n.default)({},t),d),{functionName:"uni-id-cf",showModal:!1}).then((function(i){a.setToken({token:i.token,tokenExpired:i.tokenExpired}),a.setUserInfo(i.userInfo),uni.showToast({title:"登录成功",icon:"none"}),uni.setStorage({key:"lastUsername",data:t.username}),uni.redirectTo({url:a.indexPage})})).catch((function(t){t.needCaptcha?(a.formData.captcha="",a.createCaptcha(),a.needCaptcha=!0):a.needCaptcha=!1;var i=a;uni.showModal({content:t.message||"请求服务失败",showCancel:!1,success:function(){10101===t.code&&i.$refs.usernameInput&&i.$refs.usernameInput.$refs.input.focus(),10102===t.code&&i.$refs.passwordInput&&i.$refs.passwordInput.$refs.input.focus(),10002===t.code&&i.$refs.captchaInput&&i.$refs.captchaInput.$refs.input.focus()}})})).finally((function(t){a.loading=!1})))},createCaptcha:function(){var a=this;this.captchaLoading=!0,this.$request("createCaptcha",d,{functionName:"uni-id-cf"}).then((function(t){0===t.code&&(a.captchaBase64=t.captchaBase64)})).catch((function(a){})).finally((function(t){a.captchaLoading=!1}))},submitForm:function(){this.submit()},initAdmin:function(){uni.redirectTo({url:"/pages/demo/init/init"})},changePassword:function(){this.showPassword=!this.showPassword},focus:function(){this.$refs.usernameInput.$refs.input.focus()}})};t.default=c},"7c50":function(a,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return e}));var e={uniForms:i("c005").default,uniFormsItem:i("4a09").default},n=function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("v-uni-view",{staticClass:"login-box"},[i("v-uni-view",{staticClass:"admin-logo"},[i("v-uni-image",{attrs:{src:a.logo,mode:"heightFix"}})],1),i("v-uni-view",{staticClass:"uni-header no-padding"},[i("v-uni-view",{staticClass:"uni-title"},[a._v(a._s(a.$t("login.text.title")))])],1),i("v-uni-view",{staticClass:"uni-container"},[i("uni-forms",{ref:"form",attrs:{rules:a.rules},model:{value:a.formData,callback:function(t){a.formData=t},expression:"formData"}},[i("uni-forms-item",{attrs:{"left-icon":"person-filled",name:"username",labelWidth:"35"}},[i("v-uni-input",{ref:"usernameInput",staticClass:"uni-input-border",attrs:{type:"text",placeholder:a.$t("login.field.username")},on:{confirm:function(t){arguments[0]=t=a.$handleEvent(t),a.submitForm.apply(void 0,arguments)}},model:{value:a.formData.username,callback:function(t){a.$set(a.formData,"username",t)},expression:"formData.username"}})],1),i("uni-forms-item",{staticClass:"icon-container",attrs:{"left-icon":"locked-filled",name:"password",labelWidth:"35"}},[i("v-uni-input",{ref:"passwordInput",staticClass:"uni-input-border",attrs:{password:a.showPassword,placeholder:a.$t("login.field.password")},on:{confirm:function(t){arguments[0]=t=a.$handleEvent(t),a.submitForm.apply(void 0,arguments)}},model:{value:a.formData.password,callback:function(t){a.$set(a.formData,"password",t)},expression:"formData.password"}}),i("v-uni-text",{staticClass:"uni-icon-password-eye pointer",class:[a.showPassword?"":"uni-eye-active"],on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.changePassword.apply(void 0,arguments)}}},[a._v("")])],1),a.needCaptcha?i("uni-forms-item",{staticClass:"icon-container",attrs:{"left-icon":"image",name:"captcha",labelWidth:"35"}},[i("v-uni-input",{ref:"captchaInput",staticClass:"uni-input-border",attrs:{type:"text",placeholder:a.$t("login.field.captcha")},on:{confirm:function(t){arguments[0]=t=a.$handleEvent(t),a.submitForm.apply(void 0,arguments)}},model:{value:a.formData.captcha,callback:function(t){a.$set(a.formData,"captcha",t)},expression:"formData.captcha"}}),i("v-uni-view",{staticClass:"admin-captcha-img pointer",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.createCaptcha.apply(void 0,arguments)}}},[a.captchaLoading?i("i",{staticClass:"uni-loading"}):i("img",{staticStyle:{width:"120px",height:"32px"},attrs:{src:a.captchaBase64}})])],1):a._e(),i("v-uni-view",{staticClass:"uni-button-group"},[i("v-uni-button",{staticClass:"uni-button uni-button-full",attrs:{type:"primary",loading:a.loading,disabled:a.loading},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.submitForm.apply(void 0,arguments)}}},[a._v(a._s(a.$t("login.button.login")))])],1)],1)],1)],1)},o=[]},"7ea7":function(a,t,i){var e=i("24fb");t=e(!1),t.push([a.i,'uni-page-body[data-v-754dda92]{width:100%;height:100%;display:flex;justify-content:center;background-color:#fff}.login-box[data-v-754dda92]{position:relative;max-width:350px;flex:1;padding:140px 35px 0;margin:0 auto;overflow:hidden\n\t/* background-color: #F5F5F5; */}.underline[data-v-754dda92]:hover{text-decoration:underline}.uni-tips[data-v-754dda92]{display:flex;justify-content:flex-end;margin-top:15px}.uni-tips-text[data-v-754dda92]{cursor:pointer;text-decoration:underline;font-size:13px;color:#007aff;opacity:.8}.no-padding[data-v-754dda92]{padding:0}.admin-logo[data-v-754dda92]{display:flex;justify-content:center;margin-bottom:30px}.admin-logo uni-image[data-v-754dda92]{height:40px}.admin-captcha-img[data-v-754dda92]{position:absolute;top:1px;right:0;display:flex;justify-content:center;align-items:center;background-color:#fff;width:100px;height:33px;border-left:1px #e5e5e5 solid;border-right:1px #e5e5e5 solid;border-radius:0 5px 5px 0;background-color:#f9f9f9}.admin-captcha-img img[data-v-754dda92]{border-radius:5px}.uni-loading[data-v-754dda92]:before{background:transparent url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=") no-repeat}.uni-loading[data-v-754dda92]{margin:0 auto;width:20px;height:20px;display:inline-block;vertical-align:middle;-webkit-animation:uni-loading-data-v-754dda92 1s steps(12) infinite;animation:uni-loading-data-v-754dda92 1s steps(12) infinite;background-size:100%}@-webkit-keyframes uni-loading-data-v-754dda92{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes uni-loading-data-v-754dda92{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}body.?%PAGE?%[data-v-754dda92]{background-color:#fff}',""]),a.exports=t},d6ca:function(a,t,i){"use strict";i.r(t);var e=i("726f"),n=i.n(e);for(var o in e)"default"!==o&&function(a){i.d(t,a,(function(){return e[a]}))}(o);t["default"]=n.a},f96f:function(a,t,i){"use strict";i.r(t);var e=i("7c50"),n=i("d6ca");for(var o in n)"default"!==o&&function(a){i.d(t,a,(function(){return n[a]}))}(o);i("ff1d");var s,r=i("f0c5"),d=Object(r["a"])(n["default"],e["b"],e["c"],!1,null,"754dda92",null,!1,e["a"],s);t["default"]=d.exports},ff1d:function(a,t,i){"use strict";var e=i("2531"),n=i.n(e);n.a}}]);