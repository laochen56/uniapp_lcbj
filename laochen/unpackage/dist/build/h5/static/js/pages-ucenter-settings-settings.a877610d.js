(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ucenter-settings-settings"],{"2cec":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var i={uniList:n("362e").default,uniListItem:n("177c").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("uni-list",{staticClass:"mt10",attrs:{border:!1}},[n("uni-list-item",{attrs:{title:t.$t("settings.userInfo"),to:"/pages/ucenter/userinfo/userinfo",link:"navigateTo"}}),t.userInfo.mobile?n("uni-list-item",{attrs:{title:t.$t("settings.changePassword"),to:"/pages/ucenter/login-page/pwd-retrieve/pwd-retrieve?phoneNumber="+t.userInfo.mobile,link:"navigateTo"}}):t._e()],1),n("uni-list",{staticClass:"mt10",attrs:{border:!1}},[t.i18nEnable?n("uni-list-item",{attrs:{title:t.$t("settings.changeLanguage"),rightText:t.currentLanguage,link:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeLanguage.apply(void 0,arguments)}}}):t._e()],1),n("uni-list",{staticClass:"mt10",attrs:{border:!1}},[n("uni-list-item",{attrs:{title:t.$t("settings.deactivate"),link:"navigateTo"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.deactivate.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"bottom-back",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickLogout.apply(void 0,arguments)}}},[t.hasLogin?n("v-uni-text",{staticClass:"bottom-back-text"},[t._v(t._s(t.$t("settings.logOut")))]):n("v-uni-text",{staticClass:"bottom-back-text"},[t._v(t._s(t.$t("settings.login")))])],1)],1)},s=[]},"37ce":function(t,e,n){"use strict";n.r(e);var i=n("2cec"),o=n("63bf");for(var s in o)"default"!==s&&function(t){n.d(e,t,(function(){return o[t]}))}(s);n("9598");var a,c=n("f0c5"),u=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"54176d80",null,!1,i["a"],a);e["default"]=u.exports},"63bf":function(t,e,n){"use strict";n.r(e);var i=n("f95b"),o=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=o.a},7295:function(t,e,n){var i=n("d83e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("050479f6",i,!0,{sourceMap:!1,shadowMode:!1})},"81ee":function(t,e,n){"use strict";function i(){var t=void 0;try{if("iOS"==plus.os.name){var e=0,n=plus.ios.invoke("UIApplication","sharedApplication"),i=plus.ios.invoke(n,"currentUserNotificationSettings");i?(e=i.plusGetAttribute("types"),plus.ios.deleteObject(i)):e=plus.ios.invoke(n,"enabledRemoteNotificationTypes"),plus.ios.deleteObject(n),t=0!=e}else{var o=plus.android.runtimeMainActivity(),s=plus.android.invoke("com.igexin.sdk.PushManager","getInstance");t=plus.android.invoke(s,"isPushTurnedOn",o)}}catch(a){console.error("exception in isTurnedOnPush@dc-push!!")}return t}function o(){try{if("iOS"==plus.os.name)i()||a();else{var t=plus.android.runtimeMainActivity(),e=plus.android.invoke("com.igexin.sdk.PushManager","getInstance");plus.android.invoke(e,"turnOnPush",t)}}catch(n){console.error("exception in turnOnPush@dc-push!!")}}function s(){try{if("iOS"==plus.os.name);else{var t=plus.android.runtimeMainActivity(),e=plus.android.invoke("com.igexin.sdk.PushManager","getInstance");plus.android.invoke(e,"turnOffPush",t)}}catch(n){console.error("exception in trunOffPush@dc-push!!")}}function a(){try{if("iOS"==plus.os.name){var t=plus.ios.invoke("UIApplication","sharedApplication"),e=plus.ios.invoke("NSURL","URLWithString:","app-settings:");plus.ios.invoke(t,"openURL:",e),plus.ios.deleteObject(e),plus.ios.deleteObject(t)}}catch(n){console.error("exception in settingInIos@dc-push!!")}}function c(){if("android"==uni.getSystemInfoSync().platform){var t=plus.android.runtimeMainActivity(),e=plus.android.importClass("android.content.Intent"),n=plus.android.importClass("android.provider.Settings"),i=new e(n.ACTION_APPLICATION_DETAILS_SETTINGS);t.startActivity(i)}}function u(){"ios"==uni.getSystemInfoSync().platform&&a(),"android"==uni.getSystemInfoSync().platform&&c()}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={isOn:i,iosSetting:a,on:o,off:s,setting:u};e.default=r},9598:function(t,e,n){"use strict";var i=n("7295"),o=n.n(i);o.a},d83e:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"\nuni-page-body[data-v-54176d80]{flex:1;width:100%;height:100%}uni-button[data-v-54176d80]:after{border:none;border-radius:0}\n.content[data-v-54176d80]{\ndisplay:flex;width:%?750?%;height:100vh;\nflex-direction:column;flex:1;background-color:#f9f9f9}.bottom-back[data-v-54176d80]{margin-top:10px;width:%?750?%;height:44px;\ndisplay:flex;\nflex-direction:column;justify-content:center;align-items:center;\nborder:none;\nborder-width:0;border-radius:0;background-color:#fff}.bottom-back-text[data-v-54176d80]{font-size:%?33?%}.mt10[data-v-54176d80]{margin-top:10px}\n.content[data-v-54176d80] .uni-list{background-color:#f9f9f9}.content[data-v-54176d80] .uni-list-item--disabled,.list-item[data-v-54176d80]{height:50px;margin-bottom:1px}\n",""]),t.exports=e},f95b:function(t,e,n){"use strict";var i=n("4ea4");n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("5530")),s=i(n("81ee")),a=n("26cb"),c={data:function(){return{pushServer:s.default,supportMode:[],pushIsOn:"wait",currentLanguage:""}},computed:(0,o.default)((0,o.default)({},(0,a.mapGetters)({userInfo:"user/info",hasLogin:"user/hasLogin"})),{},{i18nEnable:function(){return getApp().globalData.config.i18n.enable}}),onLoad:function(){this.currentLanguage="en"==uni.getStorageSync("CURRENT_LANG")?"English":"简体中文",uni.setNavigationBarTitle({title:this.$t("settings.navigationBarTitle")})},onShow:function(){},methods:(0,o.default)((0,o.default)({},(0,a.mapActions)({logout:"user/logout"})),{},{toEdit:function(){uni.navigateTo({url:"/pages/ucenter/userinfo/userinfo"})},deactivate:function(){uni.navigateTo({url:"/pages/ucenter/settings/deactivate/deactivate"})},changePwd:function(){uni.navigateTo({url:"/pages/ucenter/login-page/pwd-retrieve/pwd-retrieve?phoneNumber="+(this.userInfo&&this.userInfo.mobile?this.userInfo.mobile:""),fail:function(t){console.log(t)}})},startSoterAuthentication:function(t){var e=this;console.log(t);var n={fingerPrint:this.$t("settings.fingerPrint"),facial:this.$t("settings.facial")}[t];this.checkIsSoterEnrolledInDevice({checkAuthMode:t,title:n}).then((function(){console.log(t,n),uni.startSoterAuthentication({requestAuthModes:[t],challenge:"123456",authContent:e.$t("settings.please")+" "+"".concat(n),complete:function(t){console.log(t)},success:function(t){if(console.log(t),0==t.errCode)return uni.showToast({title:"".concat(n)+e.$t("settings.successText"),icon:"none"});uni.showToast({title:e.$t("settings.failTip"),icon:"none"})},fail:function(t){console.log(t),console.log("认证失败:".concat(t.errCode)),uni.showToast({title:e.$t("settings.authFailed"),icon:"none"})}})}))},checkIsSoterEnrolledInDevice:function(t){var e=this,n=t.checkAuthMode,i=t.title;return new Promise((function(t,o){uni.checkIsSoterEnrolledInDevice({checkAuthMode:n,success:function(n){if(console.log(n),n.isEnrolled)return t(n);uni.showToast({title:e.$t("settings.deviceNoOpen")+"".concat(i),icon:"none"}),o(n)},fail:function(t){console.log(t),uni.showToast({title:"".concat(i)+e.$t("settings.fail"),icon:"none"}),o(t)}})}))},clickLogout:function(){var t=this;this.hasLogin?uni.showModal({title:this.$t("settings.tips"),content:this.$t("settings.exitLogin"),cancelText:this.$t("settings.cancelText"),confirmText:this.$t("settings.confirmText"),success:function(e){e.confirm&&(t.logout(),uni.navigateBack())},fail:function(){},complete:function(){}}):uni.navigateTo({url:"/pages/ucenter/login-page/index/index"})},clearTmp:function(){var t=this;uni.showLoading({title:this.$t("settings.clearing"),mask:!0}),uni.getSavedFileList({success:function(e){e.fileList.length>0?uni.removeSavedFile({filePath:e.fileList[0].filePath,complete:function(e){console.log(e),uni.hideLoading(),uni.showToast({title:t.$t("settings.clearedSuccessed"),icon:"none"})}}):(uni.hideLoading(),uni.showToast({title:t.$t("settings.clearedSuccessed"),icon:"none"}))},complete:function(t){console.log(t)}})},changeLanguage:function(){var t=this;console.log("语言切换"),uni.showActionSheet({itemList:["English","简体中文"],success:function(e){console.log(e.tapIndex);var n=uni.getStorageSync("CURRENT_LANG");if(!e.tapIndex&&"zh-Hans"==n||e.tapIndex&&"en"==n){var i=getApp().globalData;n=i.locale="en"===n?"zh-Hans":"en",uni.setStorageSync("CURRENT_LANG",n),getApp().globalData.$i18n.locale=n,t.currentLanguage=e.tapIndex?"简体中文":"English",uni.setLocale&&uni.setLocale(n),uni.reLaunch({url:"/pages/list/list",complete:function(){uni.$emit("changeLanguage",n)}})}},fail:function(){},complete:function(){}})}})};e.default=c}}]);