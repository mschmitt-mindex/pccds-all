"use strict";var ready=function(t){if("function"==typeof t)return"complete"===document.readyState||"interactive"===document.readyState?t():void document.addEventListener("DOMContentLoaded",t,!1)},adminBarEditLinks=[];ready(function(){var t=void 0;function e(t,e){t.classList?t.classList.add(e):t.className+=" "+e}function r(t,e){for(var n=0,i=t.length;n<i;n++)if(t[n]===e)return!0;return!1}function n(t,e){for(var n=document.querySelectorAll(e),i=t.parentNode;i&&!r(n,i);)i=i.parentNode;return i}for(var i=0;i<adminBarEditLinks.length;i++){if((t=document.querySelectorAll('.editlink[data-id="'+i+'"]'))[0].innerHTML=adminBarEditLinks[i],t[0].hasAttribute("data-container")){var a=n(t[0],t[0].getAttribute("data-container"));null!==a&&e(a,"editlink__container")}e(t[0],"editlink--embedded")}});