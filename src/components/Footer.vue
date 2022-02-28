<template>
  <div >
    <v-bottom-navigation height="100px">
      <footer  style="border-top: 6px solid #1678ca; width:100% ; height:130px">
        
        <v-toolbar style="background-color: #343a40 !important; box-shadow: none ;height: 130px; ">
          <v-col   style="margin-top:100px">
          <v-row>
          <v-toolbar-title style="color: white ;">
            <!-- <router-link to="/" tag="span" style="cursor: pointer; font-size:15px">WebPillar</router-link> -->
          </v-toolbar-title>
          </v-row>
          <v-row style="min-height:100px">
            
          <v-toolbar-items>
            <v-col style="max-width:150px">
            <v-img width="130px" src="./../assets/usaiden.png"></v-img>
            </v-col>
            <v-col style="color:white; font-size:15px"> 
              This web site content was prepared by Foundation Metamorphosis with the support of the American people through the United States Agency for International Development (USAID).  The authors views expressed in this website do not necessarily reflect the views of the United States Agency for International Development or the United States Government.
            </v-col>
            </v-toolbar-items>
          </v-row>
          </v-col>
        </v-toolbar>
  
        
      </footer>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>