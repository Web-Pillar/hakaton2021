<template>


   <footer class="footer1">

        <div
          class="image1">
          <img src="@/assets/usaid1.png" style="width:600px;height:350px;margin-bottom:42px;">
          <img src="@/assets/meta.svg"   style="width:600px;height:400px;margin-bottom:42px;">
          <img src="@/assets/Logo.png" style="width:500px;height:300px; padding-left:42px; margin-bottom:42px;">


        </div>
        <div class="list">
            <ul class="list1">
              <li>
                <li><a href="#">Home</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Contacts</a></li>
                <li><a href="#">About us</a></li>
              
            </ul>


        </div>

      
    </footer>

</template>

<script>
export default {

}
</script>

<style>

 .footer1{
  
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  


 }
.image1{
   
   align-items: center;
}
 .list1{
     width: 100px;
     font-weight: bold;
     display: block;
     padding-top: 2rem;
     padding-left:6rem;
     list-style-type: none;
    
     
 }
 .list1 a{
     text-decoration: none;
     color: black;
     font-size: 1.5em;
     
     

 } 


</style>