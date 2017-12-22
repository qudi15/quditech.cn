<template>
  <v-app id="app">
    <alert></alert>
    <router-view></router-view>
    <login></login>
  </v-app>
</template>

<script>
import alert from '@/components/alert';
import login from '@/components/login';
import loginBtn from '@/components/login-btn';
import Vue from 'vue';
Vue.component('login-btn', loginBtn);

export default {
  name: 'app',
  components: {
    alert,
    login
  }
};
</script>

<style>
html, body, #app {
  height: 100%;
  width: 100%;
  margin: 0;
  /* overflow: hidden; */
}

a, a:visited {
    text-decoration: none;
}
</style>
