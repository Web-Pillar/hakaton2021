<template>
    <v-app>
        <NavigationDrawer></NavigationDrawer>
        <!-- <AppBar></AppBar> -->

        <!-- Provides the application the proper gutter -->
        <v-container fluid>
            <!-- If using vue-router -->
            <router-view></router-view>
        </v-container>
    </v-app>
</template>

<script>
import NavigationDrawer from "../components/admin/NavigationDrawer"
// import AppBar from "../components/admin/AppBar"
export default {
    components: { NavigationDrawer }
}
</script>

<style>
</style>