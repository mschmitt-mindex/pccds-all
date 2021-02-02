<template>
  <div class="vue_accordion">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return { tabs: [] };
  },
  created() {
    this.tabs = this.$children;

    VueEvent.$on('tab-selected', (tab, id) => this.selectTab(tab, id));
  },
  props: {
    id: false,
  },
  methods: {
    selectTab(selectedTabTitle, id) {
      if (this.id == id) {
        this.tabs.forEach((tab) => {
          tab.isActive = tab.title === selectedTabTitle;
          let accordionButton = tab.$el.getElementsByTagName('button')[0];
          if (tab.title === selectedTabTitle) {
            accordionButton.setAttribute('aria-expanded', 'true');
            accordionButton.parentNode.scrollIntoView(true);
          } else {
            accordionButton.setAttribute('aria-expanded', 'false');
          }
        });
      }
    },
  },
};
</script>
