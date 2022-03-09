<template>
    <div>
    <rating></rating>
    </div>
</template>

<script>
import rating from "../components/Rating.vue";
import { mapActions } from 'vuex';

export default {
    components:{
        rating
    },
    methods: {
        ...mapActions(['getSchoolDetails']),
    },
    created() {
        this.getSchoolDetails(this.$route.params.school);
    }
}
</script>

<style>

</style>