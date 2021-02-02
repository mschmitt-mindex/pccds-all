(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{372:function(e,t,i){"use strict";i.r(t),i(49);var a=i(343),r={data:()=>({error:!1,formatter:!1,input:!1,isValid:!0}),props:{errorMessage:!1,format:!1,formId:!1,inputClasses:!1,inputId:!1,inputName:!1,inputPlaceholder:!1,inputType:!1,inputValue:!1,label:!1,required:!1,validate:!1},methods:{setErrorForFormId(e=null){this.error=this.errorMessage||e,console.dir(this.error),VueEvent.$emit("form-set-error",this.formId,this.inputName,this.error)},removeErrorForFormId(){VueEvent.$emit("form-remove-error",this.formId,this.inputName)},validateField:function(){if(this.validate){let e={valid:!1,message:""};switch(this.validate){case"email":e=this.validEmail(this.input.value);break;case"tel":e=this.validTel(this.input.value);break;case"text":e=this.validText(this.input.value);break;case"zip":e=this.validZip(this.input.value)}this.isValid=e.valid,!e.valid||""===this.input.value&&this.required?this.setErrorForFormId(e.message):(this.error=!1,this.removeErrorForFormId())}},validEmail:function(e){return{valid:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),message:"Please enter a valid email address. example@example.com"}},validTel:function(e){return{valid:/^\d{3}.\d{3}.\d{4}$/.test(e),message:"Please enter a valid phone number. Example: XXX-XXX-XXXX"}},validText:function(e){return{valid:""!==e,message:"Please enter text."}},validZip:function(e){return{valid:/^\d{5}$/.test(e),message:"Please enter a valid ZIP code."}}},mounted(){if("textarea"==this.validate?this.input=this.$el.querySelector("textarea"):this.input=this.$el.querySelector("input"),this.inputValue&&(this.input.value=this.inputValue,"textarea"!=this.validate&&this.validateField()),this.format){let e=!1;switch(this.format){case"tel":e={delimiter:"-",blocks:[3,3,4],numericOnly:!0};break;case"zip":e={blocks:[5],numericOnly:!0}}e&&(this.formatter=new a.a(this.input,e))}VueEvent.$on("checkValidation",e=>{this.formId==e&&this.validateField()})}},s=i(317),l=Object(s.a)(r,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("label",{attrs:{for:e.inputId},domProps:{innerHTML:e._s(e.label)}}),e._v(" "),"textarea"===e.inputType?i("textarea",{class:{inputClasses:e.inputClasses,"c_form_input--invalid":!e.isValid},attrs:{id:e.inputId,required:e.required,name:e.inputName,placeholder:e.inputPlaceholder}}):i("input",{class:{inputClasses:e.inputClasses,"c_form_input--invalid":!e.isValid},attrs:{id:e.inputId,type:e.inputType,name:e.inputName,required:e.required,placeholder:e.inputPlaceholder}}),e._v(" "),e.isValid?e._e():i("div",{staticClass:"c_form_input__error"},[e._v(e._s(e.error))])])}),[],!1,null,null,null);t.default=l.exports}}]);