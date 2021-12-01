<template>
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <form class="form">
      <label for="filter">Filter</label>
      <input type="text" name="filter" id="filter" placeholder="Filter">
    </form>
    <div class="home">
      <Map msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Map from '@/components/Map.vue'

export default {
  name: 'Home',
  components: {
    Map
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
