import axios from 'axios';
import { API_URL, TOKEN } from '@/common/config';


const axiosWrapper = async (data: any) => {
  try {
    const { data: res } = await axios({
      headers: {
        common: {
          Authorization: `Token ${TOKEN}`,
        },
      },
      ...data,
      url: `${API_URL}/${data.url}`,
    });
    return res;
  } catch (error) {
    console.error(`axios ${error}`);
    throw new Error(`axios ${error}`);
  }
};

export default axiosWrapper;
