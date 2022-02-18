<template>
  <div>
   

    <div class="mx-14 my-8" v-for="school in schools" :key="school">
        <v-row class="shrink"  v-if="school.id == $route.params.school">
             <v-col >
                <v-card-title class="text-h5">
                Name
            
                </v-card-title>
               
            

            </v-col>
            <v-col >
                <v-card-title class="text-h5">
                {{ school.schoolName }} 
            
                </v-card-title>
               
            

            </v-col>
            <v-col >
                <v-card-title class="text-h5">
                {{ school.schoolName }} 
            
                </v-card-title>
              
            

            </v-col>
            <v-col >
                <v-card-title class="text-h5">
                {{ school.schoolName }} 
            
                </v-card-title>
              
            

            </v-col>
       
      </v-row>
    </div>

    <v-tabs-items v-model="model">
      <v-tab-item v-for="i in 2" :key="i" :value="`tab-${i}`">
        <v-card v-if="i == 1" flat>
        
          <div v-for="school in schools" :key="school">
            <v-row
              class="shrink mx-16"
              v-if="school.id == $route.params.school"
            >
              <v-col >
                <v-card-text>Telefon: </v-card-text>
                <v-card-text>Fax: </v-card-text>
                <v-card-text>Email: </v-card-text>
                <v-card-text>Founded By:</v-card-text>
                <v-card-text>Learning Language:</v-card-text>
                <v-card-text>Year of Construction:</v-card-text>
           
                <v-card-text>Type of Construction: </v-card-text>
                <v-card-text>Size of Object: </v-card-text>
                <v-card-text>School Yard: </v-card-text>
                <v-card-text>Shifts: </v-card-text>
                <v-card-text>Heating System: </v-card-text>
                <v-card-text>Number of Classes: </v-card-text>
             
                <v-card-text>Number of Students: </v-card-text>
                <v-card-text>Number of Teacher: </v-card-text>
                <v-card-text>Cantene: </v-card-text>
                <v-card-text>Library: </v-card-text>
                <v-card-text>Laboratory: </v-card-text>
                <v-card-text>Supplay: </v-card-text>
                </v-col>
                <v-col>
                <v-card-text>00389XXXXXX</v-card-text>
                <v-card-text>#</v-card-text>
                <v-card-text>{{ school.email }}</v-card-text>
                <v-card-text>#</v-card-text>
                <v-card-text>#</v-card-text>
                <v-card-text>#</v-card-text>
           
                <v-card-text>#</v-card-text>
                <v-card-text>#</v-card-text>
                <v-card-text>#</v-card-text>
                <v-card-text>#</v-card-text>
                <v-card-text>#</v-card-text>
                <v-card-text>#</v-card-text>
             
                <v-card-text>#</v-card-text>
                <v-card-text>#</v-card-text>
                <v-card-text>#</v-card-text>
                <v-card-text>#</v-card-text>
                <v-card-text>#</v-card-text>
                <v-card-text>#</v-card-text>
                </v-col>
                <v-col>
                <v-card-text>00389XXXXXX</v-card-text>
                <v-card-text>#</v-card-text>
                <v-card-text>{{ school.email }}</v-card-text>
                <v-card-text>#</v-card-text>
                <v-card-text>#</v-card-text>
                <v-card-text>#</v-card-text>
           
                <v-card-text>#</v-card-text>
                <v-card-text>#</v-card-text>
                <v-card-text>#</v-card-text>
                <v-card-text>#</v-card-text>
                <v-card-text>#</v-card-text>
                <v-card-text>#</v-card-text>
             
                <v-card-text>#</v-card-text>
                <v-card-text>#</v-card-text>
                <v-card-text>#</v-card-text>
                <v-card-text>#</v-card-text>
                <v-card-text>#</v-card-text>
                <v-card-text>#</v-card-text>
                </v-col>
                <v-col>
                <v-card-text>00389XXXXXX</v-card-text>
                <v-card-text>#</v-card-text>
                <v-card-text>{{ school.email }}</v-card-text>
                <v-card-text>#</v-card-text>
                <v-card-text>#</v-card-text>
                <v-card-text>#</v-card-text>
           
                <v-card-text>#</v-card-text>
                <v-card-text>#</v-card-text>
                <v-card-text>#</v-card-text>
                <v-card-text>#</v-card-text>
                <v-card-text>#</v-card-text>
                <v-card-text>#</v-card-text>
             
                <v-card-text>#</v-card-text>
                <v-card-text>#</v-card-text>
                <v-card-text>#</v-card-text>
                <v-card-text>#</v-card-text>
                <v-card-text>#</v-card-text>
                <v-card-text>#</v-card-text>
                </v-col>
                

            </v-row>
          </div>
        
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