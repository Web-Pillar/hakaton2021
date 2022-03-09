<template>
  <div>
    <v-toolbar style="height:50px">
      <v-tabs style="height:20px ;" v-model="tab" centered slider-color="yellow">
        <v-tab key="info">School Details</v-tab>
        <v-tab key="survey">Survey</v-tab>
      </v-tabs>
    </v-toolbar>

    <div v-if="selectedSchool" class="mx-14 my-8">
      <v-col class="shrink">
        <v-card-title class="text-h5">
          {{ selectedSchool.name }}
          <v-spacer></v-spacer>
          <v-rating
            v-model="selectedSchool.rating"
            color="yellow darken-3"
            background-color="grey darken-1"
            empty-icon="$ratingFull"
            half-increments
            hover
            large
          ></v-rating>
        </v-card-title>
        <v-card-text>
          <h1>{{ selectedSchool.address }}</h1>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="justify-space-between">
          <v-btn text @click="$router.go(-1)">No Thanks</v-btn>
          <v-btn @click="submitRating" color="primary" text>Rate Now</v-btn>
        </v-card-actions>
      </v-col>
    </div>

    <v-tabs-items v-if="selectedSchool" v-model="tab">
      <v-tab-item key="info">
        <v-card text>
          <div>
            <v-row class="shrink mx-16">
              <v-col>
                <v-card-text>Telefon: {{ selectedSchool.phoneNumber }}</v-card-text>
                <v-card-text>Fax: {{ selectedSchool.fax }}</v-card-text>
                <v-card-text>Email: {{ selectedSchool.email }}</v-card-text>
                <v-card-text>Founded By: {{ selectedSchool.foundedBy }}</v-card-text>
                <v-card-text>Learning Language: {{ selectedSchool.language }}</v-card-text>
                <v-card-text>Year of Construction: {{ selectedSchool.builtAt }}</v-card-text>
              </v-col>
              <v-col>
                <v-card-text>Type of Construction: {{ selectedSchool.buildingType }}</v-card-text>
                <v-card-text>Area of Building: {{ selectedSchool.buildingArea }}</v-card-text>
                <v-card-text>Area of School Yard: {{ selectedSchool.gardenArea }}</v-card-text>
                <v-card-text>Shifts: {{ selectedSchool.shifts }}</v-card-text>
                <v-card-text>Heating System: {{ selectedSchool.heating }}</v-card-text>
                <v-card-text>Number of Classes: {{ selectedSchool.nrClasses }}</v-card-text>
              </v-col>
              <v-col>
                <v-card-text>Number of Students: {{ selectedSchool.nrStudents }}</v-card-text>
                <v-card-text>Number of Teacher: {{ selectedSchool.nrTeachers }}</v-card-text>
                <v-card-text>Cantene: {{ selectedSchool.canteen }}</v-card-text>
                <v-card-text>Library: {{ selectedSchool.library }}</v-card-text>
                <v-card-text>Laboratory: {{ selectedSchool.labs }}</v-card-text>
              </v-col>
            </v-row>
          </div>
          <div class="mx-14 my-8">
            <v-col>
              <v-data-table v-if="finances" :headers="headers" :items="finances.data.info"></v-data-table>
            </v-col>
          </div>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card text key="survey">
          <v-stepper v-model="e1">
            <v-stepper-header>
              <v-stepper-step :complete="e1 > 1" step="1">Identity</v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step :complete="e1 > 2" step="2">Area</v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step step="3">Meta</v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
              <v-stepper-content step="1">
                <v-form ref="form" class="mx-14 my-8">
                  <v-text-field v-model="survey.phoneNumber" :counter="10" label="Telefon" required></v-text-field>

                  <v-text-field v-model="survey.fax" label="Fax" required></v-text-field>

                  <v-text-field v-model="survey.email" label="Email" required></v-text-field>
                  <v-text-field v-model="survey.foundedBy" label="Founded By" required></v-text-field>
                  <v-text-field v-model="survey.language" label="Learning Language" required></v-text-field>
                </v-form>

                <v-btn color="primary" @click="e1 = 2">Continue</v-btn>

                <v-btn text>Cancel</v-btn>
              </v-stepper-content>

              <v-stepper-content step="2">
                <v-form ref="form" class="mx-14 my-8">
                  <v-text-field
                    v-model="survey.builtAt"
                    :counter="10"
                    label="Year Of Construction"
                    required
                  ></v-text-field>

                  <v-text-field v-model="survey.buildingType" label="Type Of Construction" required></v-text-field>

                  <v-text-field v-model="survey.buildingArea" label="Size Of Object" required></v-text-field>
                  <v-text-field v-model="survey.gardenArea" label="School Yard" required></v-text-field>
                  <v-text-field v-model="survey.shifts" label="Shifts" required></v-text-field>

                  <v-text-field v-model="survey.heating" label="Heating System" required></v-text-field>
                </v-form>
                <v-btn color="primary" @click="e1 = 3">Continue</v-btn>

                <v-btn text>Cancel</v-btn>
              </v-stepper-content>

              <v-stepper-content step="3">
                <v-form ref="form" class="mx-14 my-8">
                  <v-text-field
                    v-model="survey.nrClasses"
                    :counter="10"
                    label="Number Of Classes"
                    required
                  ></v-text-field>

                  <v-text-field v-model="survey.nrStudents" label="Number Of Students" required></v-text-field>

                  <v-text-field v-model="survey.nrTeachers" label="Number Of Teacher" required></v-text-field>
                  <v-text-field v-model="survey.canteen" label="Cantene" required></v-text-field>
                  <v-text-field v-model="survey.library" label="Library" required></v-text-field>

                  <v-text-field v-model="survey.labs" label="Laboratory" required></v-text-field>
                </v-form>

                <v-btn color="primary" @click="e1 = 1">Continue</v-btn>

                <v-btn text>Cancel</v-btn>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import { finances } from "./../data/budgets";
import SchoolService from "../services/SchoolService";
import { School } from "../models/School";
import RatingService from '../services/RatingService';

export default {
  data() {
    return {
      e1: 1,
      selectedSchool: null,
      finances: finances.filter(f => +f.schoolId === +this.$route.params.school)[0],
      headers: [
        {
          text: "Year",
          align: "start",
          sortable: false,
          value: "year",
        },
        { text: "Budget", value: "budget" },
        { text: "Planed", value: "planed" },
        { text: "Realised", value: "realised" },
      ],
      tab: "info",
      survey: {
        phoneNumber: null,
        fax: null,
        email: null,
        foundedBy: null,
        language: null,
        builtAt: null,
        buildingType: null,
        buildingArea: null,
        gardenArea: null,
        shifts: null,
        heating: null,
        nrClasses: null,
        nrStudents: null,
        nrTeachers: null,
        canteen: null,
        library: null,
        labs: null,
      }
    };
  },
  async created() {
    const res = await SchoolService.getSchool(+this.$route.params.school)
    this.selectedSchool = new School(res.data.data);
  },
  methods: {
    async submitRating() {
      try {
        const payload = {
          schoolId: +this.$route.params.school,
          rating: this.selectedSchool.rating,
        };
        const res = await RatingService.submit(payload);
        if (res.success) {
          console.log('SUCCESS');
        }
      } catch (error) {
        console.log('ERROR', error);
      }

    }
  }
};
</script>