<template>
  <v-container class="py-6 py-lg-12 text-center">
    <h1 class="text-h2 text-sm-h2 text-md-h2 text-lg-h2">
      {{ $t('about_content.header') }}
      <span class="primary--text">Metaschools</span>
    </h1>
    <p class="text-justify text-sm-h5 secondary--text mt-7 w-full w-md-8-12 w-xl-half mx-auto">
      {{ $t('about_content.content') }}
    </p>
    
  </v-container>
</template>

<script>

export default {
  name: "AboutContent"
}
</script>