<template>
  <footer style="border-top: 6px solid #1678ca; width: 100%">
    <!-- <v-toolbar style="background-color: #343a40 !important; box-shadow: none ;height: 500px; ">
          <v-row rows="20" sm="1" md="20" style="min-height:100px">
          <v-toolbar-items>
            <v-col style="max-width:150px">
            <v-img width="130px" src="./../assets/usaiden.png"></v-img>
            </v-col>
            <v-col style="color:white; font-size:15px"> 
              <p>{{$t("descriptione")}}</p>
            </v-col>
            </v-toolbar-items>
          </v-row>
      
        </v-toolbar> -->

    <div class="grey lighten-5" style="background-color: #343a40 !important">
      <v-row align="center" no-gutters style="min-height: 140px">
        <v-col cols="12" sm="8" md="2" style="">
          <v-img style="margin-left:25%" width="130px" src="./../assets/usaiden.png"></v-img>
        </v-col>
        <v-col cols="12" sm="8" md="" style="color: white; font-size:13px">
          <p style="padding-left:20px ; padding-right:20px">{{ $t("descriptione") }}</p>
        </v-col>
      </v-row>
    </div>
  </footer>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style>
</style>