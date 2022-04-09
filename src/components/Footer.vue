<template>
  <footer style="border-top: 6px solid #1678ca; width: 100%">
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
    <div class="data_source">
      <span class="ml-4 mr-2">{{ $t('data_source') }}:</span>
      <a class="mr-2" target="_blank" rel="noopener noreferrer" href="http://data.gov.mk/mk/dataset/pernctap-ha-ochobhn-yhnjinwta">data.gov.mk</a>
      <a class="mr-2" target="_blank" rel="noopener noreferrer" href="https://open.finance.gov.mk/mk/home">open.finance.gov.mk</a>
      <a class="mr-2" target="_blank" rel="noopener noreferrer" href="https://uslugi.gov.mk/">uslugi.gov.mk</a>
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

  .data_source{
    color: #9ca3a9;
    background-color: #343a40;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: .875rem;
  }
</style>