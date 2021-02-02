//  APP
//  🏡 Custom Javascript used for UI and other functionality

import { log, warn, setupJsComponents, setupEnhancements } from './global.js';

// FAQs Accordion
function faqs() {
  if (!document.getElementsByClassName('c_faqs').length) {
    return false;
  }

  function addClass(el, klass) {
    el.classList.add(klass);
  }
  function removeClass(el, klass) {
    el.classList.remove(klass);
  }

  const accordionItems = document.querySelectorAll('.c_faqs_item');
  const accordionContentPanes = document.querySelectorAll('.c_faqs_answer');
  // Show first by default
  accordionItems[0].querySelector('.c_faqs_answer').classList.remove('hidden');
  // Hide each besides the targeted accordion on click
  accordionItems.forEach(function(accordion) {
    // Clicked accordions clickable target
    const accordionTitleRow = accordion.firstElementChild;
    accordionTitleRow.addEventListener('click', toggleAccordion);
  });
  function toggleAccordion(e) {
    accordionContentPanes.forEach(function(content) {
      // Check if clicked row matches the content's previous element sibling
      console.log(content);
      if (content.previousElementSibling === e.target) {
        removeClass(content, 'hidden');
        addClass(content.parentElement, 'active');
      } else {
        removeClass(content.parentElement, 'active');
        addClass(content, 'hidden');
      }
    });
  }
}

// CUSTOM FUNCTIONS
(function mainNav() {
  let menuButton = document.getElementById('main_menu_toggle');
  let menu = document.getElementById('primary-navigation');
  let body = document.querySelector('body');

  if (menuButton != undefined && menuButton && menu != undefined && menu) {
    menuButton.addEventListener('click', function() {
      if (menu.className == 'active') {
        menu.setAttribute('aria-expanded', false);
        menu.setAttribute('aria-hidden', false);
        menuButton.setAttribute('aria-expanded', false);
      } else {
        menu.setAttribute('aria-expanded', true);
        menu.setAttribute('aria-hidden', true);
        menuButton.setAttribute('aria-expanded', true);
      }

      body.classList.toggle('navbar-active');
      menu.classList.toggle('active');

      // this.parentNode.classList.toggle('menu-visible');
      // document.getElementById("primary-navigation").style.width = "100%";
    });
  }

  document.getElementById('primary-navigation').addEventListener('keydown', function(event) {
    if (event.keyCode == 27) {
      body.classList.toggle('navbar-active');
      menu.classList.toggle('active');

      menuButton.setAttribute('aria-expanded', 'false');

      menuButton.focus();
    }
  });
})();

var ctctFormAdded = false;
var observer = new MutationObserver(callback);
observer.observe(document.querySelector('div[data-form-id="21201926-c0ee-4924-b749-1dcdbb528bd8"]'), {
  childList: true,
  subtree: true,
});

function callback() {
  ctctFormAdded = true;
  document.getElementById('email_address_0').addEventListener('focus', function() {
    document.querySelector('div[data-form-id="21201926-c0ee-4924-b749-1dcdbb528bd8"]').classList.add('form-focused');
  });
}

// stop watching using:
if (ctctFormAdded) {
  observer.disconnect();
}

// INIT FUNCTIONS
log('Home');

setupJsComponents();
setupEnhancements();
faqs();

loadJS('//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js');
