<template>
  <div class="vue_accordion__tab" :class="{ active: isActive }">
    <div class="vue_accordion__tab__title" @click="onTabSelected">
      <slot name="tab_title"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import * as g from './../global.js';

export default {
  data() {
    return { isActive: false };
  },
  mounted() {
    this.isActive = this.selected;
  },
  props: {
    title: false,
    selected: { default: false },
    id: false,
  },
  methods: {
    onTabSelected() {
      if (!this.isActive) {
        VueEvent.$emit('tab-selected', this.title, this.id);
        g.gaTrack('accordion', 'clicked', this.title);
      } else {
        this.isActive = false;
        this.$el.getElementsByTagName('button')[0].setAttribute('aria-expanded', false);
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import './../../_scss/base/_mixins.scss';
</style>
