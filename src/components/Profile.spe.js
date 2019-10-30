// import { Wrapper, shallowMount, createLocalVue, mount } from '@vue/test-utils';
// import Vuex from 'vuex';
// import Profile from '../Profile.vue';
// import store1 from '../../store';
// import { FETCH_PROFILE, FETCH_PROFILE_FOLLOW, FETCH_PROFILE_UNFOLLOW } from '../../store/actions.type';
// import { SET_PROFILE, SET_ERROR } from '../../store/mutations.type';
//
// // import { UserStore, UserMutations } from '~/store/user';
//
// // Wrapper.prototype.ref = function (id) {
// //   return this.find({ ref: id });
// // };
//
// // function flushPromises() {
// //   return new Promise(resolve => setImmediate(resolve));
// // }
// // console.log('Profile', Profile)
// // describe('Profile Component', () => {
// //   const EMPTY_FEED_TEXT = 'empty-whishlist-text';
// //   const PRELOADER = 'preloader';
// //   let params;
// //   let mocks;
// //
// //   let localVue;
// //   let store;
//
//   // function initLocalVue() {
//   //   localVue = createLocalVue();
//   //   localVue.use(Vuex);
//   //
//   //   store = new Vuex.Store(store1);
//   //   console.log('store', store)
//   //   store.commit(FETCH_PROFILE, {
//   //     data: jest.fn(),
//   //   });
//   // }
//   //
//   // beforeEach(() => {
//   //   initLocalVue();
//   //   params = {};
//   //   mocks = {
//   //     $t: data => data,
//   //   };
//   // });
//
//
//   // it('should toggle list and fetch comments', () => {
//   //   const username = { username: 'darcaia' };
//   //   wrapper.setProps({ username });
//   //
//   //   expect(wrapper.vm.showComments).toBe(false);
//   //
//   //   const $ws = {
//   //     sendObj: jest.fn(),
//   //   };
//   //   wrapper.vm.$ws = $ws;
//   //   wrapper.vm.toggleComments();
//   //
//   //   expect(wrapper.vm.showComments).toBe(true);
//   //   const actualArgs = $ws.sendObj.mock.calls[0];
//   //   expect(actualArgs[0]).toMatchObject({
//   //     type: 'fetchComments',
//   //     guid: post.guid,
//   //   });
//   // });
//
//
//   // it('sets the correct default props', () => {
//   //   const wrapper = mount(Profile);
//
//     // console.log(wrapper.html());
//   //   // const wrapper = shallowMount(Profile, {
//   //   //   localVue,
//   //   //   store,
//   //   //   mocks,
//   //   // });
//   //   // console.log('wrapper.vm', wrapper.vm)
//   //   // // expect(wrapper.vm.wishlist).toBe(null);
//   //   //
//   //   // expect(store.getters.profile).toHaveBeenCalledWith({
//   //   //   type: FETCH_PROFILE,
//   //   // });
//   // });
//
//   // it('should render preloader', () => {
//   //   const wrapper = shallowMount(Whishlist, {
//   //     localVue,
//   //     store,
//   //     mocks,
//   //   });
//   //   expect(wrapper.ref(PRELOADER).exists()).toBe(true);
//   //   expect(wrapper.ref(EMPTY_FEED_TEXT).exists()).toBe(false);
//   // });
//
//   // it('renders the correct message for empty Whishlist', async () => {
//   //   expect.assertions(2);
//   //
//   //   const wrapper = shallowMount(Whishlist, {
//   //     localVue,
//   //     store,
//   //     mocks,
//   //   });
//   //
//   //   store.state.user.other = {};
//   //   store.commit(`${UserStore}/${UserMutations.setWishlist}`, {
//   //     wishlist: [],
//   //   });
//   //
//   //   await flushPromises();
//   //
//   //   expect(wrapper.ref(EMPTY_FEED_TEXT).exists()).toBe(true);
//   //   expect(wrapper.ref(EMPTY_FEED_TEXT).text()).toBe('feed.isEmpty');
//   // });
// // });
