import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    elements: [
      {
        color: "#00CDFFFF",
        description:
          "Esta es una prueba dude, quieras o no todo depende de esto.",
        id: "987c332c-712e-47d4-b64f-de9f9dac10a9",
        title: "Hola",
        year: 2015,
      },
      {
        color: "#CD12EEFF",
        description:
          "Y esta otra prueba más interesante! A que si? Pues no tengo mas nada que decir.",
        id: "f3952c73-cbda-459b-8dd0-0e8992b78ced",
        title: "Que hace?",
        year: 2010,
      },
      {
        color: "#0FE66DFF",
        description: "Viva el verde!!",
        id: "4e0c4b46-4447-48ca-befa-696d4ff2dae3",
        title: "Verde",
        year: 2003,
      },
    ],
    notifitacions: [],
    unseenNotifitacionsCount: 0,
  },
  mutations: {
    ADD_ELEMENT: (state, element) => {
      state.elements = [...state.elements, element];
    },
    UPDATE_ELEMENT: (state, elementToUpdate) => {
      const key = state.elements.findIndex(
        (element) => element.id === elementToUpdate.id
      );
      state.elements.splice(key, 1);
      state.elements = [...state.elements, elementToUpdate];
    },
    DELETE_ELEMENT: (state, elementId) => {
      const key = state.elements.findIndex(
        (element) => element.id === elementId
      );
      state.elements.splice(key, 1);
    },
    incrementUnseenNotifitacionsCount: (state) => {
      state.unseenNotifitacionsCount++;
    },
    resetUnseenNotifitacionsCount: (state) => {
      state.unseenNotifitacionsCount = 0;
    },
  },
  actions: {
    addElementAction: ({ commit }, element) => {
      commit("ADD_ELEMENT", element);
    },
    updateElementAction: ({ commit }, element) => {
      commit("UPDATE_ELEMENT", element);
    },
    deleteElementAction: ({ commit }, elementId) => {
      commit("DELETE_ELEMENT", elementId);
    },
    incrementUnseenNotifitacionsCountAction: ({ commit }) => {
      commit("incrementUnseenNotifitacionsCount");
    },
    resetUnseenNotifitacionsCountAction: ({ commit }) => {
      commit("resetUnseenNotifitacionsCount");
    },
  },
  getters: {
    getOrderedElementByYear: (state) => {
      return state.elements.sort((a, b) => b.year - a.year);
    },
  },
});
