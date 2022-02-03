<template>
  <div>
    <Information></Information>
    <Map />
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Information from "../components/Information.vue";
import Map from "@/components/Map.vue";
// import Filter1 from '../components/Filter.vue';
import Footer from "../components/Footer.vue";
// import lang from '../components/lang.vue';

export default {
  name: "",
  components: {
    Information,
    Map,
    //  Filter1,
    Footer,
    // lang
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

/* Style the header */

/* Create two columns/boxes that floats next to each other */

/* Style the list inside the menu */
nav ul {
  list-style-type: none;
  padding: 0;
}

/* Clear floats after the columns */

/* Style the footer */

/* Responsive layout - makes the two columns/boxes stack on top of each other instead of next to each other, on small screens */
</style>
