export const state = () => ({
  users: [],
});

export const mutations = {
  setUsersList(state, usersList) {
    state.users = usersList;
  },
};

export const getters = {
  users: (state) => state.users,
};

export const actions = {
  async fetchUsers({ commit }) {
    try {
      const users = await this.$axios.$get(
        "https://jsonplaceholder.typicode.com/users"
      );
      commit("setUsersList", users);
    } catch (e) {
      throw e;
    }
  },
  async fetchUserById({}, userId) {
    console.log(userId);
    try {
      const user = await this.$axios.$get(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      return user;
    } catch (e) {
      throw e;
    }
  },
};
