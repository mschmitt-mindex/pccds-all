(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{10:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a(2),i=a(22),s=a.n(i),o=a(23),l=a.n(o),c=(a(24),!1);function d(t){var e=t.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth)}function u(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=!1;if(""!==t.getAttribute("data-lazy-animate")&&c){var i=JSON.parse(t.getAttribute("data-lazy-animate"))||{},s=i.anim||!1,o=i.targets?document.querySelectorAll(i.targets):i.target?document.querySelector(i.target):t;n=i.reset||!1,a&&(i.staticOnLoad,1)&&(i.delay=i.speed=0),s?requestAnimationFrame((function(){return c.animate(s,o,i)})):Object(r.e)("Animation function not passed in:",s)}Object(r.a)(t,"c_animate--animated"),n||(t.removeAttribute("data-lazy-animate"),e&&e.unobserve(t))}function h(t,e){if(t.hasAttribute("data-srcset")){var a=t.getAttribute("data-srcset");t.setAttribute("srcset",a),(n=t).style.paddingTop="",n.style.maxWidth="",t.removeAttribute("data-srcset"),Object(r.c)("Lazy srcset",a)}var n;if(t.hasAttribute("data-src")){var i=t.getAttribute("data-src");t.setAttribute("src",i),t.removeAttribute("data-src"),Object(r.c)("Lazy src",i)}t.removeAttribute("data-lazy-load"),null!==e&&e.unobserve(t)}var m=function(){function t(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};s()(this,t),this.animateMargin=n.animateMargin||"-100px",this.animateThreshold=n.animateThreshold||0,this.loadMargin=n.loadMargin||"50%",this.loadThreshold=n.loadThreshold||0,this.createImagePlaceholders(),this.loadElements=n.loadElements||document.querySelectorAll("[data-lazy-load]"),this.loadElements.length>0&&(this.loadObserver=new IntersectionObserver((function(t){t.forEach((function(t){Object(r.c)("Lazy loading element",t),t.isIntersecting&&h(t.target,e.loadObserver)}))}),{rootMargin:this.loadMargin,threshold:this.loadThreshold}),this.loadElements.forEach((function(t){d(t)?h(t,null):e.loadObserver.observe(t)}))),this.animateElements=n.animateElements||document.querySelectorAll("[data-lazy-animate]"),this.animateElements.length>0&&Promise.all([a.e(0),a.e(2)]).then(a.bind(null,38)).then((function(t){c=t,e.animateObserver=new IntersectionObserver((function(t){t.forEach((function(t){Object(r.c)("Lazy animating element",t),t.isIntersecting&&u(t.target,e.animateObserver)}))}),{rootMargin:e.animateMargin,threshold:e.animateThreshold}),e.animateElements.forEach((function(t){var a=JSON.parse(t.getAttribute("data-lazy-animate"))||{};d(t)?u(t,a.reset?e.animateObserver:null,!0):e.animateObserver.observe(t)}))})).catch((function(t){return Object(r.e)("An error occurred while loading the component")}))}return l()(t,[{key:"createImagePlaceholders",value:function(){var t=document.querySelectorAll("img[data-lazy-load]");Array.prototype.forEach.call(t,(function(t,e){if(t.getAttribute("data-width")&&t.getAttribute("data-height")){var a=t.getAttribute("data-width"),n=t.getAttribute("data-height");t.style.paddingTop=n/a*100+"%",t.style.maxWidth=t.getAttribute("data-width")+"px"}}))}},{key:"updateAnimate",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=e?document.querySelectorAll(e+" [data-lazy-animate],"+e+"[data-lazy-animate]"):this.animateElements;a.forEach((function(a){e?u(a,null,c):d(a)?u(a,t.animateObserver,c):t.loadObserver.observe(a)}))}},{key:"updateLoad",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=e?document.querySelectorAll(e+" [data-lazy-load],"+e+"[data-lazy-load]"):this.loadElements;a.forEach((function(a){e?h(a,null):d(a)?h(a,t.loadObserver):t.loadObserver.observe(a)}))}}]),t}();Object(r.c)("Lazy Loading");var f=a(16),g={data:function(){return{currentSize:{},sizes:{}}},props:{mqSizes:{required:!0},rootClass:{default:""}},computed:{wrapperClasses:function(){var t=this,e=[];return this.currentSize.classes&&this.currentSize.classes.forEach((function(a){e.push(t.rootClass+"--"+a)})),e},wrapperStyles:function(){var t={};return this.currentSize.styles&&(t=this.currentSize.styles),t}},methods:{},created:function(){this.sizes=JSON.parse(this.mqSizes)},mounted:function(){var t=this;new f.a((function(e){var a=!0,n=!1,r=void 0;try{for(var i,s=function(){var e=i.value.contentRect,a=(e.left,e.top,e.width);e.height;t.currentSize={},t.sizes.forEach((function(e){a>=e.width&&(t.currentSize=e)}))},o=e[Symbol.iterator]();!(a=(i=o.next()).done);a=!0)s()}catch(t){n=!0,r=t}finally{try{a||null==o.return||o.return()}finally{if(n)throw r}}})).observe(this.$el)}},p=a(13),v={components:{ResizeContainer:Object(p.a)(g,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"c_resize_container",class:this.wrapperClasses,style:this.wrapperStyles},[this._t("default")],2)}),[],!1,null,null,null).exports},props:{gridType:!1},computed:{mqSizes:function(){var t=[];switch(this.gridType){case"2-column":t.push({width:650,styles:{gridTemplateColumns:"1fr 1fr"}});break;case"3-column":t.push({width:650,styles:{gridTemplateColumns:"1fr 1fr 1fr"}});break;case"4-column":t.push({width:650,styles:{gridTemplateColumns:"1fr 1fr"}},{width:800,styles:{gridTemplateColumns:"1fr 1fr 1fr 1fr"}});break;case"text-sidebar":t.push({width:650,styles:{alignItems:"center",gridTemplateColumns:"minmax(400px, var(--max-width-text)) minmax(200px, 400px)"}});break;case"sidebar-text":t.push({width:650,styles:{alignItems:"center",gridTemplateColumns:"minmax(200px, 400px) minmax(400px, var(--max-width-text))"}})}return JSON.stringify(t)}}},b=(a(25),Object(p.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return this.mqSizes?e("resize-container",{staticClass:"c_grid",attrs:{"mq-sizes":this.mqSizes}},[this._t("default")],2):this._e()}),[],!1,null,null,null).exports),y=new n.a,w=document.querySelector("[data-guide-page-nav]");w&&new n.a({el:w,components:{},delimiters:["${","}"],data:function(){return{nav:[]}},computed:{},methods:{navItemClicked:function(t){var e=document.querySelector("html");if("first"===t)e.scrollTop=0;else{var a=e.querySelector('[data-guide-section="'+t+'"]');e.scrollTop=a.offsetTop+60}}},created:function(){var t=this;Object(r.c)("Guide Page Nav"),y.$on("guide-content-sections-updated",(function(e){t.nav=e}))}}),document.querySelectorAll("[data-guide-content]").forEach((function(t){new n.a({el:t,components:{Grid:b},delimiters:["${","}"],data:function(){return{sections:[]}},computed:{},methods:{},mounted:function(){var t=this;Object(r.c)("Guide Content"),this.$el.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((function(e){var a=e.innerText,n=Object(r.d)(a.substr(0,40));e.setAttribute("data-guide-section",n);var i=3;"H1"===e.nodeName?i=1:"H2"===e.nodeName&&(i=2),t.sections.push({level:i,title:a,slug:n})})),this.sections.length>0&&y.$emit("guide-content-sections-updated",this.sections),window.lazy=new m({container:this.$el})},$nextTick:function(){}})}))},14:function(t,e,a){var n=a(26);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(37).default)("7622e594",n,!0,{})},25:function(t,e,a){"use strict";var n=a(14);a.n(n).a},26:function(t,e,a){var n=a(27);(t.exports=n(!1)).push([t.i,".c_grid{display:grid;grid-template-columns:1fr;grid-template-rows:auto;grid-gap:var(--grid-gap);margin:2.4rem 0}h1+.c_grid,h2+.c_grid,h3+.c_grid,h4+.c_grid,h5+.c_grid,h6+.c_grid{margin-top:0}.c_grid:last-child{margin-bottom:0}\n",""])}}]);