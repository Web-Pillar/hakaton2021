<template>
   <footer>
        <div class="image-container">
          <img src="@/assets/usaid1.png" class="image">
          <img src="@/assets/meta.svg" class="image">
          <img src="@/assets/logo.png" class="image">
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style>
.image-container {
   display: flex;
   align-items: center;
   justify-content: space-around;
   padding: 50px;
}

.image {
    max-height: 10vh;
}
footer {
  background-color: #f1f1f1;
  padding: 10px;
  text-align: center;
    border: solid;
    border-top: none;
}
</style>