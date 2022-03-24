<template>
  <v-expansion-panels>
    <h1 class="text-h2 text-sm-h2 text-md-h2 text-lg-h2">
      <span class="primary--text">Frequently asked questions</span>
    </h1>
    <v-expansion-panel v-for="(question, i) in questions" :key="i">
      <v-expansion-panel-header>{{ question.q }}</v-expansion-panel-header>
      <v-expansion-panel-content>{{ question.a }}</v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  data: () => {
    return {
      questions: [
        {q: 'Question 1', a: 'Answer 1'},
        {q: 'Question 2', a: 'Answer 2'},
        {q: 'Question 3', a: 'Answer 3'},
        {q: 'Question 4', a: 'Answer 4'},
        {q: 'Question 5', a: 'Answer 5'},
      ]
    }
  }
}
</script>