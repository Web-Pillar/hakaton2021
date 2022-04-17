<template>
  <v-container>
    <v-expansion-panels class="mb-4">
      <h1 class="text-h2 text-sm-h2 text-md-h2 text-lg-h2 mb-4">
        <span class="primary--text">{{ $t('faq') }}</span>
      </h1 >
     
      <v-expansion-panel v-for="(question, i) in questions" :key="i">
        <v-expansion-panel-header class="secondary--text text-sm-h5">{{ question.q }}</v-expansion-panel-header>
        <v-expansion-panel-content  class="secondary--text text-sm-h5">{{ question.a }}</v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
  
</template>

<script>
export default {
  computed: {
    questions() {
      return [
        { q: this.$t('questions.1'), a: this.$t('answers.1') },
        { q: this.$t('questions.2'), a: this.$t('answers.2') },
        { q: this.$t('questions.3'), a: this.$t('answers.3') },
        { q: this.$t('questions.4'), a: this.$t('answers.4') },
        { q: this.$t('questions.5'), a: this.$t('answers.5') },
      ]
    }
  }
}
</script>