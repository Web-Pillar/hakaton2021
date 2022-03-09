<template>
    <div>
        <compare></compare>
    </div>
</template>

<script>
import compare from "../components/Compare.vue";
import { mapActions, mapState } from 'vuex';

export default {
    components: {
        compare
    },
    computed: {
        ...mapState({
            compareIds: (state) => state.compareIds,
        }),
    },
    methods: {
        ...mapActions(['getSchoolDetails']),
    },
    created() {
        for (const id of this.compareIds) {
            this.getSchoolDetails(id);
        }
    }
}
</script>

<style>
</style>