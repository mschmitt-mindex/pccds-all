"use strict";!function(){var e="https://www.google.com/recaptcha/api.js?render={siteKey}",r="{formAnchor}",t=document.querySelector('form[data-id="'.concat(r,'"]'));if(!t)return void console.error('reCAPTCHA could not find form by ID "'.concat(r,'"'));if(!t.freeform)return void console.error("Form is not a Freeform form");var o=!1;if(t.freeform.addOnSubmitCallback(function(){return o?(o=!1,!0):void grecaptcha.ready(function(){grecaptcha.execute("{siteKey}",{action:"{action}"}).then(function(e){for(var r=document.querySelectorAll('*[name="g-recaptcha-response"]'),c=0;c<r.length;c++)r[c].value=e;o=!0;var n=document.querySelectorAll('*[id="form-input-payment_card_number"]');0==n.length&&t.freeform.triggerSubmit()})})}),!Freeform.recaptchaV3Script){var c=document.createElement("script");c.src=e,c.async=!0,c.defer=!0,document.body.appendChild(c),Freeform.recaptchaV3Script=c}}();