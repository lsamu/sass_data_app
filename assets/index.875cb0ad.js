import{d as s,r as _,c as i,t as l,g as a}from"./vue.17ee99dc.js";import{n as u}from"./index.b3585768.js";import"./@vue.bf07eda4.js";import"./vue-router.56a51892.js";import"./element-ui.110ebeb5.js";import"./deepmerge.25f981a4.js";import"./resize-observer-polyfill.e7174618.js";import"./throttle-debounce.cf11fd6b.js";import"./babel-helper-vue-jsx-merge-props.53f216c7.js";import"./normalize-wheel.77c60d86.js";import"./async-validator.456bfc40.js";import"./babel-runtime.d3ca39b1.js";import"./vue-awesome.427d8fd2.js";import"./@lauxinyi.990300c4.js";import"./vant.0181544d.js";import"./@vant.651a21ff.js";import"./pinia.9c971dd3.js";import"./vue-demi.c8c3ef1c.js";import"./pinia-plugin-persistedstate.278b0fd2.js";const p=s({setup(o,e){const n=a().proxy,r=_({menuList:[{name:"\u6211\u7684\u53EF\u89C6\u5316",icon:"el-icon-document",path:"/core/chart"},{name:"\u5206\u7C7B\u7BA1\u7406",icon:"el-icon-menu",path:"/core/category"},{name:"\u6570\u636E\u6E90\u7BA1\u7406",icon:"el-icon-menu",path:"/core/data"},{name:"\u5B57\u5178\u7BA1\u7406",icon:"el-icon-menu",path:"/core/dict"},{name:"\u6848\u4F8B\u5E02\u573A",icon:"el-icon-menu",path:"/core/market"}]}),c=i(()=>n.$route.path);return{...l(r),routePath:c}}});var m=function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{staticClass:"sidebar"},[t("div",{staticClass:"logo"},[t("router-link",{attrs:{to:"/"}},[e._v("H5\u5C0F\u7A0B\u5E8F\u53EF\u89C6\u5316")])],1),e._l(e.menuList,function(n,r){return t("router-link",{key:r,staticClass:"sidebar-item",class:{active:e.routePath==n.path},attrs:{to:n.path}},[t("i",{staticClass:"item.icon"}),t("span",[e._v(e._s(n.name))])])})],2)},d=[],v=u(p,m,d,!1,null,"1fc331e1",null,null);const f=v.exports,h=s({setup(o,e){const n=a().proxy;return{title:i(()=>n.$route.meta.title),handleLogout:function(){n.$router.push({path:"/"})}}}});var x=function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{staticClass:"header"},[t("div",{staticClass:"page-title"},[t("span",[e._v(e._s(e.title))])]),t("div",{staticClass:"icon-row"}),t("el-dropdown",{scopedSlots:e._u([{key:"dropdown",fn:function(){return[t("el-dropdown-menu",[t("el-dropdown-item",{nativeOn:{click:function(n){return e.handleLogout.apply(null,arguments)}}},[e._v("\u9000\u51FA")])],1)]},proxy:!0}])},[t("div",{staticClass:"avatar-image"})])],1)},y=[],g=u(h,x,y,!1,null,"b6b12b5e",null,null);const C=g.exports,$=s({components:{NavMenu:f,PageHeader:C},setup(o,e){a().proxy}});var F=function(){var e=this,t=e._self._c;return e._self._setupProxy,t("el-container",[t("el-aside",{attrs:{width:"240px"}},[t("NavMenu")],1),t("el-container",[t("el-header",{attrs:{height:"96px"}},[t("PageHeader")],1),t("el-main",[t("router-view")],1)],1)],1)},b=[],w=u($,F,b,!1,null,"479639e4",null,null);const K=w.exports;export{K as default};