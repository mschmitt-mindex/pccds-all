(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{12:function(e,t,s){"use strict";s.r(t);var o=s(21),a={data:()=>({coverStyles:{},pageStyles:{}}),props:{assetPath:{required:!0}},created(){this.coverStyles={backgroundImage:"url(".concat(this.assetPath,"/icon/welcome-cover.svg)")},this.pageStyles={backgroundImage:"url(".concat(this.assetPath,"/img/welcome-paper.png)")}},mounted(){window.onload=()=>{const e=new o.a.timeline;let t=0;e.to(".c_welcome_message",{duration:1.6,"--x":30,"--y":20,"--rotate-x":11,ease:"expo"}),e.to(".c_welcome_message__page",{duration:1.6,z:5},"-=1.6"),e.to(".c_welcome_message__page_loose",{duration:1.6,x:12,y:2,z:3,rotationZ:7,ease:"expo"},"-=1"),e.to(".c_welcome_message__page_form",{duration:1.7,x:20,y:5,z:1,rotationZ:-5,ease:"expo"},"-=1.7"),e.to(".c_welcome_message__page_form",{duration:.3,opacity:1}),t=.4,e.to(".c_welcome_message__cover",.4,{rotationY:-140,transformOrigin:"left",ease:"none"}),e.to(".c_welcome_message__cover_back",.4,{rotationY:40,z:1,transformOrigin:"right",ease:"none"},"-=".concat(.4)),e.to(".c_welcome_message__cover_back__edge",.4,{rotationY:41,z:1,transformOrigin:"right",ease:"none"},"-=".concat(.4)),e.to(".c_welcome_message",2.7,{"--x":-270,"--rotate-x":7,ease:"expo"},"-=0.3"),e.to(".c_welcome_message__page_form",1.7,{x:300,y:-2,z:20,scale:1,rotationZ:-1,ease:"expo"},"-=1.9")}}},_=s(13),c=Object(_.a)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"c_welcome_message"},[s("div",{staticClass:"c_welcome_message__guide"},[s("div",{staticClass:"c_welcome_message__back"}),e._v(" "),s("div",{staticClass:"c_welcome_message__page_form"},[e._t("default")],2),e._v(" "),s("div",{staticClass:"c_welcome_message__page_loose"}),e._v(" "),s("div",{staticClass:"c_welcome_message__page",style:e.pageStyles}),e._v(" "),s("div",{staticClass:"c_welcome_message__cover_back"}),e._v(" "),s("div",{staticClass:"c_welcome_message__cover_back__edge"}),e._v(" "),s("div",{staticClass:"c_welcome_message__cover",style:e.coverStyles})])])}),[],!1,null,null,null);t.default=c.exports},13:function(e,t,s){"use strict";function o(e,t,s,o,a,_,c,n){var r,i="function"==typeof e?e.options:e;if(t&&(i.render=t,i.staticRenderFns=s,i._compiled=!0),o&&(i.functional=!0),_&&(i._scopeId="data-v-"+_),c?(r=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(c)},i._ssrRegister=r):a&&(r=n?function(){a.call(this,this.$root.$options.shadowRoot)}:a),r)if(i.functional){i._injectStyles=r;var l=i.render;i.render=function(e,t){return r.call(t),l(e,t)}}else{var m=i.beforeCreate;i.beforeCreate=m?[].concat(m,r):[r]}return{exports:e,options:i}}s.d(t,"a",(function(){return o}))}}]);