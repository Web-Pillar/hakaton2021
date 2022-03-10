<template>
  <div>
    <v-toolbar style="height:50px">
      <v-tabs style="height:20px ;" v-model="tab" centered slider-color="yellow">
        <v-tab key="info">{{$t("schooldetails")}}</v-tab>
        <v-tab key="survey">{{$t("survey")}}</v-tab>
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
          <v-btn text @click="$router.go(-1)">{{$t('nothanks')}}</v-btn>
          <v-btn @click="submitRating" color="primary" text>{{$t('ratenow')}}</v-btn>
        </v-card-actions>
      </v-col>
    </div>

    <v-tabs-items v-if="selectedSchool" v-model="tab">
      <v-tab-item key="info">
        <v-card text>
          <div>
            <v-row class="shrink mx-16">
              <v-col>
                <v-card-text>{{$t("phonenumber")}}: {{ selectedSchool.phoneNumber }}</v-card-text>
                <v-card-text>{{$t("faxnumber")}}: {{ selectedSchool.fax }}</v-card-text>
                <v-card-text>{{$t("email")}}: {{ selectedSchool.email }}</v-card-text>
                <v-card-text>{{$t("foundedby")}}: {{ selectedSchool.foundedBy }}</v-card-text>
                <v-card-text>{{$t("teachinglanguage")}}: {{ selectedSchool.language }}</v-card-text>
                <v-card-text>{{$t("yearofconstruction")}}: {{ selectedSchool.builtAt }}</v-card-text>
              </v-col>
              <v-col>
                <v-card-text>{{$t("typeofconstruction")}}: {{ selectedSchool.buildingType }}</v-card-text>
                <v-card-text>{{$t("areaofobject")}}: {{ selectedSchool.buildingArea }}</v-card-text>
                <v-card-text>{{$t("areaofschoolpark")}}: {{ selectedSchool.gardenArea }}</v-card-text>
                <v-card-text>{{$t("shcoolworkswithshifts")}}: {{ selectedSchool.shifts }}</v-card-text>
                <v-card-text>{{$t("heatingsystem")}}: {{ selectedSchool.heating }}</v-card-text>
                <v-card-text>{{$t("numofclassrooms")}}: {{ selectedSchool.nrClasses }}</v-card-text>
              </v-col>
              <v-col>
                <v-card-text>{{$t("numberofstudents")}}: {{ selectedSchool.nrStudents }}</v-card-text>
                <v-card-text>{{$t("numberofteachers")}}: {{ selectedSchool.nrTeachers }}</v-card-text>
                <v-card-text>{{$t("canteene")}}: {{ selectedSchool.canteen }}</v-card-text>
                <v-card-text>{{$t("library")}}: {{ selectedSchool.library }}</v-card-text>
                <v-card-text>{{$t("laboratory")}}: {{ selectedSchool.labs }}</v-card-text>
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
              <v-stepper-step :complete="e1 > 1" step="1">{{$t("identity")}}</v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step :complete="e1 > 2" step="2">{{$t("area")}}</v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step step="3">{{$t("meta")}}</v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
              <v-stepper-content step="1">
                <v-form ref="form" class="mx-14 my-8">
                  <v-text-field v-model="survey.phoneNumber" :counter="10" :label="$t('phonenumber')" required></v-text-field>

                  <v-text-field v-model="survey.fax" :label="$t('faksnumber')" required></v-text-field>

                  <v-text-field v-model="survey.email" :label="$t('email')" required></v-text-field>
                  <v-text-field v-model="survey.foundedBy" :label="$t('foundedby')" required></v-text-field>
                  <v-text-field v-model="survey.language" :label="$t('teachinglanguage')" required></v-text-field>
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

                  <v-text-field v-model="survey.buildingType" :label="$t('typeofconstruction')" required></v-text-field>

                  <v-text-field v-model="survey.buildingArea" :label="$t('areaofobject')" required></v-text-field>
                  <v-text-field v-model="survey.gardenArea" :label="$t('areaofschoolpark')" required></v-text-field>
                  <v-text-field v-model="survey.shifts" :label="$t('shcoolworkswithshifts')" required></v-text-field>

                  <v-text-field v-model="survey.heating" :label="$t('heatingsystem')" required></v-text-field>
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

                  <v-text-field v-model="survey.nrStudents" :label="$t('numberofstudents')" required></v-text-field>

                  <v-text-field v-model="survey.nrTeachers" :label="$t('numberofteachers')" required></v-text-field>
                  <v-text-field v-model="survey.canteen" :label="$t('canteene')" required></v-text-field>
                  <v-text-field v-model="survey.library" :label="$t('library')" required></v-text-field>

                  <v-text-field v-model="survey.labs" :label="$t('laboratory')" required></v-text-field>
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