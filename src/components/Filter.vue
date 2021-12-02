<template>
<div class="webflow-style-select">
    <form>
        <div>
        <label class="labels">  Opshtina:      
        <select class="select">
            <option value=""></option>
            <option value="Tetovo">Tetovo</option>
            <option value="Bogovine">Bogovinje</option>
        </select>
        </label >
        </div>
        <div>
        <label class="labels">  Kategorija:      
        <select class="select">
            <option value=""></option>
            <option value="Fakultet">Fakultet</option>
            <option value="Sredno">Sredno</option>
            <option value="Osniovno">Osnovno</option>
            
        </select>
        </label >
        </div>
        <label class="labels">  Rating:      
        <select class="select">
            <option value=""></option>
            <option value="5">5</option>
            <option value="4">4</option>
        </select>
        </label>
        <div>
        <button type="submit" name="filter">Filter</button>
        </div>
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
        color:black;
       margin-top: 40px;

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
       
        flex-direction: row;
        justify-content: center;
        width:100%;
        margin: 0 auto;
        border-radius: 2px;
        padding: 1.4rem 2rem 1.6rem;
        background: rgba(220, 220, 228, 0.8);
       
        }

        .webflow-style-select select {
        flex-grow: 1;
        color: #0b0b0c;
        font-size: 2.5rem;
        line-height: 2.4rem;
        vertical-align: middle;
        
        }
        .webflow-style-select button {
            color:  black;
            font-size: 1.3rem;
            vertical-align: middle;
           padding-inline: 20px;
           padding-block: 5px;
            background: rgb(235, 235, 235);
            margin-top: 50px;

            
            
            
        }
        .webflow-style-select button:hover{
               color:  black;
            font-size: 1.3rem;
            vertical-align: middle;
           padding-inline: 20px;
           padding-block: 5px;
            background: rgb(167, 167, 167);
            margin-left: 30px;
            
        }
        
      

</style>