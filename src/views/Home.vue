<template>
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <form class="form">
   
      <Filter1></Filter1>
      <lang></lang>
      

    </form>
    <div class="home">
<<<<<<< HEAD
      <Map msg="Welcome to Your Vue.js App"/>
     
    </div>
    <Footer></Footer>
    
=======
      <Map />
    </div>
    <Footer1></Footer1>
>>>>>>> ae6b4c79c9ef5897f4655e7562e448cb94d1502b
  </div>
</template>

<script>
// @ is an alias to /src
import Map from '@/components/Map.vue';
import Filter1 from '../components/Filter.vue';
<<<<<<< HEAD
import Footer from '../components/Footer.vue';
import lang from '../components/lang.vue';
=======
import Footer1 from '../components/Footer.vue';
>>>>>>> ae6b4c79c9ef5897f4655e7562e448cb94d1502b

export default {
  name: 'Home',
  components: {
    Map,
    Filter1,
<<<<<<< HEAD
    Footer,
    lang
=======
    Footer1
>>>>>>> ae6b4c79c9ef5897f4655e7562e448cb94d1502b
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
