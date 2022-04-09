<template>
    <v-container class="webflow-style-select background flex py-4">
        <form @change.prevent="filter">
            <div class="input-container">
                <label class="labels">
                {{$t("municipality")}}
                    <select class="select" v-model="municipality">
                        <option value="all" selected> {{$t("all")}}</option>
                        <option v-for="item in municipalities" :key="item" :value="item">{{ item }}</option>
                    </select>
                </label>
            </div>
            <!-- <div class="input-container">
                <label class="labels">
                    {{$t("category")}}
                    <select class="select" v-model="category">
                        <option value="all" selected> {{$t("all")}}</option>
                        <option value="univerzitet">{{$t("uni")}}</option>
                        <option value="sredno">{{$t("highschool")}}</option>
                        <option value="osniovno">{{$t("preschool")}}</option>
                    </select>
                </label>
            </div> -->
        </form>
        <v-spacer></v-spacer>
        <v-btn @click="$router.push('/compare')">{{$t('compare')}}</v-btn>
    </v-container>
</template>

<script>
import { transliterate } from '../utils/transliterate';

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
            let allMunicipalities = this.schools.map(s => { return transliterate(s.municipality, this.$i18n.locale) });
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
    padding: 2px 8px 4px 6px;
    margin: 0 1rem 0 0px;
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
    margin: 0 auto;
    border-radius: 2px;
    padding: 0.1rem 1rem 0rem;
}



.background {
    background-color: #6c757d;
}

.flex {
    display: flex;
}
</style>