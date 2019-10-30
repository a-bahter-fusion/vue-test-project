import Vue from 'vue';
import Vuex from 'vuex';
import { FETCH_PROFILE, FETCH_PROFILE_FOLLOW, FETCH_PROFILE_UNFOLLOW } from '@/store/actions.type';
import profile from '@/store/profile.module';

const setDataMock = jest.fn();

Vue.use(Vuex);

const state = {
  profile: {},
};

export const mutations = {
  // eslint-disable-next-line no-shadow
  SET_PROFILE(state: any, profile: any) {
    state.profile = profile;
  },
};
export const actions = {
  fetchProfileFolloww({ commit }: any) {
    return () => new Promise(res => res({ data: { success: true, followedByMe: true } }))
      .then((response: any) => {
        console.log('res', response);
        commit('SET_PROFILE', response.data);
      })
      .catch(err => console.log(err));
  },
};

// eslint-disable-next-line import/prefer-default-export
export const storeMock = Object.freeze({
  state: {
    profile: {
      image: '',
      username: '',
      following: false,
    },
  },
  modules: {
    profile,
  },
  mutations: {
    SET_PROFILE: jest.fn(),
  },
  actions: {
    [FETCH_PROFILE]: jest.fn().mockName('fetchProfile'),
    [FETCH_PROFILE_FOLLOW]: jest.fn().mockName('fetchProfileFollow'),
    [FETCH_PROFILE_UNFOLLOW]: jest.fn().mockName('fetchProfileUnfollow'),
    // getProfile: jest.fn().mockName('getProfile'),
    getProfile: () => new Promise(res => res({ data: 'GET apiRequestMock' })),
    post: () => new Promise(res => res({ data: { success: true, followedByMe: true } })),
  },
});

const store = new Vuex.Store({
  state,
  mutations,
  actions,
});
export default store;
