<template>
    <v-container class="webflow-style-select background flex">
        <form @change.prevent="filter">
            <div class="input-container">
                <label class="labels">
                    Opshtina:
                    <select class="select"  v-model="municipality">
                        <option value="all" selected>All</option>
                        <option v-for="item in municipalities" :key="item" :value="item">{{ item }}</option>
                    </select>
                </label>
            </div>
            <div class="input-container">
                <label class="labels">
                    Kategorija:
                    <select  class="select" v-model="category">
                        <option value="all" selected>All</option>
                        <option value="univerzitet">Univerzitet</option>
                        <option value="sredno">Sredno</option>
                        <option value="osniovno">Osnovno</option>
                    </select>
                </label>
            </div>
        </form>
        <v-spacer></v-spacer>
        <v-btn @click="$router.push('/compare')">Compare</v-btn>
    </v-container>
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
            let uniqueMunicipalities = [...new Set(allMunicipalities)]
                .sort((x, y) => x.localeCompare(y));
            return uniqueMunicipalities;
        }
    },
    methods: {
        filter() {
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
.input-container {
    text-align: left;
    display: inline;
}

.labels {
    color: white;
    /* margin-top: 50px; */
}

.Filter {
    width: 120px;
    height: 15px;
    margin: 2px;
}
.select {
    
     padding: 4px 10px 4px 12px;
     margin: 0 1.6rem 0 2px;
     border: 3px solid #343a40 !important;
     border-radius: 20px;
     background-color: white;
    /* box-shadow: 2px 2px 20px -5px white; */
    cursor: pointer;
    font-family: inherit;
    font-size: 0.9rem;
    transition: all 150ms ease;
    
    color: black;
  }
.webflow-style-select {
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
   
    border-radius: 2px;
    padding: 0.7rem 2rem 0.7rem;
}


.webflow-style-select button {
    color: #000000;
    font-size: 2.0rem;
       width: 150px;
    height: 50px;
    padding-inline: 20px;
    padding-block: 5px;
    background: rgb(235, 235, 235);
    margin-top: 50px;
}

.background {
  background-color: #6c757d
}

.flex {
    display: flex;
}
</style>