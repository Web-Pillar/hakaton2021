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
.FilterFrm {
    background-color: #dddddd;
    height: 80px;
}
select {
    border-style: none;
    background: transparent;
    outline: none;
}
.webflow-style-select {
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    border-radius: 2px;
    padding: 1.4rem 2rem 1.6rem;
    background: rgba(220, 220, 228, 0.8);
    margin-top: 20px;
}

.webflow-style-select select {
    flex-grow: 1;
    color: #0b0b0c;
    font-size: 1.7rem;
    line-height: 2.4rem;
    vertical-align: middle;
}
.webflow-style-select button {
    color: black;
    font-size: 1.3rem;

    padding-inline: 20px;
    padding-block: 5px;
    background: rgb(235, 235, 235);
    margin-top: 50px;
}
.webflow-style-select button:hover {
    color: black;
    font-size: 1.3rem;

    padding-inline: 20px;
    padding-block: 5px;
    background: rgb(167, 167, 167);
}
</style>