(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{317:function(t,n,e){},318:function(t,n,e){},346:function(t,n,e){"use strict";var o=e(317);e.n(o).a},539:function(t,n,e){"use strict";var o=e(318);e.n(o).a},543:function(t,n,e){"use strict";e.r(n);e(42),e(65),e(300);var o={name:"VsButton",props:{size:String,type:{type:String,default:"default"},plain:{type:Boolean,default:!1},round:{type:Boolean,default:!1},circle:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},icon:{type:String,default:""}},methods:{handleClick:function(t){this.$emit("click",t)}}},s=(e(346),e(41)),i=Object(s.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",{staticClass:"vs-button",class:[t.type?"vs-button--"+t.type:"",t.buttonSize?"vs-button--"+t.buttonSize:"",{"is-plain":t.plain,"is-round":t.round,"is-circle":t.circle,"is-disabled":t.disabled}],attrs:{disabled:t.disabled},on:{click:t.handleClick}},[t.icon?e("i",{class:t.icon}):t._e(),t._v(" "),t.$slots.default?e("span",[t._t("default")],2):t._e()])}),[],!1,null,null,null).exports,a=e(0),r=e(347),u=e.n(r);a.a.use(u.a);var l={data:function(){return{code1:'\n      <vs-button>default</vs-button>\n      <vs-button type="primary">primary</vs-button>\n       '.replace(/^\s*/gm,"").trim(),code2:'\n       <s-button disabled type="primary">disabled</s-button>    \n       '.replace(/^\s*/gm,"").trim(),code3:'\n        <s-button  icon="home"  type="primary">home</s-button>\n        <s-button  icon="phone-fill" type="primary" icon-position="right">call</s-button>\n        <s-button  icon="visible"  type="primary">show password</s-button>\n       '.replace(/^\s*/gm,"").trim(),code4:'\n       <s-button  loading icon="download"  type="primary">加载中</s-button>\n       '.replace(/^\s*/gm,"").trim(),code5:'\n        <s-button-group>\n          <s-button icon="left" icon-position="left">prev</s-button>\n          <s-button>middle</s-button>\n          <s-button icon="right" icon-position="right">next</s-button>\n        </s-button-group>\n       '.replace(/^ {8}/gm,"").trim()}},components:{"vs-button":i}},c=(e(539),Object(s.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h3",[t._v("基础用法")]),t._v(" "),e("vs-button",[t._v("default")]),t._v(" "),e("vs-button",{attrs:{type:"primary"}},[t._v("primary")]),t._v(" "),e("vs-button",{attrs:{type:"info"}},[t._v("info")]),t._v(" "),e("vs-button",{attrs:{type:"success"}},[t._v("success")]),t._v(" "),e("vs-button",{attrs:{type:"warning"}},[t._v("warning")]),t._v(" "),e("vs-button",{attrs:{type:"danger"}},[t._v("danger")]),t._v(" "),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e("code",{staticClass:"vue"},[t._v(t._s(t.code1))])])],1)}),[],!1,null,"4a443886",null));n.default=c.exports}}]);