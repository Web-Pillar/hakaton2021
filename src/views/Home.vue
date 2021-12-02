<template>
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <form class="form">
   
      <Filter1></Filter1>
      <lang></lang>
      

    </form>
    <div class="home">
      <Map msg="Welcome to Your Vue.js App"/>
     
    </div>
    <Footer></Footer>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Map from '@/components/Map.vue';
import Filter1 from '../components/Filter.vue';
import Footer from '../components/Footer.vue';
import lang from '../components/lang.vue';

export default {
  name: 'Home',
  components: {
    Map,
    Filter1,
    Footer,
    lang
}
}
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  background: rgb(235, 235, 235);
  padding-bottom:3.49vh;
}

.form {
  padding: 3vh;
  background: rgb(235, 235, 235);;
}
</style>
