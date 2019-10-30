import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import Profile from '@/components/Profile.vue';
import { storeMock } from './mocks/mocks';

describe('Profile.vue', () => {
  let store: any;
  const localVue = createLocalVue();
  localVue.use(Vuex);

  beforeEach(() => {
    store = new Vuex.Store(storeMock);
  });

  it('render Profile component', () => {
    const wrapper = shallowMount(Profile, {
      store,
      localVue,
    });

    expect(wrapper.isVueInstance()).toBeTruthy();
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
        errors: {},
        profile: {
          avatar: '',
          screenName: '',
          followers: 0,
          followedByMe: false,
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
    expect(storeMock.state.profile).toMatchObject(
      {
        errors: {},
        profile: {
          avatar: '',
          screenName: '',
          followers: 0,
          followedByMe: false,
        },
      },
    );
  });
});
