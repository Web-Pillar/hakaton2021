<template>
  <div>
    <AboutContent></AboutContent>
    <Faqnew></Faqnew>
    <AdminForm></AdminForm>
  </div>
</template>


<script>
import AboutContent from '@/components/AboutContent.vue'
import Faqnew from '@/components/Faqnew.vue'
import AdminForm from '@/components/AdminForm.vue';


export default {
  components: { AboutContent, Faqnew, AdminForm }
}
</script>

<style>
</style>
