<template>
<div class="webflow-style-select">
    <form>
        <label class="labels">  Opshtina:      
        <select class="select">
            <option value=""></option>
            <option value="Tetovo">Tetovo</option>
            <option value="Bogovine">Bogovinje</option>
        </select>
        </label >
        <label class="labels">  Kategorija:      
        <select class="select">
            <option value=""></option>
            <option value="Fakultet">Fakultet</option>
            <option value="Sredno">Sredno</option>
            <option value="Osniovno">Osnovno</option>
            
        </select>
        </label >
        <label class="labels">  Rating:      
        <select class="select">
            <option value=""></option>
            <option value="5">5</option>
            <option value="4">4</option>
        </select>
        </label>

        <button type="submit" name="filter">Filter</button>
        </form>
</div>
       
</template>

<script>
export default {

}
</script>

<style>
    .labels
    {
        margin-left: 20px;
        color:black
    }
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
    select{ border-style: none; background: transparent; outline: none; }
    .webflow-style-select {
        position: relative;
        display: flex;
        flex-direction: row;
        width:100vh;
        
        margin: 0 auto;
        border-radius: 2px;
        padding: 1.4rem 2rem 1.6rem;
        background: rgba(146, 147, 153, 0.8);
       
        }

        .webflow-style-select select {
        flex-grow: 1;
        color: #0b0b0c;
        font-size: 1.3rem;
        line-height: 2.4rem;
        vertical-align: middle;
        margin-left: 20px;
        
        }
        .webflow-style-select button {
            color:  black;
            font-size: 1.6rem;
            vertical-align: middle;
            transition: color .25s;
            background: transparent;
            margin-left: 30px;
            
            
            
        }
      

</style>