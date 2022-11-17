import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

const accountsStore = {
  namespaced: true,
  state: {
    token: "",
    user: {},
  },
  getters: {
    authHead: (state) => ({ Authorization: `Token ${state.token}` }),
    user: (state) => state.user,
  },
  mutations: {
    SET_TOKEN: (state, token) => ( state.token = token ),
    SET_USER: (state, user) => (state.user = user),
  },
  actions: {
    getUserInfo({ commit, getters }, username) {
      axios({
        method: "get",
        url: `${API_URL}/accounts/profile/${username}`,
      })
        .then((res) => {
          console.log(JSON.stringify(res));
          console.log(res)
          // commit("SET_USER", res.data);
          commit
          getters
        })
        .catch((err) => {
          console.log(err);
        });
    },
    login({  }, user) {
        console.log(user);
        // axios({
        //   method: "post",
        //   url: `${API_URL}/accounts/login/`,
        //   data: {...user}
        // })
  }
}
