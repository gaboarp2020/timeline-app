import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    elements: [],
    notifitacions: [],
    unseenNotifitacionsCount: 0,
  },
  mutations: {
    addElement: (state, element) => {
      state.elements.push(element);
    },
    incrementUnseenNotifitacionsCount: (state) => {
      state.unseenNotifitacionsCount++;
    },
    resetUnseenNotifitacionsCount: (state) => {
      state.unseenNotifitacionsCount = 0;
    },
  },
  actions: {
    addElementAction: ({ commit }, payload) => {
      commit("addElement", payload);
    },
    incrementUnseenNotifitacionsCountAction: ({ commit }) => {
      commit("incrementUnseenNotifitacionsCount");
    },
    resetUnseenNotifitacionsCountAction: ({ commit }) => {
      commit("resetUnseenNotifitacionsCount");
    },
  },
  // getters: {
  //   getElementById: (state) => (id) => {
  //     return state.todos.find(todo => todo.id === id)
  //   }
  // },
});
