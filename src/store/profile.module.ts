import ApiService from '@/common/api.service';
import {
  FETCH_PROFILE,
  FETCH_PROFILE_FOLLOW,
  FETCH_PROFILE_UNFOLLOW,
} from './actions.type';
import { SET_PROFILE, SET_ERROR } from './mutations.type';

const state = {
  errors: {},
  profile: {
    avatar: '',
    screenName: '',
    followers: 0,
    followedByMe: false,
  },
};

const getters = {
  // eslint-disable-next-line no-shadow
  profile(state: any) {
    return state.profile;
  },
};

const actions = {
  [FETCH_PROFILE](context: any, payload: any) {
    const { username } = payload;

    return ApiService.get('profiles', username)
      .then(({ data }) => {
        context.commit(SET_PROFILE, data.profile);
        return data;
      })
      .catch((err) => {
        context.commit(SET_ERROR, err.message);
      });
  },
  [FETCH_PROFILE_FOLLOW](context: any, payload: any) {
    const { username } = payload;

    return ApiService.post(`profiles/${username}/follow`, username)
      .then(({ data }) => {
        context.commit(SET_PROFILE, data.profile);
        return data;
      })
      .catch((err) => {
        context.commit(SET_ERROR, err.message);
      });
  },
  [FETCH_PROFILE_UNFOLLOW](context: any, payload: any) {
    const { username } = payload;

    return ApiService.post(`profiles/${username}/unfollow`, username)
      .then(({ data }) => {
        context.commit(SET_PROFILE, data.profile);
        return data;
      })
      .catch((err) => {
        context.commit(SET_ERROR, err.message);
      });
  },
};

const mutations = {
  // eslint-disable-next-line no-shadow
  [SET_ERROR](state: any, error: any) {
    state.errors = error;
  },
  // eslint-disable-next-line no-shadow
  [SET_PROFILE](state: any, profile: any) {
    state.profile = profile;
    state.errors = {};
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
