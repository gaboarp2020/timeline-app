import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const URL = "http://localhost:3000";

export default new Vuex.Store({
  state: {
    elements: [
      {
        id: "987c332c-712e-47d4-b64f-de9f9dac10a9",
        color: "#54A8E6",
        description:
          "On November 9, 1989, the Berlin Wall was inaugurated, which had divided the city for almost 30 years",
        title: "Fall of the Berlin wall ",
        year: 1989,
      },
      {
        id: "f3952c73-cbda-459b-8dd0-0e8992b78ced",
        color: "#688BDE",
        description:
          "After the consecration of Spain against the Netherlands, this World Cup was the first played outside Europe in which a team from that continent was proclaimed champion",
        title: "2010 FIFA World Cup",
        year: 2010,
      },
      {
        id: "4e0c4b46-4447-48ca-befa-696d4ff2dae3",
        color: "#A08ADD",
        description:
          "On July 25, 1992, the Barcelona Olympic Games were inaugurated",
        title: "Barcelona Olympic Games",
        year: 1992,
      },
    ],
    notifications: [],
    notificationCount: 0,
  },
  mutations: {
    POPULATE_ELEMENTS: (state, elements) => {
      state.elements = [...elements];
    },
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
    ADD_NOTIFICATION: (state, notification) => {
      state.notifications = [...state.notifications, notification];
    },
    CLEAR_NOTIFICATIONS: (state) => {
      state.notifications = [];
    },
    NOTIFICATION_COUNT_INCREMENT: (state) => {
      state.notificationCount++;
    },
    NOTIFICATION_COUNT_RESET: (state) => {
      state.notificationCount = 0;
    },
  },
  actions: {
    async populateElementsAction({ commit }) {
      await axios.get(`${URL}/elements`).then((response) => {
        commit("POPULATE_ELEMENTS", response.data);
      });
    },
    async asyncAddElementAction({ dispatch }, element) {
      await axios.post(`${URL}/elements`, element).then((response) => {
        if (response.status === 201) {
          dispatch("populateElementsAction").catch((error) => {
            console.log(error);
          });
        }
      });
    },
    async asyncUpdateElementAction({ dispatch }, element) {
      await axios
        .put(`${URL}/elements/${element.id}`, element)
        .then((response) => {
          if (response.status === 200) {
            dispatch("populateElementsAction").catch((error) => {
              console.log(error);
            });
          }
        });
    },
    async asyncDeleteElementAction({ dispatch }, elementId) {
      console.log(elementId);
      await axios.delete(`${URL}/elements/${elementId}`).then((response) => {
        if (response.status === 200) {
          dispatch("populateElementsAction").catch((error) => {
            console.log(error);
          });
        }
      });
    },
    addElementAction: ({ commit }, element) => {
      commit("ADD_ELEMENT", element);
    },
    updateElementAction: ({ commit }, element) => {
      commit("UPDATE_ELEMENT", element);
    },
    deleteElementAction: ({ commit }, elementId) => {
      commit("DELETE_ELEMENT", elementId);
    },
    addNotificationAction: ({ commit }, notification) => {
      commit("ADD_NOTIFICATION", notification);
      commit("NOTIFICATION_COUNT_INCREMENT", notification);
    },
    clearNotificationAction: ({ commit }) => {
      commit("CLEAR_NOTIFICATIONS");
      commit("NOTIFICATION_COUNT_RESET");
    },
  },
  getters: {
    getOrderedElementByYear: (state) => {
      return state.elements.sort((a, b) => b.year - a.year);
    },
  },
});
