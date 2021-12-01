<template>
  <l-map class="map-container-custom" :zoom="zoom" :center="center">
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <l-marker v-for="school in schools" :key="`school_${school.id}`" :lat-lng="[school.latitude, school.longitude]"></l-marker>
  </l-map>
</template>

<script>
import {LMap, LTileLayer, LMarker} from 'vue2-leaflet';
import { schools } from './../data/schools_v2'

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 10,
      center: [41.9981, 21.4254],
      schools: schools.filter(s => Boolean(s.latitude) && Boolean(s.longitude)),
    };
  }
}
</script>

<style scoped>
.map-container-custom {
  height: 80vh;
  width: 95vw;
}
</style>