<template>
   <div>
      <label> Languages
         <select>
            <option value="MK" selected>Macedonian </option>
            <option value="EN">English</option>
            <option value="SQ" >Albanian</option>
            <option value="TR">Turkish</option>
         </select>
      </label>
   </div>
</template>


<script>
export default {

}
</script>


<style scoped>
  select {
     padding: 7px 40px 7px 12px;
     border: 1px solid #E8EAED;
     border-radius: 5px;
    background: white;
    box-shadow: 0 1px 3px -2px #9098A9;
    cursor: pointer;
    font-family: inherit;
    font-size: 16px;;
    transition: all 150ms ease;
  }

  option {
     color: #223254
  }

</style>