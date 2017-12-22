import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/pages/home';
import BlogsPage from '@/pages/blog';
import EditorPage from '@/pages/editor';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: HomePage
  }, {
    path: '/blogs',
    name: 'Blogs',
    component: BlogsPage
  }, {
    path: '/editor/:id',
    name: 'Editor',
    component: EditorPage,
    props: true
  }, {
    path: '/editor',
    name: 'Editor',
    component: EditorPage
  }]
});
