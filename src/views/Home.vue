<template>
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <form class="form">
   
      <Filter1></Filter1>

    </form>
    <div class="home">
      <Map />
    </div>
    <Footer1></Footer1>
  </div>
</template>

<script>
// @ is an alias to /src
import Map from '@/components/Map.vue';
import Filter1 from '../components/Filter.vue';
import Footer1 from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Map,
    Filter1,
    Footer1
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
