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
          <v-img src="..\assets\instruction\1step.jpg"></v-img>

          <v-btn color="primary" @click="e1 = 2">Next</v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-img src="..\assets\instruction\2step.jpg"></v-img>

          <v-btn color="primary" @click="e1 = 3">Next</v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-img src="..\assets\instruction\3step.jpg"></v-img>

          <v-btn color="primary" @click="e1 = 4">Next</v-btn>
        </v-stepper-content>
        <v-stepper-content step="4">
          <v-img src="..\assets\instruction\4step.jpg"></v-img>

          <v-btn text @click="completed">Close</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-dialog>
</template>

<script>
export default {
  props: ['dialog'],
  data() {
    return {
      e1: 1,
    }
  },
  methods: {
    completed() {
      this.$emit('completed');
    }
  }
}
</script>