<template>
  <div class="inner_wrapper c_swiper" v-cloak>
    <div :class="this.classes != false ? this.classes : false">
      <slot name="slides"></slot>
      <slot name="navigation"></slot>
      <slot name="previous"></slot>
      <slot name="next"></slot>
      <slot name="pagination"></slot>
      <slot name="flower"></slot>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';

export default {
  data() {
    return {
      swiper: false,
      loaded: false,
    };
  },
  props: {
    classes: { type: String, required: true, default: false },
    container: { type: String, required: true, default: false },
    options: { type: Object, required: true, default: false },
  },
  mounted() {
    this.$nextTick(function() {
      if (this.container != false && this.options != false && Object.keys(this.options).length) {
        this.swiper = new Swiper(this.container, this.options);
        if (this.swiper.$el[0] != undefined) {
          this.loaded = true;
        }
      }
    });
  },
};
</script>
