<template>
   <div>
      <select id="select">
         <option value="MK" selected>MK</option>
         <option value="EN">EN</option>
         <option value="SQ">SQ</option>
         <option value="TR">TR</option>
      </select>
   </div>
</template>


<script>

export default {

}
</script>


<style scoped>
#select {
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