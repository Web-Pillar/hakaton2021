<template>
  <v-app>
    <v-main>
      <Inspop v-if="tutorial" :dialog="tutorial" @completed="completedTutorial"></Inspop>
      <Information></Information>
      <router-view v-if="!tutorial" />
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
  components: {
    Inspop, Footer, Information,
  },

  data: () => ({
    tutorial: false,
  }),
  methods: {
    completedTutorial() {
      localStorage.setItem('tutorial', true);
      this.tutorial = false;
    }
  },
  created() {
    const notFirstTime = localStorage.getItem('tutorial') === 'true';
    if (!notFirstTime) {
      this.tutorial = true;
    }
  }
};
</script>
