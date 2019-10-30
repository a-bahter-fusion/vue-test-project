import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { API_URL } from '@/common/config';

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
    Vue.axios.defaults.headers.common.Authorization = 'Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NzI1MDksInVzZXJuYW1lIjoidmNjeHYiLCJleHAiOjE1Nzc0NTk0Nzl9.lOCoh1PiGMdVjLdO2q-uEWuaFIY6d28GAhgl1cGXOBY';
  },

  get(resource: any, slug = '') {
    return axios.get(`${resource}/${slug}`).catch((error) => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  post(resource: any, params: any) {
    return axios.post(`${resource}`, params);
  },

  delete(resource: any) {
    return axios.delete(resource).catch((error) => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },
};

export default ApiService;
