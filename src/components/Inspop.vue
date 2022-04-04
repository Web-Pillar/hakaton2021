<template>
  <v-dialog v-model="dialog" persistent max-width="70vw">
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">Map orientation</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2">Tool tip</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 3" step="3">Compare</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 4" step="4">Survey</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-img :src="getImage(1)" contain></v-img>

          <v-btn color="error float-right ml-2" @click="completed">Close</v-btn>
          <v-btn color="primary float-right" @click="e1 = 2">Next</v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-img :src="getImage(2)" contain></v-img>

          <v-btn color="primary float-left" @click="e1 = 1">Back</v-btn>

          <v-btn color="error float-right ml-2" @click="completed">Close</v-btn>
          <v-btn color="primary float-right" @click="e1 = 3">Next</v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-img :src="getImage(3)" contain></v-img>

          <v-btn color="primary float-left" @click="e1 = 2">Back</v-btn>
          <v-btn color="error float-right ml-2" @click="completed">Close</v-btn>
          <v-btn color="primary float-right" @click="e1 = 4">Next</v-btn>
        </v-stepper-content>
        <v-stepper-content step="4">
          <v-img :src="getImage(4)" contain></v-img>

          <v-btn color="primary float-left" @click="e1 = 3">Back</v-btn>
          <v-btn color="error float-right" @click="completed">Close</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-dialog>
</template>

<script>
import step_1_en from '../assets/instruction/en/1step.jpg';
import step_2_en from '../assets/instruction/en/2step.jpg';
import step_3_en from '../assets/instruction/en/3step.jpg';
import step_4_en from '../assets/instruction/en/4step.jpg';

import step_1_mk from '../assets/instruction/mk/1step.jpg';
import step_2_mk from '../assets/instruction/mk/2step.jpg';
import step_3_mk from '../assets/instruction/mk/3step.jpg';
import step_4_mk from '../assets/instruction/mk/4step.jpg';

import step_1_sq from '../assets/instruction/sq/1step.jpg';
import step_2_sq from '../assets/instruction/sq/2step.jpg';
import step_3_sq from '../assets/instruction/sq/3step.jpg';
import step_4_sq from '../assets/instruction/sq/4step.jpg';
export default {
  props: ['dialog'],
  data() {
    return {
      e1: 1,
      images: {
        en: [step_1_en, step_2_en, step_3_en, step_4_en],
        mk: [step_1_mk, step_2_mk, step_3_mk, step_4_mk],
        sq: [step_1_sq, step_2_sq, step_3_sq, step_4_sq],
      }
    }
  },
  methods: {
    getImage(step) {
      return this.images[this.$i18n.locale][step-1];
    },
    completed() {
      this.$emit('completed');
    }
  }
}
</script>