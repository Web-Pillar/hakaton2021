<template>
  <l-map class="map-container-custom" :zoom="zoom" :center="center">
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <v-marker-cluster>
      <l-marker v-for="school in schools" :key="`school_${school.id}`" :lat-lng="[school.latitude, school.longitude]">
        <l-popup>
            <div>
              <p>
              <b>Name</b> : {{school.schoolName}}</p>
              <p><b>Email</b> : {{school.email}}</p>
              <p><b>Rating</b> : Unknown</p>
              <p><b>Finance</b> : Unknown</p>
              <button>Details</button>
            </div>
          </l-popup>
      </l-marker>
    </v-marker-cluster>
    
  </l-map>
</template>

<script>
import {LMap, LTileLayer,LPopup, LMarker} from 'vue2-leaflet';
import Vue2LeafletMarkerCluster from "vue2-leaflet-markercluster";
import { schools } from './../data/schools_v2'

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    "v-marker-cluster": Vue2LeafletMarkerCluster,
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 9,
      center: [41.9981, 21.4254],
      schools: schools.filter(s => Boolean(s.latitude) && Boolean(s.longitude)),
    };
  },
  methods: {
    innerClick() {
      alert("Click!");
    }
  },
}
</script>

<style scoped>
@import "~leaflet.markercluster/dist/MarkerCluster.css";
@import "~leaflet.markercluster/dist/MarkerCluster.Default.css";
.map-container-custom {
  height: 80vh;
  width: 95vw;
}
</style>