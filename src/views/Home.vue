<template>
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <form class="form">
   
      <Filter1></Filter1>

    </form>
    <div class="home">
      <Map msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Map from '@/components/Map.vue';
import Filter1 from '../components/Filter.vue';

export default {
  name: 'Home',
  components: {
    Map,
    Filter1
}
}
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
}

.form {
  margin: 5vh;
}
</style>
