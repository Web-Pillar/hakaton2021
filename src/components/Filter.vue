<template>
<div class="FilterFrm">
        <label>  Opshtina:      
        <select class="select">
            <option value=""></option>
            <option value="Tetovo">Tetovo</option>
            <option value="Bogovine">Bogovinje</option>
        </select>
        </label>
        <label>  Kategorija:      
        <select class="select">
            <option value=""></option>
            <option value="Fakultet">Fakultet</option>
            <option value="Sredno">Sredno</option>
            <option value="Osniovno">Osnovno</option>
            
        </select>
        </label>
        <label>  Rating:      
        <select class="select">
            <option value=""></option>
            <option value="5">5</option>
            <option value="4">4</option>
        </select>
        </label>

        <button type="submit" name="filter">Filter</button>
        </div>
</template>

<script>
export default {

}
</script>

<style>
    
    .button{
        margin-left: 5px;
    }
    .Filter
    {
       width: 120px;
       height: 20px;
       margin: 5px;   
    }
    .FilterFrm{
        background-color: #dddddd;
        height: 80px;
        

    }
    .select{
        border: black;
        width: 120px;
        height: 20px;
        margin: 5px;

    }
</style>