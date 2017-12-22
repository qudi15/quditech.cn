<template>
  <v-app>
    <v-toolbar color="white" class="search-bar" fixed app v-bind:class="{ active: isSearchHeaderShow }">
      <v-btn icon @click.stop="isSearchHeaderShow = !isSearchHeaderShow">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-text-field hide-details single-line></v-text-field>
    </v-toolbar>
    <v-toolbar color="white" fixed app>
      <v-btn icon @click="$router.back()">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="isSearchHeaderShow = !isSearchHeaderShow">
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn v-if="isLogin" icon @click="moveToEditor('')">
        <v-icon>add</v-icon>
      </v-btn>
      <login-btn></login-btn>
    </v-toolbar>
    <v-content>
      <v-layout row>
        <v-flex xs12>
          <v-card>
            <v-list two-line>
              <template v-for="(item, index) in topics">
                <v-subheader v-if="item.header" v-text="(new Date(item.modifiedTime)).toLocaleDateString()" :key="index"></v-subheader>
                <v-list-tile v-else avatar ripple @click="moveToEditor(item.id)" :key="item.title">
                  <v-list-tile-content>
                    <v-list-tile-title style="margin: 0 4px;">{{ item.title }}</v-list-tile-title>
                    <v-list-tile-sub-title class="grey--text text--darken-4">
                      <v-chip label v-for="category of item.categoriesSelected" outline color="primary" :key="category">
                        <strong>{{ category }}</strong>
                      </v-chip>
                    </v-list-tile-sub-title>
                    <v-list-tile-sub-title>{{ item.description }}</v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-list-tile-action-text>{{ (new Date(item.modifiedTime)).toLocaleString() }}</v-list-tile-action-text>
                    <v-icon color="grey lighten-1" v-if="selected.indexOf(index) < 0">star_border</v-icon>
                    <v-icon color="yellow darken-2" v-else>star</v-icon>
                  </v-list-tile-action>
                </v-list-tile>
                <v-divider v-if="index + 1 < topics.length" :key="item.title"></v-divider>
              </template>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </v-content>
    <v-footer color="white" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import { getTopics } from '@/services';
export default {
  data: () => ({
    isSearchHeaderShow: false,
    drawer: false,
    selected: [2],
    dialog: false,
    token: '',
    topics: []
  }),
  props: {
    source: String
  },
  computed: {
    isLogin: function () {
      return this.$store.state.user.isLogin;
    }
  },
  methods: {
    toggle (index) {
      const i = this.selected.indexOf(index);

      if (i > -1) {
        this.selected.splice(i, 1);
      } else {
        this.selected.push(index);
      }
    },
    moveToEditor (id) {
      this.$router.push(`/editor/${id}`);
    }
  },
  created () {
    getTopics().then(res => {
      if (res.ok) {
        return res.json();
      }
    }).then(topics => {
      console.log(topics);
      this.topics = topics;
    });
  }
};
</script>

<style>
.login-dialog .card__actions {
  justify-content: flex-end;
}

.search-bar {
  top: -100px;
  z-index: 5;
}

nav.search-bar.active {
  top: 0;
}
</style>
