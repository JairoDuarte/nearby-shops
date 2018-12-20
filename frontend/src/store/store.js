import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
axios.defaults.baseURL = "http://localhost:3000/api/";

export const store = new Vuex.Store({
  state: {
    token: localStorage.getItem("access_token") || null,
    user: JSON.parse(JSON.stringify(localStorage.getItem("user"))) || null,
    position:
      JSON.parse(JSON.stringify(localStorage.getItem("position"))) || null
  },
  getters: {
    loggedIn(state) {
      return state.token !== null;
    }
  },
  mutations: {
    retrieveToken(state, token) {
      state.token = token;
    },
    retrieveUser(state, user) {
      state.user = user;
    },
    retrievePosition(state, position) {
      state.position = position;
    },
    destroyToken(state) {
      state.token = null;
    },
    destroyUser(state) {
      state.user = null;
    }
  },
  actions: {
    register(context, { user }) {
      return new Promise((resolve, reject) => {
        axios
          .post("/auth/signup", {
            name: user.name,
            email: user.email,
            password: user.password
          })
          .then(response => {
            resolve(response);
          })
          .catch(error => {
            console.log(error.response);
            reject(error);
          });
      });
    },
    async signin(context, { user }) {
      console.log(user.email);
      try {
        const response = await axios.post("/auth/signin", {
          email: user.email,
          password: user.password
        });
        const data = response.data.data;
        localStorage.setItem("access_token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        context.commit("retrieveToken", data.token);
        context.commit("retrieveUser", data.user);
        console.log(context.state.position);
        return data;
      } catch (e) {
        console.log(e.response);
        throw e.response;
      }
    },
    signout(context) {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + context.state.token;

      if (context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          axios
            .post("/auth/signout", { refreshToken: context.state.token })
            .then(response => {
              localStorage.removeItem("access_token");
              localStorage.removeItem("user");
              context.commit("destroyToken");
              context.commit("destroyUser");
              resolve(response);
            })
            .catch(error => {
              localStorage.removeItem("access_token");
              context.commit("destroyToken");
              localStorage.removeItem("user");
              context.commit("destroyUser");

              reject(error);
            });
        });
      }
    }
  }
});
