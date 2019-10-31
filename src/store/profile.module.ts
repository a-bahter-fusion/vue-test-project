import { ActionContext } from 'vuex';
import axios from '@/common/api.service';
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
  async [FETCH_PROFILE](context: ActionContext<object, object>, { userId, id } :
    { userId?: number, id?: number} = {}) {
    try {
      const response = await axios({
        method: 'GET',
        url: `user/${userId}/profile?viewerId=${id}`,
      });

      context.commit(SET_PROFILE, response.profile);
    } catch (error) {
      context.commit(SET_ERROR, error.message);
    }
  },
  async [FETCH_PROFILE_FOLLOW](context: ActionContext<object, object>, { userId, id } :
    { userId?: number, id?: number } = {}) {
    try {
      const response = await axios({
        method: 'POST',
        url: `user/${userId}/follow?by=${id}`,
      });

      context.commit(SET_PROFILE, response.profile);
    } catch (error) {
      context.commit(SET_ERROR, error.message);
    }
  },
  async [FETCH_PROFILE_UNFOLLOW](context: ActionContext<object, object>, { userId, id } :
    { userId?: number, id?: number } = {}) {
    try {
      const response = await axios({
        method: 'POST',
        url: `user/${userId}/unfollow?by=${id}`,
      });

      context.commit(SET_PROFILE, response.profile);
    } catch (error) {
      context.commit(SET_ERROR, error.message);
    }
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
