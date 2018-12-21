import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
axios.defaults.baseURL = "http://localhost:3000/api/";

export const store = new Vuex.Store({
  state: {
    token: localStorage.getItem("access_token") || null,
    user: JSON.parse(JSON.stringify(localStorage.getItem("user"))) || null,
    position: {},
    shops: [],
    likedshops: []
  },
  getters: {
    loggedIn(state) {
      return state.token !== null;
    },
    filteredShops(state) {
      if (state.likedshops.length > 0) {
        let shops = state.shops.filter(
          shop => !state.likedshops.some(s => s.name == shop.name)
        );
        return shops;
      }
      return state.shops;
    },
    shopById: (state) => (id) => {
      return state.shops.find(item => item.id == id);
    },
    preferredShops(state) {
      return state.likedshops;
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
    retrieveShops(state, shops) {
      state.shops = shops;
    },
    retrievePreferredShops(state, shops) {
      state.likedshops = shops;
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
    retrieveShops(context) {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + context.state.token;
      axios
        .get(
          `/shops/${context.state.position.latitude}/${
            context.state.position.longitude
          }`
        )
        .then(response => {
          context.commit("retrieveShops", response.data.shops);
        })
        .catch(error => {
          console.log(error);
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
    },
    likeShop(context, id) {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + context.state.token;
      let shop = context.getters.shopById(id);
      shop.photos = shop.photos ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000&photoreference=${shop.photos[0].photo_reference}&key=AIzaSyDLM_8zXIjzv3eGyUkmpEKhcGUDhRzNHvI` : `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000&photoreference=&key=AIzaSyDLM_8zXIjzv3eGyUkmpEKhcGUDhRzNHvI`
      axios
        .post("/users/addlike", {
          id: shop.id,
          name: shop.name,
          photos: shop.photos,
          address: shop.vicinity
        })
        .then(response => {
          context.commit("retrievePreferredShops", response.data.likesShops);
        })
        .catch(error => {
          console.log(error.response);
        });
    },
    dislikeShop(context, id) {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + context.state.token;
      let shop = context.getters.shopById(id);
      axios
        .post("/users/adddislike", {
          id: shop.id,
          name: shop.name,
          photos: shop.photos,
          address: shop.vicinity
        })
        .then(response => {
          context.commit("retrievePreferredShops", response.data.dislikesShops);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
});
