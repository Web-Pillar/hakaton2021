<template>
  <div class="faqstyle">
    <h1 class="text-center">Frequently askend questions!</h1>
    <v-container class="faqbox">
      <v-row no-gutters>
        <v-col md="6">
          <v-list>
            <v-list-item v-for="(item, index) in questions" :key="`question_${index}`">
              <v-icon>mdi-help-circle</v-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.question }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col md="6">
          <v-list>
            <v-list-item v-for="(item, index) in questions" :key="`answer_${index}`">
              <v-list-item-content>
                <v-list-item-title>{{ item.answer }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      questions: [
        {
          question: 'What is metaschools used for',
          answer: 'Metsascholl is project by metamorphis usaid and webpillar',
        },
        {
          question: 'What is metaschools used for',
          answer: 'Metsascholl is project by metamorphis usaid and webpillar',
        },
        {
          question: 'What is metaschools used for',
          answer: 'Metsascholl is project by metamorphis usaid and webpillar',
        },
      ],
    }
  },
}
</script>

<style>
.faqstyle {
  background-color: #f1f1f1;
  padding: 30px;

  border: solid;
}

body {
  font-family: "Just Another Hand", cursive;
  background: #f3f3f3;
}

.faqbox {
  padding: 4rem 8rem;

  border: 3px solid #333333;
  font-size: 1.3rem;
  border-radius: 2% 6% 5% 4% / 1% 1% 2% 4%;
  text-transform: uppercase;
  letter-spacing: 0.3ch;
  background: #ffffff;
}
</style>