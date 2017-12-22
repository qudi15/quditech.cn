<template>

  <v-app>
    <v-toolbar color="white" fixed app>
      <v-btn icon @click="$router.back()">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title></v-toolbar-title>
      <v-spacer />
      <v-btn v-if="isLogin && !coding" icon @click="coding = !coding;">
        <v-icon>edit</v-icon>
      </v-btn>
      <v-btn v-if="coding" icon @click="save">
        <v-icon>save</v-icon>
      </v-btn>
      <login-btn></login-btn>
      <!-- <v-btn v-if="isLogin" icon @click="del">
        <v-icon>delete</v-icon>
      </v-btn> -->
    </v-toolbar>
    <v-content>
      <v-card v-if="!coding" style="width: 100%;">
        <v-card-title primary-title>
          <div>
            <div class="headline">{{ title }}</div>
            <div>
              <v-chip v-for="category of categoriesSelected" label outline color="primary" :key="category">
                <strong>{{ category }}</strong>
              </v-chip>
            </div>
              <div class="grey--text">Created: {{ timeCreated }}</div>
              <div class="grey--text">Modified: {{ timeModified }}</div>
          </div>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text v-html="compiledMarkdown">
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn flat icon>
            <v-icon color="yellow darken-2">star</v-icon>
          </v-btn>
          <v-btn flat icon color="grey--text">
            <v-icon color="grey lighten-1">star_border</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-expansion-panel expand v-if="coding">
        <v-expansion-panel-content>
          <div slot="header">Basic</div>
          <v-card>
            <v-card-text>
              <v-flex xs6>
                <v-text-field v-model="title" label="Title"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-select label="Categories" chips tags v-model="categoriesSelected" :items="categories" @input="onTagsInput">
                  <template slot="selection" slot-scope="data">
                    <v-chip label outline color="primary" close @input="remove(data.item)" :selected="data.selected">
                      <strong>{{ data.item }}</strong>
                    </v-chip>
                  </template>
                </v-select>
              </v-flex>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
        <v-expansion-panel-content value="true">
          <div slot="header">Code</div>
          <v-card>
            <v-card-text>
              <v-layout row>
                <v-flex xs12 v-if="coding">
                  <codemirror v-model="code" :options="cmOptions"></codemirror>
                </v-flex>
                <v-flex xs12 v-html="compiledMarkdown"></v-flex>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-loading :loading="loading" :resultCode="resultCode"></v-loading>
    </v-content>
  </v-app>
</template>
<script>
import 'codemirror/mode/markdown/markdown';
import { saveTopic, getTopic, updateTopic, getCategories } from '@/services';
import marked from 'marked';
export default {
  props: ['id'],
  data () {
    return {
      loading: false,
      resultCode: 200,
      title: '',
      code: '',
      coding: false,
      createdTime: 0,
      modifiedTime: 0,
      cmOptions: {
        tabSize: 2,
        mode: 'markdown',
        theme: 'neo',
        lineNumbers: true,
        line: true
      },
      categoriesSelected: [],
      categories: []
    };
  },

  async created () {
    const id = this.id;
    if (id) {
      getTopic(id)
        .then(res => res.json())
        .then(topics => {
          if (topics.length) {
            let topic = topics[0];
            this.title = topic.title;
            this.code = topic.code;
            this.createdTime = topic.createdTime;
            this.modifiedTime = topic.modifiedTime;
            this.categoriesSelected = topic.categoriesSelected || [];
          }
        });
    } else {
      this.coding = true;
      this.title = this.code = '';
    }

    const categories = await getCategories();
    console.log(categories);
    this.categories = categories.map(item => item._id);
  },

  computed: {
    compiledMarkdown: function () {
      return marked(this.code, { sanitize: true });
    },
    isLogin: function () {
      return this.$store.state.user.isLogin;
    },
    timeCreated: function () {
      return this.createdTime
        ? new Date(this.createdTime).toLocaleString()
        : '';
    },
    timeModified: function () {
      return this.modifiedTime
        ? new Date(this.modifiedTime).toLocaleString()
        : '';
    }
  },

  methods: {
    remove (item) {
      this.categoriesSelected.splice(this.categoriesSelected.indexOf(item), 1);
      this.categoriesSelected = [...this.categoriesSelected];
    },
    async save () {
      const params = {
        title: this.title,
        code: this.code,
        createdTime: this.createdTime,
        categoriesSelected: this.categoriesSelected
      };
      if (this.id) {
        try {
          await updateTopic(this.id, params);
          this.$store.dispatch('showAlert', {
            level: 'success',
            text: 'Update successfully.'
          });
          this.coding = false;
        } catch (e) {
          this.$store.dispatch('showAlert', {
            level: 'warning',
            text: 'Update unsuccessfully.'
          });
        }
      } else {
        try {
          const res = await saveTopic({ docs: [params] });
          console.log(res);
          this.$router.replace(`/editor/${res.ops[0].id}`);
          this.$store.dispatch('showAlert', {
            level: 'success',
            text: 'Create successfully.'
          });
          this.coding = false;
        } catch (e) {
          console.log(e);
          this.$store.dispatch('showAlert', {
            level: 'warning',
            text: 'Create unsuccessfully.'
          });
        }
      }
    },
    onTagsInput (selected) {
      const last = selected[selected.length - 1];
      if (this.categories.indexOf(last) < 0) {
        this.categories.push(last);
      }
    }
  }
};
</script>
<style>
.application--wrap,
.container {
  display: flex;
  height: 100%;
  /* flex: 1 1 100%; */
}
.reset-height,
.CodeMirror {
  height: 100%;
}

.fix-width {
  width: 100%;
}
</style>

<style scoped>
.sub-title {
  color: rgba(0, 0, 0, 0.5);
}
</style>




