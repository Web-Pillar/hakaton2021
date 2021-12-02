<template>
    <div class="webflow-style-select">
        <form @submit.prevent="filter">
            <div class="input-container">
                <label class="labels">
                    Opshtina:
                    <select class="select" v-model="municipality">
                        <option value="all" selected>All</option>
                        <option v-for="item in municipalities" :key="item" :value="item">{{ item }}</option>
                    </select>
                </label>
            </div>
            <div class="input-container">
                <label class="labels">
                    Kategorija:
                    <select class="select" v-model="category">
                        <option value="all" selected>All</option>
                        <option value="univerzitet">Univerzitet</option>
                        <option value="sredno">Sredno</option>
                        <option value="osniovno">Osnovno</option>
                    </select>
                </label>
            </div>
            <div class="input-container">
                <label class="labels">
                    Rating:
                    <select class="select" v-model="rating">
                        <option value="all" selected>All</option>
                        <option v-for="val in 5" :key="val" :value="val">{{ val }}</option>
                    </select>
                </label>
            </div>
            <div>
                <button type="submit" name="filter">Filter</button>
            </div>
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
}

.labels {
    color: black;
    margin-top: 50px;
}

.Filter {
    width: 120px;
    height: 20px;
    margin: 5px;
}
select {
    
     padding: 7px 40px 7px 12px;
     border: 1px solid #E8EAED;
     border-radius: 5px;
    background: white;
    box-shadow: 0 1px 3px -2px #9098A9;
    cursor: pointer;
    font-family: inherit;
    font-size: 2.0rem;
    transition: all 150ms ease;
    max-width: 70%;
  }
.webflow-style-select {
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    border-radius: 2px;
    padding: 1.4rem 2rem 1.6rem;
    margin-top: 20px;
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
.webflow-style-select button:hover {
    color: black;
    font-size: 2rem;
    width: 160px;
    height: 60px;
    padding-inline: 20px;
    padding-block: 5px;
    background: rgb(167, 167, 167);
}
</style>