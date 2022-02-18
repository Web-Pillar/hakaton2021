<template>
  <v-app>
    <v-main>
      <Information></Information>
      <router-view/>
      <Footer></Footer>
    </v-main>
  </v-app>
</template>

<script>
import Footer from "./components/Footer.vue";
import Information from "./components/Information.vue";

export default {
  name: 'App',
  metaInfo: {
    title: 'Home',
    titleTemplate: '%s | MetaSchools'
  },
  components:{
    Footer,Information,
  },

  data: () => ({
    //
  }),
};
</script>
