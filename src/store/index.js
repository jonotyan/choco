import Vue from 'vue';
import Vuex from 'vuex';
import { getDataFromPlaceHolder } from '@/api/users-requests';
import { serializeUsers } from '@/serializers/userSerializer';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    firstStart: true,
    user: {
      id: 0,
      name: null,
      username: null,
      email: null,
      phone: null,
      web: null,
      btn: 'edit',
    },
    users: [],
    curUserId: 0,
  },
  getters: {
    NAME: (state) => state.users[state.curUserId].name,
    USERNAME: (state) => state.users[state.curUserId].username,
    EMAIL: (state) => state.users[state.curUserId].email,
    PHONE: (state) => state.users[state.curUserId].phone,
    WEB: (state) => state.users[state.curUserId].website,
    USERS: (state) => state.users,
    CURRENT_USER_ID: (state) => state.curUserId,
    IS_START: (state) => state.firstStart,
  },
  mutations: {
    SET_DATA: (state, payload, id) => {
      state.user.id = id;
      state.user.name = payload.name;
      state.user.username = payload.username;
      state.user.email = payload.email;
      state.user.phone = payload.phone;
      state.user.website = payload.website;
      state.users.push(state.user);
      // console.log(state.user);
      state.user = {
        id: 0,
        name: null,
        username: null,
        email: null,
        phone: null,
        web: null,
        btn: 'edit',
      };
    },
    CHANGE_USER_ID: (state, payload) => {
      state.curUserId = payload;
    },
    UPDATE_DATA: (state, payload) => {
      state.users[state.curUserId].name = payload?.name || 'empty';
      state.users[state.curUserId].username = payload?.username || 'empty';
      state.users[state.curUserId].email = payload?.email || 'empty';
      state.users[state.curUserId].phone = payload?.phone || 'empty';
      state.users[state.curUserId].website = payload?.web || 'empty';
    },
    TURN_STARTER_OFF: (state) => {
      state.firstStart = false;
    },
  },
  actions: {
    SET_DATA: async (context) => {
      await getDataFromPlaceHolder().then((data) => {
        // console.log(context);
        const userList = serializeUsers(data);
        for (let i = 0; i < userList.length; i += 1) {
          // console.log(userList[i]);
          context.commit('SET_DATA', userList[i], i);
        }
      });
    },
    CHANGE_USER_ID: (context, payload) => {
      context.commit('CHANGE_USER_ID', payload);
    },
    UPDATE_DATA: (context, payload) => {
      context.commit('UPDATE_DATA', payload);
    },
    TURN_STARTER_OFF: (context) => {
      context.commit('TURN_STARTER_OFF');
    },
  },
  modules: {
  },
});
