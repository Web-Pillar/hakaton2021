<template>
  <div>
    <div v-for="school in schools" :key="school">
      <v-col class="shrink" v-if="school.id == $route.params.school">
        <v-card class="elevation-16 mx-auto" width="300">
          <v-card-title class="text-h5"> {{ school.schoolName }}</v-card-title>
          <v-card-text>
              <h1>{{school.address}}</h1>
            <div class="text-center mt-12">
              <v-rating
                v-model="rating"
                color="yellow darken-3"
                background-color="grey darken-1"
                empty-icon="$ratingFull"
                half-increments
                hover
                large
              ></v-rating>
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions class="justify-space-between">
            <v-btn text @click="$router.go(-1)"> No Thanks </v-btn>
            <v-btn color="primary" text> Rate Now </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </div>
  </div>
</template>

<script>
import { schools } from "./../data/schools_v2";

export default {
  data() {
    return {
      schools: schools,
    };
  },
};
</script>