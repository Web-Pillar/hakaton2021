<template>
<div class="webflow-style-select">
    <form @submit.prevent="filter">
        <label class="labels">Opshtina:
        <select class="select" v-model="municipality">
            <option value="all" selected>All</option>
            <option v-for="item in municipalities" :key="item" :value="item">{{ item }}</option>
        </select>
        </label >
        <label class="labels">Kategorija:
        <select class="select" v-model="category">
            <option value="all" selected>All</option>
            <option value="univerzitet">Univerzitet</option>
            <option value="sredno">Sredno</option>
            <option value="osniovno">Osnovno</option>
        </select>
        </label >
        <label class="labels">Rating:
        <select class="select" v-model="rating">
            <option value="all" selected>All</option>
            <option v-for="val in 5" :key="val" :value="val">{{ val }}</option>
        </select>
        </label>
        <button type="submit" name="filter">Filter</button>
        </form>
</div>
</template>

<script>
export default {
    props: ['schools'],
    data: () => {
        return {
            // municipalities: [
            //     { label: 'Tetovo', value: 'Tetovo' },
            //     { label: 'Bogovinje', value: 'Bogovinje' },
            // ],
            municipality: 'all',
            category: 'all',
            rating: 'all',
        }
    },
    computed: {
        municipalities() {
            let allMunicipalities = this.schools.map(s => { return s.municipality });
            let uniqueMunicipalities = [...new Set(allMunicipalities)];
            return uniqueMunicipalities;
        }
    },
    methods: {
        filter(){
            let filters = {
                municipality: this.municipality,
                category: this.category,
                rating: this.rating,
            }

            this.$emit('filtered', filters);
        }
    },
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
        justify-content: center;
        width:100vh;
        margin: 10px auto;
        border-radius: 2px;
        padding: 1.4rem 2rem 1.6rem;
        background: rgba(220, 220, 228, 0.8);
       
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
            font-size: 1.3rem;
            vertical-align: middle;
           padding-inline: 20px;
           padding-block: 5px;
            background: rgb(235, 235, 235);
            margin-left: 30px;
            
            
            
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