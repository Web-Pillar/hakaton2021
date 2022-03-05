<template>
  <v-app>
    <v-main>
      <Inspop></Inspop>
      <Information></Information>
      <router-view/>
      <Footer></Footer>
    </v-main>
  </v-app>
</template>

<script>
import Inspop from "./components/Inspop.vue";
import Footer from "./components/Footer.vue";
import Information from "./components/Information.vue";

export default {
  name: 'App',
  metaInfo: {
    title: 'Home',
    titleTemplate: '%s | MetaSchools'
  },
  components:{
      Inspop, Footer,Information,
  },

  data: () => ({
    //
  }),
};
</script>
