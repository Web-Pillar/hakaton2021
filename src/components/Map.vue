<template>

    <section>
    <nav>
    <Filter1 @filtered="filtering" :schools="schools"></Filter1></nav>
    <article>
    <l-map class="map-container-custom" :zoom="zoom" :center="center">
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <v-marker-cluster>
      <l-marker v-for="school in schoolsInMap" :key="`school_${school.id}`" :lat-lng="[school.latitude, school.longitude]">
        <l-popup>
            <div>
              <p><b>Name</b> : {{school.schoolName}}</p>
              <p><b>Email</b> : {{school.email}}</p>
              <p><b>Rating</b> : Unknown</p>
              <p><b>Finance</b> : Unknown</p>
              <button>Details</button>
            </div>
          </l-popup>
          <l-tooltip>
              <h3>{{school.schoolName}}</h3>
          </l-tooltip>
      </l-marker>
    </v-marker-cluster>
  </l-map>
  </article>
   </section>
 
</template>

<script>
import Filter1 from '@/components/Filter.vue';
import {LMap, LTileLayer,LPopup, LMarker, LTooltip} from 'vue2-leaflet';
import Vue2LeafletMarkerCluster from "vue2-leaflet-markercluster";
import { schools } from './../data/schools_v2';
const categories = ['univerzitet', 'sredno', 'osniovno'];

export default {
  components: {
    Filter1,
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip,
    "v-marker-cluster": Vue2LeafletMarkerCluster,
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 9,
      center: [41.608635, 21.745275],
      schools: schools
        .filter(s => Boolean(s.latitude) && Boolean(s.longitude))
        .map(s => {
          return {
            ...s,
            category: categories[Math.floor(Math.random() * categories.length)],
            rating: Math.floor(Math.random() * 5) + 1,
          }
        }),
      municipality: 'all',
      category: 'all',
      rating: 'all',
    };
  },
  computed: {
    schoolsInMap() {
      return this.schools.filter(s => {
        return (this.municipality === 'all' || s.municipality === this.municipality) &&
        (this.category === 'all' || s.category === this.category) &&
        (this.rating === 'all' || s.rating >= this.rating)
      })
    }
  },
  methods: {
    innerClick() {
      alert("Click!");
    },
    filtering(val) {
      const { municipality, category, rating } = val;
      this.municipality = municipality;
      this.category = category;
      this.rating = rating;
    }
  },
}
</script>

<style scoped>
@import "~leaflet.markercluster/dist/MarkerCluster.css";
@import "~leaflet.markercluster/dist/MarkerCluster.Default.css";
.map-container-custom {
  height: 100%;
  width: 100%;
}
 *{
  box-sizing: border-box;
}

nav {
  float: left;
  width: 20%;
  height:100vh; /* only for demonstration, should be removed */
  background: #f1f1f1;
  padding: 20px;
  border: solid;
  border-right:none;
}

article {
  float: left;
  padding: 20px;
  width: 80%;
  border: solid;
  background-color: #f1f1f1;
  height: 100vh; /* only for demonstration, should be removed */
}

</style>