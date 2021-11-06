import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: "",
    password: "",
    email: "",
    access_token: "",
    lists: "",
  },
  mutations: {
    updateLogin(state, payload) {
      state.login = payload;
    },
    saveToken(state, payload) {
      state.access_token = payload;
    },
    saveLists(state, payload) {
      state.lists = payload.data.items;
    },
  },
  actions: {
    async sendRequest(context, method, requestUrl, body = null, token = "") {
      const url = `http://sergey-melnikov-api.academy.smartworld.team/${requestUrl}`;
      const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      };

      if (body) {
        body = JSON.stringify(body);
      }

      await fetch(url, {
        method: method,
        body: body,
        headers: headers,
      }).then((response) => {
        response.json().then((data) => {
          if (data.data.access_token) {
            context.commit("saveToken", data.data.access_token);
          }
          if (data.data.items) {
            context.commit("saveLists", data);
          }
        });
      });
    },
  },
  modules: {},
});
