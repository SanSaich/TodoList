import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nameList: "",
    token: false,
    lists: "",
    list: "",
    message: "",
    messageLogin: "",
    url: "https://sergey-melnikov-api.academy.smartworld.team/",
  },
  mutations: {
    saveNameList(state, payload) {
      state.nameList = payload;
    },
    saveList(state, payload) {
      state.list = payload;
    },
    saveLists(state, payload) {
      state.lists = payload;
    },
    resReg(state, payload) {
      state.message = payload;
    },
    resLogin(state, payload) {
      state.messageLogin = payload;
    },
    resToken(state) {
      state.token = true;
    },
  },
  actions: {
    async sendReg(context, body) {
      const url = context.state.url + "user/register";
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
      const url = context.state.url + "user/login";
      const headers = {
        "Content-Type": "application/json",
      };
      await fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: headers,
      }).then((res) => {
        if (res.ok) {
          res
            .json()
            .then((data) => {
              console.log(data.message);
              localStorage.setItem("access_token", data.data.access_token);
              context.commit("resToken");
            })
            .then(() => context.dispatch("getLists"));
        } else {
          res.json().then((error) => {
            console.log("ошибка:", error);
            context.commit("resLogin", error);
          });
        }
      });
    },

    async getLists(context) {
      const url = context.state.url + "list";
      const token = localStorage.getItem("access_token");
      console.log(token);
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      await fetch(url, {
        method: "GET",
        headers: headers,
      }).then((res) => {
        res.json().then((res) => {
          console.log(res);
          context.commit("saveLists", res.data.items);
        });
      });
    },

    async getListId(context, [id, name]) {
      const url =
        context.state.url +
        `task?filter[0][0]=list_id&filter[0][1]==&filter[0][2]=${id}`;
      const token = localStorage.getItem("access_token");
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      await fetch(url, {
        method: "GET",
        headers: headers,
      }).then((res) => {
        res.json().then((res) => {
          console.log(res);
          context.commit("saveList", res.data.items);
          console.log(name);
          context.commit("saveNameList", name);
        });
      });
    },

    async setList(context, name) {
      const url = context.state.url + "list";
      const token = localStorage.getItem("access_token");
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      const body = {
        attributes: {
          name: name,
        },
      };
      await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      })
        .then((res) => {
          res.json().then((res) => {
            console.log(res);
            console.log(name);
          });
        })
        .then(() => context.dispatch("getLists"));
    },

    async delListId(context, id) {
      const url = context.state.url + `list/delete/${id}`;
      const token = localStorage.getItem("access_token");
      console.log(id);
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      await fetch(url, {
        method: "DELETE",
        headers: headers,
      })
        .then((res) => {
          res.json().then((res) => {
            console.log(res);
          });
        })
        .then(() => context.dispatch("getLists"));
    },
  },
  modules: {},
});
