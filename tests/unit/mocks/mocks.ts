import Vue from 'vue';
import Vuex from 'vuex';
import { FETCH_PROFILE, FETCH_PROFILE_FOLLOW, FETCH_PROFILE_UNFOLLOW } from '@/store/actions.type';
import profile from '@/store/profile.module';

Vue.use(Vuex);

export const storeMock = Object.freeze({
  state: {
    profile: {
      avatar: '',
      screenName: '',
      followers: 0,
      followedByMe: false,
    },
    errors: {},
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
  },
});
