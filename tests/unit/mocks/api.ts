export const apiRequest = {
  get: () => new Promise(res => res({ data: 'GET apiRequestMock' })),
  post: () => new Promise(res => res({ data: { success: true, followedByMe: true } })),
};
