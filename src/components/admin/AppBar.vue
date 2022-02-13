<template>
    <v-app-bar app>
        <v-toolbar-title>{{ $route.name }}</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                    <v-avatar>
                        <img :src="user.avatar" alt="User Avatar" />
                    </v-avatar>
                </v-btn>
            </template>

            <v-list>
                <v-list-item @click="logout">
                    <v-list-item-title>Log out</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>

<script>
export default {
    data: () => {
        return {
            user: {
                name: 'Sandra Adams',
                email: 'sandra_a88@gmail.com',
                avatar: 'https://randomuser.me/api/portraits/women/85.jpg',
            }
        }
    },
    methods: {
        logout() {
            console.log('LOGOUT');
            this.$router.push("/");
        }
    }
}
</script>

<style>
</style>