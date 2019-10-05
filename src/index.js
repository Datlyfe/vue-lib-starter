let installed = false;

export default {
  install: function(Vue, params = {}) {
    if (installed) return;
    installed = true;
  }
};
