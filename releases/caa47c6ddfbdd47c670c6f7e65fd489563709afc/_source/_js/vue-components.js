//  VUE COMPONENTS
//  🌄 Vue components and methods to manage state in the UI and on the page

import { gaTrack, log, warn } from './global.js';
import Vue from 'vue';

// VARIABLES
let vueData = {};
let vueMethods = {};
window.VueEvent = new Vue();

// ROOT VARIABLES AND FUNCTIONS
// Alert bar
vueData['alertBarIsVisible'] = false;
vueMethods['toggleAlertBar'] = function() {
  this.alertBarIsVisible = !this.alertBarIsVisible;
};

// Detect resize
vueData['windowWidth'] = false;
vueData['windowHeight'] = false;
vueMethods['resizeHandler'] = function() {
  this.windowWidth = window.innerWidth;
  this.windowHeight = window.innerHeight;

  VueEvent.$emit('window-resized', this.windowWidth, this.windowHeight);
};

// Detect scroll
vueData['scrollY'] = false;
vueMethods['scrollHandler'] = function() {
  this.scrollY = window.scrollY;
};

// Display overlay
vueData['overlayIsVisible'] = false;
vueMethods['showOverlay'] = function(overlayTitle) {
  VueEvent.$emit('show-overlay', overlayTitle);
  this.overlayIsVisible = true;
  gaTrack('overlay', 'shown', overlayTitle);
};

// Lazy load Vue components
Vue.component('accordion', function(resolve) {
  require(['./components/Accordion.vue'], resolve);
});
Vue.component('accordion-tab', function(resolve) {
  require(['./components/AccordionTab.vue'], resolve);
});
Vue.component('alert-bar', function(resolve) {
  require(['./components/AlertBar.vue'], resolve);
});
Vue.component('overlay', function(resolve) {
  require(['./components/Overlay.vue'], resolve);
});
Vue.component('slider', function(resolve) {
  require(['./components/Slider.vue'], resolve);
});
Vue.component('slider-control', function(resolve) {
  require(['./components/SliderControl.vue'], resolve);
});
Vue.component('slider-slide', function(resolve) {
  require(['./components/SliderSlide.vue'], resolve);
});
Vue.component('swiper', function(resolve) {
  require(['./components/Swiper.vue'], resolve);
});
Vue.component('validated-form', function(resolve) {
  require(['./components/ValidatedForm.vue'], resolve);
});
Vue.component('validated-form-input', function(resolve) {
  require(['./components/ValidatedFormInput.vue'], resolve);
});
Vue.component('location-map', function(resolve) {
  require(['./components/LocationMap.vue'], resolve);
});
Vue.component('regional-contacts', function(resolve) {
  require(['./components/RegionalContacts.vue'], resolve);
});

// VUE INSTANCE
if (document.getElementById('page').getAttribute('data-vue') != 'false') {
  new Vue({
    el: '#page',
    data: vueData,
    created: function() {
      // Hide overlay and remove content
      VueEvent.$on('hide-overlay', () => (this.isActive = this.overlayIsVisible = false));

      // Watch resize
      window.addEventListener('resize', this.resizeHandler);

      // Watch scroll
      window.addEventListener('scroll', this.scrollHandler);
    },
    methods: vueMethods,
    mounted: function() {
      VueEvent.$emit('window-resized');
    },
    delimiters: ['${', '}'],
  });
}

// INIT FUNCTIONS
log('Vue Components');
