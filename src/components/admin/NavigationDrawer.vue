<template>
    <v-navigation-drawer app permanent>
        <v-list>
            <v-list-item class="px-2">
                <v-list-item-avatar>
                    <v-img :src="avatar" alt="User Avatar"></v-img>
                </v-list-item-avatar>
            </v-list-item>

            <v-list-item link>
                <v-list-item-content>
                    <v-list-item-title class="text-h6">{{ `${authUser.name} ${authUser.surname}` }}</v-list-item-title>
                    <v-list-item-subtitle>{{ authUser.email }}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list nav dense>
            <v-list-item link v-for="item in menuItems" :key="item.id" :to="item.url">
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex"
export default {
    data: () => {
        return {
            menuItems: [
                // { id: 'menuItem_dashboard', name: 'Dashboard', icon: 'mdi-folder', url: '/admin/dashboard' },
                { id: 'menuItem_users', name: 'Users', icon: 'mdi-account-multiple', url: '/admin/users' },
                { id: 'menuItem_schools', name: 'Schools', icon: 'mdi-town-hall', url: '/admin/schools' },
                { id: 'menuItem_requests', name: 'Administrator Requests', icon: 'mdi-town-hall', url: '/admin/requests' },
            ],
            avatar: 'https://randomuser.me/api/portraits/women/85.jpg'
        }
    },
    computed: {
        ...mapGetters(['authUser']),
        formTitle() {
            return this.editedIndex === -1 ? 'New User' : 'Edit User'
        },
    },
}
</script>

<style>
</style>