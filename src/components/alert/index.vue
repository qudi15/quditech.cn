<template>
  <div class="alert-layout">
    <v-alert :color="color" :icon="icon" transition="fade-transition" v-model="isShow" value="true">
      {{ text }}
    </v-alert>
  </div>
</template>
<script>
const LevelColorMap = {
  'info': 'info',
  'warning': 'warning',
  'error': 'error',
  'success': 'success'
};
const LevelIconMap = {
  'info': 'info',
  'warning': 'priority_high',
  'error': 'warning',
  'success': 'check_circle'
};
let timer;
export default {
  data () {
    return {
      color: 'info',
      icon: 'info'
    };
  },
  computed: {
    isShow: function () {
      return this.$store.getters.alertIsShow;
    },
    level: function () {
      return this.$store.getters.alertLevel;
    },
    text: function () {
      return this.$store.getters.alertText;
    }
  },
  watch: {
    isShow: function (flag) {
      if (flag) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          this.$store.dispatch('hideAlert');
        }, 3000);
      }
    },
    level: function (level) {
      this.color = LevelColorMap[level];
      this.icon = LevelIconMap[level];
    }
  }
};
</script>
<style scoped>
.alert-layout {
  position: fixed;
  z-index: 3;
  right: 4px;
  width: 300px;
  opacity: 0.8;
}
</style>


