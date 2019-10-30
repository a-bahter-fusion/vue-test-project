import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { API_URL, TOKEN } from '@/common/config';

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
    Vue.axios.defaults.headers.common.Authorization = `Token ${TOKEN}`;
  },

  get(resource: any, slug = '') {
    return axios.get(`${resource}/${slug}`).catch((error) => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  post(resource: any, params: any) {
    return axios.post(`${resource}`, params).catch((error) => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },
};

export default ApiService;
