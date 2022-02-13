<template>
    <v-container fluid fill-height>
    <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
                <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                <v-form>
                    <v-text-field
                        prepend-icon="mdi-account"
                        name="login"
                        label="Login"
                        type="text"
                        v-model="username"
                    ></v-text-field>
                    <v-text-field
                        id="password"
                        prepend-icon="mdi-lock"
                        name="password"
                        label="Password"
                        type="password"
                        v-model="password"
                    ></v-text-field>
                </v-form>
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login">Login</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
    </v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
   name: 'Login',
   data: () => {
        return {
            username: '',
            password: '',
        }
    },
    methods: {
        ...mapActions(['logIn']),
        async login() {
            let response = await this.axios.post('/auth/login', {
                email: this.username,
                password: this.password
            });
            if (response.data.success) {
                localStorage.setItem('token', response.data.data.token);
                this.logIn(response.data.data);
                this.$router.push("/admin/users");
            }
        }
    }
};
</script>

<style></style>
