<template>
  <div class="c_alert_bar_message_container c_mod_color--white" v-cloak v-if="!alertBarVisited && alertBarIsVisible">
    <div>
      <slot></slot>
    </div>
    <button
      class="c_button c_button--small c_button--white_to_blue c_alert_bar_message__dismiss"
      v-show="alertBarIsVisible"
      v-cloak
      @click="dismissAlert"
      aria-label="Close alert message"
    >
      <span class="c_alert_bar_message__dismiss_icon">X</span>
    </button>
  </div>
</template>

<script>
import Cookies from 'js-cookie';
import { log, classToggle, hasClass, removeClass, addClass } from '../global.js';

export default {
  data() {
    return {
      cookieId: false,
      alertBarVisited: false,
      alertBarIsVisible: false,
    };
  },
  props: {
    selectorId: String,
    contentId: String,
    summary: String,
  },
  methods: {
    dismissAlert: function() {
      Cookies.set(this.cookieId, 'hidden', { expires: 7 });
      this.alertBarVisited = true;
    },
    toggleVisible: function() {
      this.alertBarIsVisible = !this.alertBarIsVisible;
    },
    classToggle: function(selector, getClass) {
      let query = document.querySelectorAll(selector);
      query.forEach((el) => {
        if (hasClass(el, getClass)) {
          removeClass(el, getClass);
        } else {
          addClass(el, getClass);
        }
      });
    },
  },
  mounted() {
    this.alertBarIsVisible = this.$slots.default;
    this.cookieId = this.selectorId;
    if (Cookies.get(this.cookieId)) {
      this.alertBarVisited = true;
    }
  },
};
</script>
