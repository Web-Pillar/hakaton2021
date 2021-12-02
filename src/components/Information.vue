<template>
    
    <header>
        
        <div class="information">
           
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <i class= "glyphicon glyphicon-info-sign"></i>
<h2>Добредојдовте во „Web Pillar“!  <lang style="display:inline-block;"></lang></h2>   
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolor saepe numquam, quia consequatur, ipsam velit, vel placeat aspernatur porro ullam nam deleniti repudiandae voluptates fuga? Impedit maiores facilis quisquam!</p>  
</div>
</header>

</template>

<style >

.information {
    color: #00529b;
    background-color: #bde5f8;
    margin: 10px 0px;
    padding:15px 10px;
   
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    border-radius: 25px;
    
 
}
header {
  background-color:#f1f1f1 ;
  padding: 30px;
  text-align: center;
  font-size: 35px;
  border: solid;
  border-bottom: none;
}
 .glyphicon.glyphicon-info-sign {
       font-size: 35px;
     }
</style>

<script>
 import lang from './lang.vue';
export default {
    components:{
        lang,
    }

}
</script>