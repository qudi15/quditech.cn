<template>
  <div>
    <v-dialog persistent v-model="isSignInDialogShow" max-width="500px">
      <v-card active-class="login-dialog">
        <v-card-title>
          <div style="width: 100%;">
            <h2>Sign in</h2>
            <v-spacer></v-spacer>
            <div>
              <v-text-field v-model="token" label="Access token"></v-text-field>
            </div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn color="primary" flat @click="signIn">Submit</v-btn>
          <v-btn color="primary" flat @click.stop="$store.dispatch('hideSignInDialog')">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      token: ''
    };
  },
  watch: {
    isSignInDialogShow: function () {
      this.token = '';
    }
  },
  computed: {
    isSignInDialogShow: function () {
      return this.$store.getters.isSignInDialogShow;
    }
  },
  methods: {
    async signIn () {
      if (!this.token) {
        return;
      }
      try {
        await this.$store.dispatch('login', this.token);
      } catch (e) {
        console.log(e);
      }
      this.$store.dispatch('hideSignInDialog');
    }
  }
};
</script>
<style>

</style>

