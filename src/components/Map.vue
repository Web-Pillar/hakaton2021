<template>
  <v-row no-gutters>
    <v-col cols="12" sm="12" md="7">
      <l-map
        class="map-container-custom"
        style="border-radius: 0;z-index: 0"
        :zoom="zoom"
        :center="center"
      >
        <div v-if="showRadius">
          <l-circle
            v-for="school in schoolsInMap"
            :key="`school_radius_${school.id}`"
            :lat-lng="[school.latitude, school.longitude]"
            :radius="500"
            color="red"
          />
        </div>
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <v-marker-cluster v-if="schoolsInMap.length > 0">
          <l-marker
            v-for="school in schoolsInMap"
            :key="`school_${school.id}`"
            :lat-lng="[school.latitude, school.longitude]"
          >
            <l-icon
              :icon-size="[60, 90]"
              :icon-anchor="iconAnchor"
              :icon-url="getMarkerIcon(school)"
            ></l-icon>
            <l-popup>
              <div>
                <p>
                  <b>{{ $t("nameofschool") }}</b>
                  : {{ translate(school.name) }}
                </p>
                <p>
                  <b>{{ $t("email") }}</b>
                  : {{ school.email }}
                </p>
                  <v-rating
                    color="yellow darken-3"
                    background-color="grey darken-1"
                    small
                    readonly
                    :value="school.rating"
                  ></v-rating>
                <v-container>
                  <v-switch
                    :label="$t('compare')"
                    inset
                    :input-value="compareIds.includes(school.id)"
                    @change="selectCompare(school.id)"
                  ></v-switch>

                  <v-btn
                    style="margin: 10px"
                    @click="$router.push(`/details/${school.id}`)"
                    >{{ $t("details") }}</v-btn
                  >

                  <v-btn @click="$router.push('/compare')">{{
                    $t("compare")
                  }}</v-btn>
                </v-container>
              </div>
            </l-popup>
            <l-tooltip>
              <h3>{{ translate(school.name) }}</h3>
            </l-tooltip>
          </l-marker>

          <l-marker
            v-for="(casino, index) in casinos"
            :key="`casino_${index}`"
            :lat-lng="[casino.latitude, casino.longitude]"
          >
            <l-icon
              :icon-size="iconSize"
              :icon-anchor="iconAnchor"
              :icon-url="casinoIcon"
            ></l-icon>
          </l-marker>
        </v-marker-cluster>
        <l-control position="topleft">
          <v-btn @click="showRadius = !showRadius" x-small fab elevation="1">
            <v-icon>mdi-circle</v-icon>
          </v-btn>
        </l-control>
      </l-map>
    </v-col>
    <v-col class="d-none d-sm-block" cols="12" sm="12" md="5">
      <v-row>
        <Filter1 @filtered="filtering" :schools="schools"></Filter1>
      </v-row>
      <v-row>
        <v-simple-table
          fixed-header
          style="border-radius: 0"
          height="68vh"
          white
        >
          <thead>
            <tr>
              <th class="text-left">{{ $t("nameofschool") }}</th>
              <th class="text-left">{{ $t("municipality") }}</th>
              <th class="text-left">{{ $t("details") }}</th>
              <th class="text-left">{{ $t("compare") }}</th>
            </tr>
          </thead>
          <tbody v-if="schoolsInMap.length > 0">
            <tr v-for="school in schoolsInMap" :key="`school_${school.id}`">
              <td>{{ translate(school.name) }}</td>
              <td>{{ translate(school.municipality) }}</td>
              <td>
                <v-btn @click="$router.push(`/details/${school.id}`)">{{
                  $t("details")
                }}</v-btn>
              </td>
              <td>
                <v-switch
                  inset
                  :input-value="compareIds.includes(school.id)"
                  @change="selectCompare(school.id)"
                ></v-switch>
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import Filter1 from "@/components/Filter.vue";
import {
  LMap,
  LTileLayer,
  LPopup,
  LMarker,
  LTooltip,
  LIcon,
  LCircle,
  LControl,
} from "vue2-leaflet";
import Vue2LeafletMarkerCluster from "vue2-leaflet-markercluster";
import casinoIcon from "@/assets/dices.svg";
import { mapActions, mapState } from "vuex";
import red_elementary from '../assets/school_icons/red_middleschool.svg';
import yellow_elementary from '../assets/school_icons/yellow_middleschool.svg';
import green_elementary from '../assets/school_icons/green_middleschool.svg';
import red_middleschool from '../assets/school_icons/red_highschool.svg';
import yellow_middleschool from '../assets/school_icons/yellow_highschool.svg';
import green_middleschool from '../assets/school_icons/green_highschool.svg';
import { transliterate } from '../utils/transliterate'

export default {
  components: {
    Filter1,
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip,
    LIcon,
    LCircle,
    LControl,
    "v-marker-cluster": Vue2LeafletMarkerCluster,
  },
  data() {
    return {
      showRadius: false,
      casinoIcon: casinoIcon,
      iconSize: [30, 50],
      iconAnchor: [16, 45],
      icons: {
        red_elementary,
        yellow_elementary,
        green_elementary,
        red_middleschool,
        yellow_middleschool,
        green_middleschool,
      },
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 7,
      center: [41.608635, 21.745275],
      municipality: "all",
      category: "all",
      rating: "all",
    };
  },
  computed: {
    schoolsInMap() {
      return this.schools.filter((s) => {
        return (
          (this.municipality === "all" ||
            s.municipality === this.municipality) &&
          (this.category === "all" || s.category === this.category) &&
          (this.rating === "all" || s.rating >= this.rating)
        );
      });
    },
    ...mapState({
      compareIds: (state) => state.compareIds,
      schools: (state) => state.schoolModule.schools,
      casinos: (state) => state.casinoModule.casinos,
    }),
  },
  methods: {
    ...mapActions(['addCompare', 'getSchools', 'getCasinos']),
    translate(string) {
      return transliterate(string, this.$i18n.locale);
    },
    innerClick() {
      alert("Click!");
    },
    filtering(val) {
      const { municipality, category, rating } = val;
      this.municipality = municipality;
      this.category = category;
      this.rating = rating;
    },
    selectCompare(schoolId) {
      this.addCompare(schoolId);
    },
    getMarkerIcon(school) {
      let color;
      if (school.rating < 2.5) {
        color = 'red';
      } else if (school.rating > 3.5) {
        color = 'green';
      } else {
        color = 'yellow';
      }

      return this.icons[`${color}_${school.type}`];
    },
  },
  mounted() {
    if (this.schools.length === 0) {
      Promise.all([
        this.getSchools(),
        this.getCasinos(),
      ]);
    }
  }
};
</script>

<style scoped>
@import "~leaflet.markercluster/dist/MarkerCluster.css";
@import "~leaflet.markercluster/dist/MarkerCluster.Default.css";
.map-container-custom {
  min-height: 80vh;
  height: 100%;
}
@media only screen and (max-width: 600px) {
  .map-container-custom {
    min-height: 60vh;
    height: 100%;
  }
}
</style>