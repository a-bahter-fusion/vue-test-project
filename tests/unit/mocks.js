import { FETCH_PROFILE } from '@/store/actions.type';

// eslint-disable-next-line import/prefer-default-export
export const storeMock = Object.freeze({
  state: {},
  actions: {
    [FETCH_PROFILE]: jest.fn().mockName('FETCH_PROFILE'),
  },
});
