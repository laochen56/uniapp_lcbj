(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ucenter-about-about"],{"0502":function(t,e,n){"use strict";var r=n("499d"),a=n.n(r);a.a},"0b53":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-view[data-v-5cc78a2e]{display:flex;box-sizing:border-box;flex-direction:column}.about[data-v-5cc78a2e]{flex-direction:column;justify-content:center;align-items:center}.box[data-v-5cc78a2e]{margin-top:60px;flex-direction:column;justify-content:center;align-items:center}.logoImg[data-v-5cc78a2e]{margin-bottom:%?10?%;width:%?160?%;height:%?160?%;border-radius:15px}.tip[data-v-5cc78a2e]{text-align:center;font-size:%?24?%;margin-top:10px;padding:%?10?%}.appName[data-v-5cc78a2e]{margin-top:20px;font-size:%?42?%;font-weight:500}.qrcode[data-v-5cc78a2e]{margin-top:%?60?%}.copyright[data-v-5cc78a2e]{font-size:%?32?%;flex-direction:column;justify-content:center;align-items:center;bottom:20px;position:fixed}.agreement-box[data-v-5cc78a2e]{justify-content:center}.agreement[data-v-5cc78a2e]{color:#2285ff;font-size:%?26?%}.hint[data-v-5cc78a2e]{text-align:center;color:#999;font-size:%?26?%}',""]),t.exports=e},1300:function(t,e,n){"use strict";n.r(e);var r=n("c96f"),a=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=a.a},"31b0":function(t,e,n){"use strict";n.r(e);var r=n("38a2"),a=n("482a");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("0502");var i,s=n("f0c5"),u=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,"5cc78a2e",null,!1,r["a"],i);e["default"]=u.exports},"38a2":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var r={SansnnUQRCode:n("705f").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"about"},[n("v-uni-view",{staticClass:"box"},[n("v-uni-image",{staticClass:"logoImg",attrs:{src:t.about.logo}}),n("v-uni-text",{staticClass:"tip appName"},[t._v(t._s(t.about.appName))]),n("v-uni-text",{staticClass:"tip"},[t._v("Version "+t._s(t.version))]),n("Sansnn-uQRCode",{staticClass:"qrcode",attrs:{text:t.about.download,makeOnLoad:!0}}),n("v-uni-text",{staticClass:"tip"},[t._v(t._s(t.$t("about.sacnQR"))+" "+t._s(t.about.appName)+" "+t._s(t.$t("about.client")))])],1),n("v-uni-view",{staticClass:"copyright"},[t._l(t.about.agreements,(function(e,r){return n("v-uni-view",{key:r,staticClass:"agreement-box"},[n("v-uni-text",{staticClass:"agreement",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.navigateTo(e)}}},[t._v("《"+t._s(e.title)+"》")]),t.about.agreements.length-1>r?n("v-uni-text",{staticClass:"hint"},[t._v(t._s(t.$t("about.and")))]):t._e()],1)})),n("v-uni-text",{staticClass:"hint"},[t._v("Copyright © "+t._s(t.year))]),n("v-uni-text",{staticClass:"hint"},[t._v(t._s(t.about.company))])],2)],1)},o=[]},"39d5":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-canvas",{style:{width:t.size+"px",height:t.size+"px"},attrs:{id:t.cid,"canvas-id":t.cid}})],1)},o=[]},"482a":function(t,e,n){"use strict";n.r(e);var r=n("c9bf"),a=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=a.a},"499d":function(t,e,n){var r=n("0b53");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("4f06").default;a("43f03d7a",r,!0,{sourceMap:!1,shadowMode:!1})},5052:function(t,e,n){"use strict";n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={};(function(){function t(t){this.mode=n.MODE_8BIT_BYTE,this.data=t}function e(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=new Array}t.prototype={getLength:function(t){return this.data.length},write:function(t){for(var e=0;e<this.data.length;e++)t.put(this.data.charCodeAt(e),8)}},e.prototype={addData:function(e){var n=new t(e);this.dataList.push(n),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){if(this.typeNumber<1){var t=1;for(t=1;t<40;t++){for(var e=l.getRSBlocks(t,this.errorCorrectLevel),n=new f,r=0,a=0;a<e.length;a++)r+=e[a].dataCount;for(a=0;a<this.dataList.length;a++){var o=this.dataList[a];n.put(o.mode,4),n.put(o.getLength(),i.getLengthInBits(o.mode,t)),o.write(n)}if(n.getLengthInBits()<=8*r)break}this.typeNumber=t}this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,n){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var a=0;a<this.moduleCount;a++)this.modules[r][a]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,n),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=e.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,n)},setupPositionProbePattern:function(t,e){for(var n=-1;n<=7;n++)if(!(t+n<=-1||this.moduleCount<=t+n))for(var r=-1;r<=7;r++)e+r<=-1||this.moduleCount<=e+r||(this.modules[t+n][e+r]=0<=n&&n<=6&&(0==r||6==r)||0<=r&&r<=6&&(0==n||6==n)||2<=n&&n<=4&&2<=r&&r<=4)},getBestMaskPattern:function(){for(var t=0,e=0,n=0;n<8;n++){this.makeImpl(!0,n);var r=i.getLostPoint(this);(0==n||t>r)&&(t=r,e=n)}return e},createMovieClip:function(t,e,n){var r=t.createEmptyMovieClip(e,n),a=1;this.make();for(var o=0;o<this.modules.length;o++)for(var i=o*a,s=0;s<this.modules[o].length;s++){var u=s*a,c=this.modules[o][s];c&&(r.beginFill(0,100),r.moveTo(u,i),r.lineTo(u+a,i),r.lineTo(u+a,i+a),r.lineTo(u,i+a),r.endFill())}return r},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=i.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var n=0;n<t.length;n++){var r=t[e],a=t[n];if(null==this.modules[r][a])for(var o=-2;o<=2;o++)for(var s=-2;s<=2;s++)this.modules[r+o][a+s]=-2==o||2==o||-2==s||2==s||0==o&&0==s}},setupTypeNumber:function(t){for(var e=i.getBCHTypeNumber(this.typeNumber),n=0;n<18;n++){var r=!t&&1==(e>>n&1);this.modules[Math.floor(n/3)][n%3+this.moduleCount-8-3]=r}for(n=0;n<18;n++){r=!t&&1==(e>>n&1);this.modules[n%3+this.moduleCount-8-3][Math.floor(n/3)]=r}},setupTypeInfo:function(t,e){for(var n=this.errorCorrectLevel<<3|e,r=i.getBCHTypeInfo(n),a=0;a<15;a++){var o=!t&&1==(r>>a&1);a<6?this.modules[a][8]=o:a<8?this.modules[a+1][8]=o:this.modules[this.moduleCount-15+a][8]=o}for(a=0;a<15;a++){o=!t&&1==(r>>a&1);a<8?this.modules[8][this.moduleCount-a-1]=o:a<9?this.modules[8][15-a-1+1]=o:this.modules[8][15-a-1]=o}this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var n=-1,r=this.moduleCount-1,a=7,o=0,s=this.moduleCount-1;s>0;s-=2){6==s&&s--;while(1){for(var u=0;u<2;u++)if(null==this.modules[r][s-u]){var c=!1;o<t.length&&(c=1==(t[o]>>>a&1));var l=i.getMask(e,r,s-u);l&&(c=!c),this.modules[r][s-u]=c,a--,-1==a&&(o++,a=7)}if(r+=n,r<0||this.moduleCount<=r){r-=n,n=-n;break}}}}},e.PAD0=236,e.PAD1=17,e.createData=function(t,n,r){for(var a=l.getRSBlocks(t,n),o=new f,s=0;s<r.length;s++){var u=r[s];o.put(u.mode,4),o.put(u.getLength(),i.getLengthInBits(u.mode,t)),u.write(o)}var c=0;for(s=0;s<a.length;s++)c+=a[s].dataCount;if(o.getLengthInBits()>8*c)throw new Error("code length overflow. ("+o.getLengthInBits()+">"+8*c+")");o.getLengthInBits()+4<=8*c&&o.put(0,4);while(o.getLengthInBits()%8!=0)o.putBit(!1);while(1){if(o.getLengthInBits()>=8*c)break;if(o.put(e.PAD0,8),o.getLengthInBits()>=8*c)break;o.put(e.PAD1,8)}return e.createBytes(o,a)},e.createBytes=function(t,e){for(var n=0,r=0,a=0,o=new Array(e.length),s=new Array(e.length),u=0;u<e.length;u++){var l=e[u].dataCount,f=e[u].totalCount-l;r=Math.max(r,l),a=Math.max(a,f),o[u]=new Array(l);for(var h=0;h<o[u].length;h++)o[u][h]=255&t.buffer[h+n];n+=l;var d=i.getErrorCorrectPolynomial(f),g=new c(o[u],d.getLength()-1),m=g.mod(d);s[u]=new Array(d.getLength()-1);for(h=0;h<s[u].length;h++){var p=h+m.getLength()-s[u].length;s[u][h]=p>=0?m.get(p):0}}var v=0;for(h=0;h<e.length;h++)v+=e[h].totalCount;var C=new Array(v),w=0;for(h=0;h<r;h++)for(u=0;u<e.length;u++)h<o[u].length&&(C[w++]=o[u][h]);for(h=0;h<a;h++)for(u=0;u<e.length;u++)h<s[u].length&&(C[w++]=s[u][h]);return C};for(var n={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},a={L:1,M:0,Q:3,H:2},o={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},i={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){var e=t<<10;while(i.getBCHDigit(e)-i.getBCHDigit(i.G15)>=0)e^=i.G15<<i.getBCHDigit(e)-i.getBCHDigit(i.G15);return(t<<10|e)^i.G15_MASK},getBCHTypeNumber:function(t){var e=t<<12;while(i.getBCHDigit(e)-i.getBCHDigit(i.G18)>=0)e^=i.G18<<i.getBCHDigit(e)-i.getBCHDigit(i.G18);return t<<12|e},getBCHDigit:function(t){var e=0;while(0!=t)e++,t>>>=1;return e},getPatternPosition:function(t){return i.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,n){switch(t){case o.PATTERN000:return(e+n)%2==0;case o.PATTERN001:return e%2==0;case o.PATTERN010:return n%3==0;case o.PATTERN011:return(e+n)%3==0;case o.PATTERN100:return(Math.floor(e/2)+Math.floor(n/3))%2==0;case o.PATTERN101:return e*n%2+e*n%3==0;case o.PATTERN110:return(e*n%2+e*n%3)%2==0;case o.PATTERN111:return(e*n%3+(e+n)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new c([1],0),n=0;n<t;n++)e=e.multiply(new c([1,s.gexp(n)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case n.MODE_NUMBER:return 10;case n.MODE_ALPHA_NUM:return 9;case n.MODE_8BIT_BYTE:return 8;case n.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case n.MODE_NUMBER:return 12;case n.MODE_ALPHA_NUM:return 11;case n.MODE_8BIT_BYTE:return 16;case n.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case n.MODE_NUMBER:return 14;case n.MODE_ALPHA_NUM:return 13;case n.MODE_8BIT_BYTE:return 16;case n.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),n=0,r=0;r<e;r++)for(var a=0;a<e;a++){for(var o=0,i=t.isDark(r,a),s=-1;s<=1;s++)if(!(r+s<0||e<=r+s))for(var u=-1;u<=1;u++)a+u<0||e<=a+u||0==s&&0==u||i==t.isDark(r+s,a+u)&&o++;o>5&&(n+=3+o-5)}for(r=0;r<e-1;r++)for(a=0;a<e-1;a++){var c=0;t.isDark(r,a)&&c++,t.isDark(r+1,a)&&c++,t.isDark(r,a+1)&&c++,t.isDark(r+1,a+1)&&c++,0!=c&&4!=c||(n+=3)}for(r=0;r<e;r++)for(a=0;a<e-6;a++)t.isDark(r,a)&&!t.isDark(r,a+1)&&t.isDark(r,a+2)&&t.isDark(r,a+3)&&t.isDark(r,a+4)&&!t.isDark(r,a+5)&&t.isDark(r,a+6)&&(n+=40);for(a=0;a<e;a++)for(r=0;r<e-6;r++)t.isDark(r,a)&&!t.isDark(r+1,a)&&t.isDark(r+2,a)&&t.isDark(r+3,a)&&t.isDark(r+4,a)&&!t.isDark(r+5,a)&&t.isDark(r+6,a)&&(n+=40);var l=0;for(a=0;a<e;a++)for(r=0;r<e;r++)t.isDark(r,a)&&l++;var f=Math.abs(100*l/e/e-50)/5;return n+=10*f,n}},s={glog:function(t){if(t<1)throw new Error("glog("+t+")");return s.LOG_TABLE[t]},gexp:function(t){while(t<0)t+=255;while(t>=256)t-=255;return s.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},u=0;u<8;u++)s.EXP_TABLE[u]=1<<u;for(u=8;u<256;u++)s.EXP_TABLE[u]=s.EXP_TABLE[u-4]^s.EXP_TABLE[u-5]^s.EXP_TABLE[u-6]^s.EXP_TABLE[u-8];for(u=0;u<255;u++)s.LOG_TABLE[s.EXP_TABLE[u]]=u;function c(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);var n=0;while(n<t.length&&0==t[n])n++;this.num=new Array(t.length-n+e);for(var r=0;r<t.length-n;r++)this.num[r]=t[r+n]}function l(t,e){this.totalCount=t,this.dataCount=e}function f(){this.buffer=new Array,this.length=0}function h(t){for(var e,n="",r=0;r<t.length;r++)e=t.charCodeAt(r),e>=1&&e<=127?n+=t.charAt(r):e>2047?(n+=String.fromCharCode(224|e>>12&15),n+=String.fromCharCode(128|e>>6&63),n+=String.fromCharCode(128|e>>0&63)):(n+=String.fromCharCode(192|e>>6&31),n+=String.fromCharCode(128|e>>0&63));return n}c.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),n=0;n<this.getLength();n++)for(var r=0;r<t.getLength();r++)e[n+r]^=s.gexp(s.glog(this.get(n))+s.glog(t.get(r)));return new c(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=s.glog(this.get(0))-s.glog(t.get(0)),n=new Array(this.getLength()),r=0;r<this.getLength();r++)n[r]=this.get(r);for(r=0;r<t.getLength();r++)n[r]^=s.gexp(s.glog(t.get(r))+e);return new c(n,0).mod(t)}},l.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],l.getRSBlocks=function(t,e){var n=l.getRsBlockTable(t,e);if(void 0==n)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var r=n.length/3,a=new Array,o=0;o<r;o++)for(var i=n[3*o+0],s=n[3*o+1],u=n[3*o+2],c=0;c<i;c++)a.push(new l(s,u));return a},l.getRsBlockTable=function(t,e){switch(e){case a.L:return l.RS_BLOCK_TABLE[4*(t-1)+0];case a.M:return l.RS_BLOCK_TABLE[4*(t-1)+1];case a.Q:return l.RS_BLOCK_TABLE[4*(t-1)+2];case a.H:return l.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},f.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var n=0;n<e;n++)this.putBit(1==(t>>>e-n-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},r={errorCorrectLevel:a,defaults:{size:354,margin:0,backgroundColor:"#ffffff",foregroundColor:"#000000",fileType:"png",errorCorrectLevel:a.H,typeNumber:-1},make:function(t){var n=this;return new Promise((function(r,a){var o={canvasId:t.canvasId,componentInstance:t.componentInstance,text:t.text,size:n.defaults.size,margin:n.defaults.margin,backgroundColor:n.defaults.backgroundColor,foregroundColor:n.defaults.foregroundColor,fileType:n.defaults.fileType,errorCorrectLevel:n.defaults.errorCorrectLevel,typeNumber:n.defaults.typeNumber};if(t)for(var i in t)o[i]=t[i];function s(){var n=new e(t.typeNumber,t.errorCorrectLevel);n.addData(h(t.text)),n.make();var o=uni.createCanvasContext(t.canvasId,t.componentInstance);o.setFillStyle(t.backgroundColor),o.fillRect(0,0,t.size,t.size);for(var i=(t.size-2*t.margin)/n.getModuleCount(),s=i,u=0;u<n.getModuleCount();u++)for(var c=0;c<n.getModuleCount();c++){var l=n.isDark(u,c)?t.foregroundColor:t.backgroundColor;o.setFillStyle(l);var f=Math.round(c*i)+t.margin,d=Math.round(u*s)+t.margin,g=Math.ceil((c+1)*i)-Math.floor(c*i),m=Math.ceil((u+1)*i)-Math.floor(u*i);o.fillRect(f,d,g,m)}setTimeout((function(){o.draw(!1,function(){setTimeout((function(){uni.canvasToTempFilePath({canvasId:t.canvasId,fileType:t.fileType,width:t.size,height:t.size,destWidth:t.size,destHeight:t.size,success:function(e){var n,a=e.tempFilePath;n=a,t.success&&t.success(n),r(n)},fail:function(e){t.fail&&t.fail(e),a(e)},complete:function(e){t.complete&&t.complete(e)}},t.componentInstance)}),t.text.length+100)}())}),150)}t=o,t.canvasId?s():console.error("uQRCode: Please set canvasId!")}))}}})();var a=r;e.default=a},"705f":function(t,e,n){"use strict";n.r(e);var r=n("39d5"),a=n("1300");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);var i,s=n("f0c5"),u=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);e["default"]=u.exports},c96f:function(t,e,n){"use strict";var r=n("4ea4");n("cb29"),n("a9e3"),n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=r(n("1da1")),o=r(n("5052")),i={props:{cid:{type:String,default:function(){return Date.now()+Math.random()+""}},text:{type:String,required:!0},size:{type:Number,default:uni.upx2px(200)},margin:{type:Number,default:0},backgroundColor:{type:String,default:"#ffffff"},foregroundColor:{type:String,default:"#000000"},backgroundImage:{type:String},logo:{type:String},makeOnLoad:{type:Boolean,default:!1}},data:function(){return{}},mounted:function(){this.makeOnLoad&&this.make()},methods:{make:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={canvasId:t.cid,componentInstance:t,text:t.text,size:t.size,margin:t.margin,backgroundColor:t.backgroundImage?"rgba(255,255,255,0)":t.backgroundColor,foregroundColor:t.foregroundColor},e.next=3,t.makeSync(n);case 3:if(r=e.sent,!t.backgroundImage){e.next=8;break}return e.next=7,t.drawBackgroundImageSync(r);case 7:r=e.sent;case 8:if(!t.logo){e.next=12;break}return e.next=11,t.drawLogoSync(r);case 11:r=e.sent;case 12:t.makeComplete(r);case 13:case"end":return e.stop()}}),e)})))()},makeComplete:function(t){this.$emit("makeComplete",t)},drawBackgroundImage:function(t){var e=this,n=uni.createCanvasContext(this.cid,this);n.drawImage(this.backgroundImage,0,0,this.size,this.size),n.drawImage(t.filePath,0,0,this.size,this.size),n.draw(!1,(function(){uni.canvasToTempFilePath({canvasId:e.cid,success:function(e){t.success&&t.success(e.tempFilePath)},fail:function(e){t.fail&&t.fail(e)}},e)}))},drawBackgroundImageSync:function(t){var e=this;return(0,a.default)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise((function(n,r){e.drawBackgroundImage({filePath:t,success:function(t){n(t)},fail:function(t){r(t)}})})));case 1:case"end":return n.stop()}}),n)})))()},fillRoundRect:function(t,e,n,r,a,o){t.save(),t.translate(n,r),t.beginPath(),t.arc(a-e,o-e,e,0,Math.PI/2),t.lineTo(e,o),t.arc(e,o-e,e,Math.PI/2,Math.PI),t.lineTo(0,e),t.arc(e,e,e,Math.PI,3*Math.PI/2),t.lineTo(a-e,0),t.arc(a-e,e,e,3*Math.PI/2,2*Math.PI),t.lineTo(a,o-e),t.closePath(),t.setFillStyle("#ffffff"),t.fill(),t.restore()},drawLogo:function(t){var e=this,n=uni.createCanvasContext(this.cid,this);n.drawImage(t.filePath,0,0,this.size,this.size);var r=this.size/4,a=this.size/2-r/2,o=a,i=r+10,s=this.size/2-i/2,u=s,c=5;this.fillRoundRect(n,c,s,u,i,i),n.drawImage(this.logo,a,o,r,r),n.draw(!1,(function(){uni.canvasToTempFilePath({canvasId:e.cid,success:function(e){t.success&&t.success(e.tempFilePath)},fail:function(e){t.fail&&t.fail(e)}},e)}))},drawLogoSync:function(t){var e=this;return(0,a.default)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise((function(n,r){e.drawLogo({filePath:t,success:function(t){n(t)},fail:function(t){r(t)}})})));case 1:case"end":return n.stop()}}),n)})))()},makeSync:function(t){return(0,a.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){o.default.make({canvasId:t.canvasId,componentInstance:t.componentInstance,text:t.text,size:t.size,margin:t.margin,backgroundColor:t.backgroundColor,foregroundColor:t.foregroundColor,success:function(t){e(t)},fail:function(t){n(t)}})})));case 1:case"end":return e.stop()}}),e)})))()}}};e.default=i},c9bf:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={onLoad:function(){},computed:{uniStarterConfig:function(){return console.log(getApp()),getApp().globalData.config}},data:function(){return{version:"V1.0.0",year:"2020",about:{}}},created:function(){this.about=this.uniStarterConfig.about,uni.setNavigationBarTitle({title:this.$t("about.about")+" "+this.about.appName}),this.year=(new Date).getFullYear()},onNavigationBarButtonTap:function(){var t=this.about,e=t.download,n=t.appName,r=t.slogan,a=t.logo;uniShare.show({content:{type:0,href:e,title:n,summary:r,imageUrl:a+"?x-oss-process=image/resize,m_fill,h_100,w_100"},menus:[{img:"/static/app-plus/sharemenu/wechatfriend.png",text:this.$t("common.wechatFriends"),share:{provider:"weixin",scene:"WXSceneSession"}},{img:"/static/app-plus/sharemenu/wechatmoments.png",text:this.$t("common.wechatBbs"),share:{provider:"weixin",scene:"WXSceneTimeline"}},{img:"/static/app-plus/sharemenu/weibo.png",text:this.$t("common.weibo"),share:{provider:"sinaweibo"}},{img:"/static/app-plus/sharemenu/qq.png",text:"QQ",share:{provider:"qq"}},{img:"/static/app-plus/sharemenu/copyurl.png",text:this.$t("common.copy"),share:"copyurl"},{img:"/static/app-plus/sharemenu/more.png",text:this.$t("common.more"),share:"shareSystem"}],cancelText:this.$t("common.cancelShare")},(function(t){console.log(t)}))},methods:{navigateTo:function(t){var e=t.url,n=t.title;uni.navigateTo({url:"/pages/common/webview/webview?url="+e+"&title="+n,success:function(t){},fail:function(){},complete:function(){}})}}};e.default=r},cb29:function(t,e,n){var r=n("23e7"),a=n("81d5"),o=n("44d2");r({target:"Array",proto:!0},{fill:a}),o("fill")}}]);