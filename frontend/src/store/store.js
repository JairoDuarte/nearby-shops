import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
axios.defaults.baseURL = "http://localhost:3000/api/";

export const store = new Vuex.Store({
  state: {
    token: localStorage.getItem("access_token") || null
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
    destroyToken(state) {
      state.token = null;
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
        const token = response.data.access_token;
        localStorage.setItem("access_token", token);
        localStorage.setItem("user", response.data.user);
        context.commit("retrieveToken", token);
        console.log("sig");
        console.log(response.data);
        return response;
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
            .post("/auth/signout")
            .then(response => {
              localStorage.removeItem("access_token");
              context.commit("destroyToken");
              resolve(response);
            })
            .catch(error => {
              localStorage.removeItem("access_token");
              context.commit("destroyToken");
              reject(error);
            });
        });
      }
    }
  }
});
