(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{317:function(e,r,t){"use strict";function o(e,r,t,o,s,n,i,a){var l=typeof(e=e||{}).default;"object"!==l&&"function"!==l||(e=e.default);var c,u="function"==typeof e?e.options:e;if(r&&(u.render=r,u.staticRenderFns=t,u._compiled=!0),o&&(u.functional=!0),n&&(u._scopeId=n),i?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=c):s&&(c=a?function(){s.call(this,this.$root.$options.shadowRoot)}:s),c)if(u.functional){u._injectStyles=c;var f=u.render;u.render=function(e,r){return c.call(r),f(e,r)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:u}}t.d(r,"a",(function(){return o}))},371:function(e,r,t){"use strict";t.r(r),t(49);var o={data:()=>({errors:[]}),props:{ajaxSubmitUrl:!1,formId:{required:!0},validate:!1},methods:{checkForExistingError:function(e,r){for(let t=0;t<this.errors.length;t++)if(this.errors[t].fieldName===e&&this.errors[t].message===r)return!0;return!1},submitForm:function(e){let r=!0;if(this.validate&&(VueEvent.$emit("checkValidation",this.formId),r=!1,r=!(this.errors.length>0)),r)return!0;e.preventDefault()}},mounted(){VueEvent.$on("form-set-error",(e,r,t)=>{this.formId===e&&(this.checkForExistingError(r,t)||this.errors.push({fieldName:r,message:t}))}),VueEvent.$on("form-remove-error",(e,r)=>{let t=this.errors.length;for(;t--;)this.errors[t].fieldName===r&&this.errors.splice(t,1)})}},s=t(317),n=Object(s.a)(o,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("form",{on:{submit:e.submitForm}},[e.errors.length?t("div",{staticClass:"c_form__errors_wrapper c_message c_message--error c_text"},[t("b",[e._v("Please correct the following error"),e.errors.length>1?t("span",[e._v("s")]):e._e(),e._v(":")]),e._v(" "),t("ul",e._l(e.errors,(function(r){return t("li",[e._v(e._s(r.message))])})),0)]):e._e(),e._v(" "),e._t("default")],2)}),[],!1,null,null,null);r.default=n.exports}}]);