<template>
  <div>
    <GmapMap
      :center="{ lat: parseFloat(locationLat), lng: parseFloat(locationLng) }"
      ref="mapRef"
      :zoom="10"
      style="width: 100%; height: 300px"
    >
      <GmapMarker :position="{ lat: parseFloat(locationLat), lng: parseFloat(locationLng) }" @click="markerClicked()" />
      <GmapInfoWindow
        :options="infoOptions"
        :position="infoWindowPos"
        :opened="infoWinOpen"
        @closeclick="infoWinOpen = false"
        v-if="infoContent"
      >
        <div class="location__map__info__title">{{ infoContent.title }}</div>
        <div class="location__map__info__address" v-html="infoContent.address"></div>
        <div class="location__map__info__button" v-html="infoContent.button"></div>
      </GmapInfoWindow>
    </GmapMap>
  </div>
</template>

<script>
import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import { log } from '../global.js';
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB1q0cmh0wifO05hfUKb2tIExNvMMS2j6w',
  },
  installComponents: true,
});
export default {
  data() {
    return {
      location: false,
      infoContent: false,
      infoOptions: {
        pixelOffset: {
          width: -1,
          height: -29,
        },
      },
      infoWinOpen: false,
      infoWindowPos: {
        lat: 0,
        lng: 0,
      },
    };
  },
  props: {
    locationLat: { required: true },
    locationLng: { required: true },
    title: false,
    address: false,
    button: false,
  },
  created() {},
  methods: {
    markerClicked: function() {
      if (this.map) {
        const pos = { lat: parseFloat(this.locationLat), lng: parseFloat(this.locationLng) };
        // Show info window
        this.infoContent = { title: this.title, address: this.address, button: this.button };
        this.infoWindowPos = pos;
        this.infoWinOpen = true;
        // Center the map
        this.map.panTo(pos);
      }
    },
  },
  mounted() {
    this.$refs.mapRef.$mapPromise.then((map) => {
      this.map = map;
    });
    this.infoContent = { title: this.title, address: this.address, button: this.button };
    console.dir(this.infoContent);
  },
};
</script>
