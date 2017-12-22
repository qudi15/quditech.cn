<template>
  <v-btn v-if="!isLogin" icon @click="signIn">
    <v-icon>fingerprint</v-icon>
  </v-btn>  
</template>
<script>
export default {
  computed: {
    isLogin: function () {
      return this.$store.state.user.isLogin;
    }
  },
  methods: {
    signIn () {
      this.$store.dispatch('showSignInDialog');
    }
  }
};
</script>


