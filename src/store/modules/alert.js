export default {
  state: {
    isShow: false,
    level: 'info',
    text: ''
  },
  getters: {
    alertIsShow: state => state.isShow,
    alertLevel: state => state.level,
    alertText: state => state.text
  },
  actions: {
    showAlert (content, { level, text }) {
      console.log(arguments);
      content.state.level = level;
      content.state.text = text;
      content.state.isShow = true;
    },
    hideAlert (content) {
      content.state.isShow = false;
    }
  }
};
