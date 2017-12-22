import { login } from '@/services';
export default {
  state: {
    isLogin: false,
    isSignInDialogShow: false,
    token: ''
  },
  getters: {
    isSignInDialogShow (state) {
      return state.isSignInDialogShow;
    }
  },
  mutations: {
    changeLoginDialogStatus (state, isShow) {
      state.isSignInDialogShow = isShow;
    },
    changeLoginStatus (state, isLogin) {
      state.isLogin = isLogin;
    },
    changeToken (state, token) {
      state.token = token;
    }
  },
  actions: {
    async login (content, token) {
      let res = await login(token);
      if (res.ok) {
        content.commit('changeToken', token);
        content.commit('changeLoginStatus', true);
        return res;
      } else {
        content.commit('changeToken', '');
        content.commit('changeLoginStatus', false);
        return Promise.reject(new Error('error'));
      }
    },
    showSignInDialog (content) {
      content.commit('changeLoginDialogStatus', true);
    },
    hideSignInDialog (content) {
      content.commit('changeLoginDialogStatus', false);
    }
  }
};
