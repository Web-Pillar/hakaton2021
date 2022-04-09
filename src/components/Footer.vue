<template>
  <footer style="border-top: 6px solid #1678ca; width: 100%">
    <!-- <v-toolbar style="background-color: #343a40 !important; box-shadow: none ;height: 500px; ">
          <v-row rows="20" sm="1" md="20" style="min-height:100px">
          <v-toolbar-items>
            <v-col style="max-width:150px">
            <v-img width="130px" src="./../assets/usaiden.png"></v-img>
            </v-col>
            <v-col style="color:white; font-size:15px"> 
              <p>{{$t("descriptione")}}</p>
            </v-col>
            </v-toolbar-items>
          </v-row>
        </v-toolbar> -->

    <div class=" lighten-5" style="background-color:white !important">
      <v-row align="center" no-gutters style="min-height: 140px">
        <v-col cols="12" sm="4" md="3" style="">
          <v-img class="image" width="150px" :src="logo"></v-img>
        </v-col>
        <v-col cols="12" sm="8" md="9" style="color: black; font-size:13px">
          <p style="padding: 0 5vw;">{{ $t("descriptione") }}</p>
        </v-col>
      </v-row>
    </div>
  </footer>
</template>

<script>
import logo_en from '../assets/usaid/en.png';
import logo_mk from '../assets/usaid/mk.png';
import logo_al from '../assets/usaid/al.png';

export default {
  data: () => ({
    logos: {
      mk: logo_mk,
      en: logo_en,
      sq: logo_al,
    },
  }),
  computed: {
    logo() {
      return this.logos[this.$i18n.locale]
    }
  }
};
</script>

<style scoped>
  .image {
    background-color: white;
    margin-left: 25%
  }
</style>