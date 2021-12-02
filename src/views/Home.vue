<template>
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <lang style="float: right; margin: 10px"></lang>
    <div class="container">
      <Information style="float: left;"></Information>
    </div>
    <div class="home">
      <Map msg="Welcome to Your Vue.js App"/>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Information from '../components/Information.vue';
import Map from '@/components/Map.vue';
import Footer from '@/components/Footer.vue';
import lang from '@/components/lang.vue';

export default {
  name: 'Home',
  components: {
    Information,
    Map,
    Footer,
    lang
}
}
</script>

<style scoped>

.container {
  display: inline-flex;
}
.home {
  display: flex;
  justify-content: center;
  background: rgb(235, 235, 235);
  padding-bottom:3.49vh;
}

.form {
  display: inline-flex;
  width: 100vw;
  padding: 3vh;
  background: rgb(235, 235, 235);;
}
</style>
