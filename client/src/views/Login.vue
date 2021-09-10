<template>
  <div>
    <input type="text" placeholder="email" v-model="email" />
    <input type="password" placeholder="password" v-model="password" />
    <button @click="$store.dispatch('registration', { email, password })">
      Register
    </button>
    <button @click="$store.dispatch('login', { email, password })">
      Login
    </button>
    <button @click="$store.dispatch('logout')">Logout</button>
    <button @click="getUsers">Get Users</button>
    <div v-for="(user, i) in users" :key="i">
      {{ user.email }}
    </div>
  </div>
</template>

<script lang="ts">
import UserService from "../services/UserService";
export default {
  name: "login",
  data: () => ({
    email: "",
    password: "",
    users: [],
  }),
  methods: {
    async getUsers() {
      try {
        const response = await UserService.fetchUsers();
        this.users = response.data;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>