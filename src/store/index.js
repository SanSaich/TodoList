import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    access_token: "",
    // lists: "",
    message: "",
  },
  mutations: {
    saveToken(state, payload) {
      state.access_token = payload;
    },
    // saveLists(state, payload) {
    //   state.lists = payload;
    // },
    resReg(state, payload) {
      state.message = payload;
    },
  },
  actions: {
    // async sendRequest(context, method, requestUrl, body = null, token = "") {
    //   const url = `http://sergey-melnikov-api.academy.smartworld.team/${requestUrl}`;
    //   const headers = {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${token}`,
    //   };

    //   if (body) {
    //     body = JSON.stringify(body);
    //   }

    //   await fetch(url, {
    //     method: method,
    //     body: body,
    //     headers: headers,
    //   }).then((response) => {
    //     response.json().then((data) => {
    //       if (data.data.access_token) {
    //         context.commit("saveToken", data.data.access_token);
    //       }
    //       if (data.data.items) {
    //         context.commit("saveLists", data.data.items);
    //       }
    //     });
    //   });
    // },

    async sendReg(context, body) {
      const url =
        "http://sergey-melnikov-api.academy.smartworld.team/user/register";
      const headers = {
        "Content-Type": "application/json",
      };
      await fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: headers,
      }).then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            console.log(data);
            context.commit("resReg", data.message);
          });
        } else {
          res.json().then((error) => {
            console.log("ошибка:", error);
            context.commit("resReg", error.email[0]);
          });
        }
      });
    },

    async sendLogin(context, body) {
      const url =
        "http://sergey-melnikov-api.academy.smartworld.team/user/login";
      const headers = {
        "Content-Type": "application/json",
      };
      await fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: headers,
      }).then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            console.log(data.message);
            context.commit("saveToken", data.data.access_token);
          });
        } else {
          res.json().then((error) => console.log("ошибка:", error));
        }
      });
    },
  },
  modules: {},
});
