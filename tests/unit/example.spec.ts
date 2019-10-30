import { createLocalVue, shallowMount, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import Profile from '@/components/Profile.vue';
import storeApp from '../../src/store';
import profile from '../../src/store/profile.module';
// eslint-disable-next-line import/extensions
import { storeMock } from './mocks/mocks';
import { apiRequest } from './mocks/api';

import { FETCH_PROFILE, FETCH_PROFILE_FOLLOW } from '@/store/actions.type';
import { SET_PROFILE } from '@/store/mutations.type';


describe('Profile.vue', () => {
  // let params;
  // let mocks;
  // let localVue;
  let store: any;
  let actions: any;
  let mocks:any;
  let setDataMock;

  const localVue = createLocalVue();
  localVue.use(Vuex);

  beforeEach(() => {
    actions = {
      [FETCH_PROFILE]: jest.fn(),
    };
    jest.clearAllMocks();
    store = new Vuex.Store(storeMock);
  });

  it('render Profile component', () => {
    const wrapper = shallowMount(Profile, {
      store,
      localVue,
    });

    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(storeMock.state.profile).toHaveProperty(['errors', 'profile']);
    expect(storeMock.actions.fetchProfile).toHaveBeenCalled();
    expect(wrapper.find('button')
      .text().trim()).toEqual('Follow');
  });

  it('Profile action fetchProfileFollow', () => {
    const wrapper = shallowMount(Profile, {
      store,
      localVue,
    });

    wrapper.find('button').trigger('click');

    expect(storeMock.actions.fetchProfileFollow).toHaveBeenCalled();

    expect(storeMock.state.profile).toMatchObject(
      {
        error: {},
        profile: {
          image: '',
          username: '',
          following: false,
        },
      },
    );
  });

  it('Profile action fetchProfileUnfollow', () => {
    const wrapper = shallowMount(Profile, {
      store,
      localVue,
    });

    wrapper.find('button').trigger('click');
    wrapper.find('button').trigger('click');

    expect(storeMock.actions.fetchProfileUnfollow).toHaveBeenCalled();
  });
});
