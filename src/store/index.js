import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataUrl: '',
    exifData: [],
  },
  mutations: {
    SET_DATA_URL(state, data) {
      state.dataUrl = data;
    },
    SET_EXIF_DATA(state, data) {
      state.exifData = data;
    },
  },
  actions: {
    setDataUrl({ commit }, data) {
      commit('SET_DATA_URL', data);
    },
    setExifData({ commit }, data) {
      commit('SET_EXIF_DATA', data);
    },
  },
  modules: {
  },
});
