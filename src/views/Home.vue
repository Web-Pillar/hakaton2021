<template>

  <div >
    <header>
       <Information></Information>
    </header>
    <section>
  <nav>
    <Filter1></Filter1>
  </nav>
  
  <article>
   <Map/>
  </article>
</section>

<footer>
  <Footer></Footer>
</footer>
    <!-- <div id="item1">
      <Filter1></Filter1>
    </div>
   
    <div id="item2">
      <Information></Information>
      
       <lang></lang>
       
   
      
      

      <Map msg="Welcome to Your Vue.js App"/>
   
   <Footer></Footer>
    
    </div>
     -->
  </div>


    

</template>

<script>
// @ is an alias to /src
import Information from '../components/Information.vue';
import Map from '@/components/Map.vue';
import Filter1 from '../components/Filter.vue';
import Footer from '../components/Footer.vue';
// import lang from '../components/lang.vue';

export default {
  name: 'Home',
  components: {
     Information,
     Map,
     Filter1,
     Footer,
    // lang
}
}
</script>

<style scoped>
  
  *{
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

/* Style the header */
header {
  background-color:#f1f1f1 ;
  padding: 30px;
  text-align: center;
  font-size: 35px;
  color: white;
}

/* Create two columns/boxes that floats next to each other */
nav {
  float: left;
  width: 20%;
  height:100vh; /* only for demonstration, should be removed */
  background: #ccc;
  padding: 20px;
}

/* Style the list inside the menu */
nav ul {
  list-style-type: none;
  padding: 0;
}

article {
  float: left;
  padding: 20px;
  width: 80%;
  background-color: #f1f1f1;
  height: 100vh; /* only for demonstration, should be removed */
}

/* Clear floats after the columns */
section::after {
  content: "";
  display: table;
  clear: both;
}

/* Style the footer */
footer {
  background-color: #f1f1f1;
  padding: 10px;
  text-align: center;
  color: white;
}

/* Responsive layout - makes the two columns/boxes stack on top of each other instead of next to each other, on small screens */
@media (max-width: 600px) {
  nav, article {
    width: 100%;
    height: auto;
  }
}

</style>
