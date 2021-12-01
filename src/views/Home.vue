<template>
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <form class="form">
   
      <Filter1></Filter1>

    </form>
    <div class="home">
      <Map />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Map from '@/components/Map.vue';
import Filter1 from '../components/Filter.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Map,
    Filter1,
    Footer
}
}
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  background: gray;
  padding-bottom:3.49vh;
}

.form {
  padding: 3vh;
  background: gray;
}
</style>
