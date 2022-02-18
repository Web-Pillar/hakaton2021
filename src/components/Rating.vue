<template>
  <div>
    <v-toolbar  style="height:50px" >
     
        <v-tabs style="height:20px ;" v-model="model" centered slider-color="yellow">
          <v-tab :href="`#info`"> Info </v-tab>
          <v-tab :href="`#data`"> Add Data </v-tab>
        </v-tabs>
     
     
    </v-toolbar>

    <div class="mx-14 my-8" v-for="school in schools" :key="school">
      <v-col class="shrink" v-if="school.id == $route.params.school">
        <v-card-title class="text-h5">
          {{ school.schoolName }} <v-spacer></v-spacer>
          <v-rating
            v-model="rating"
            color="yellow darken-3"
            background-color="grey darken-1"
            empty-icon="$ratingFull"
            half-increments
            hover
            large
          ></v-rating>
        </v-card-title>
        <v-card-text>
          <h1>{{ school.address }}</h1>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="justify-space-between">
          <v-btn text @click="$router.go(-1)"> No Thanks </v-btn>
          <v-btn color="primary" text> Rate Now </v-btn>
        </v-card-actions>
      </v-col>
    </div>

    <v-tabs-items v-model="model">
      <v-tab-item v-for="i in tab" :key="i" :value="`${i.name}`">
        <v-card v-if="i.name == 'info' " flat>
          <div v-for="school in schools" :key="school">
            <v-row
              class="shrink mx-16"
              v-if="school.id == $route.params.school"
            >
              <v-col>
                <v-card-text>Telefon: 00389XXXXXX</v-card-text>
                <v-card-text>Fax: #</v-card-text>
                <v-card-text>Email: {{ school.email }}</v-card-text>
                <v-card-text>Founded By: #</v-card-text>
                <v-card-text>Learning Language: #</v-card-text>
                <v-card-text>Year of Construction: #</v-card-text>
              </v-col>
              <v-col>
                <v-card-text>Type of Construction: #</v-card-text>
                <v-card-text>Size of Object: #</v-card-text>
                <v-card-text>School Yard: #</v-card-text>
                <v-card-text>Shifts: #</v-card-text>
                <v-card-text>Heating System: #</v-card-text>
                <v-card-text>Number of Classes: #</v-card-text>
              </v-col>
              <v-col>
                <v-card-text>Number of Students: #</v-card-text>
                <v-card-text>Number of Teacher: #</v-card-text>
                <v-card-text>Cantene: </v-card-text>
                <v-card-text>Library: #</v-card-text>
                <v-card-text>Laboratory: #</v-card-text>
                <v-card-text>Supplay: #</v-card-text>
              </v-col>
            </v-row>
          </div>
          <div class="mx-14 my-8" v-for="budget in finances" :key="budget">
            <v-col v-if="budget.schoolId == $route.params.school">
              <v-data-table
                :headers="headers"
                :items="budget.data.info"
              ></v-data-table>
            </v-col>
          </div>
        </v-card>
        <v-card v-if="i.name == 'data'" flat>
          <v-stepper v-model="e1">
            <v-stepper-header>
              <v-stepper-step :complete="e1 > 1" step="1">
                Name of step 1
              </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step :complete="e1 > 2" step="2">
                Name of step 2
              </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step step="3"> Name of step 3 </v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
              <v-stepper-content step="1">
                <v-form
                  ref="form"
                  class="mx-14 my-8"
                  v-model="valid"
                  lazy-validation
                >
                  <v-text-field
                    v-model="Tetefon"
                    :counter="10"
                    label="Telefon"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="fax"
                    label="Fax"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="email"
                    label="Email"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="foundedby"
                    label="Founded By"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="LearningLanguage"
                    label="Learning Language"
                    required
                  ></v-text-field>
                </v-form>

                <v-btn color="primary" @click="e1 = 2"> Continue </v-btn>

                <v-btn text> Cancel </v-btn>
              </v-stepper-content>

              <v-stepper-content step="2">
                <v-form
                  ref="form"
                  class="mx-14 my-8"
                  v-model="valid"
                  lazy-validation
                >
                  <v-text-field
                    v-model="YearOfConstruction"
                    :counter="10"
                    label="Year Of Construction"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="typeofconstruction"
                    label="Type Of Construction"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="sizeofobject"
                    label="Size Of Object"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="schoolyard"
                    label="School Yard"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="shifts"
                    label="Shifts"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="heating"
                    label="Heating System"
                    required
                  ></v-text-field>
                </v-form>
                <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>

                <v-btn text> Cancel </v-btn>
              </v-stepper-content>

              <v-stepper-content step="3">
                <v-form
                  ref="form"
                  class="mx-14 my-8"
                  v-model="valid"
                  lazy-validation
                >
                  <v-text-field
                    v-model="numberofclasses"
                    :counter="10"
                    label="Number Of Classes"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="numberofstudents"
                    label="Number Of Students"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="numberofteacher"
                    label="Number Of Teacher"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="Cantene"
                    label="Cantene"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="library"
                    label="Library"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="laboratory"
                    label="Laboratory"
                    required
                  ></v-text-field>
                   <v-text-field
                    v-model="supplay"
                    label="Supplay"
                    required
                  ></v-text-field>
                </v-form>

                <v-btn color="primary" @click="e1 = 1"> Continue </v-btn>

                <v-btn text> Cancel </v-btn>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-card>
      </v-tab-item>
    </v-tabs-items>

   
  </div>
</template>

<script>
import { schools } from "./../data/schools_v2";
import { finances } from "./../data/budgets";

export default {
  data() {
    return {
      schools: schools,
      e1: 1,
      tab: [{name:"info"},{name:"data"}],
      finances: finances,
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
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
      model: "tab-1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>