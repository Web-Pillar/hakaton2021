<template>
   <div>
      <select id="language_select" @change="changeLanguage($event)">
         <option value="mk">MK</option>
         <option value="sq">SQ</option>
         <option value="en" selected>EN</option>
         <option value="tr">TR</option>
      </select>
   </div>
</template>


<script>

export default {
   methods: {
      changeLanguage(event) {
         this.$i18n.locale = event.target.value
      }
   }
}
</script>


<style scoped>
#language_select {
   min-width: 5vw;
}
label {
   align-content: right;
}
select {
   padding: 7px 40px 7px 12px;
   /* border: 1px solid #E8EAED; */
   /* border-radius: 5px; */
   background: white;
   box-shadow: 0 1px 3px -2px #9098a9;
   cursor: pointer;
   font-family: inherit;
   font-size: 16px;
   transition: all 150ms ease;
}

option {
   color: #223254;
}
</style>