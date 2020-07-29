import { API } from '../configs/api';

export function getPurchases() {
  return new Promise((resolve, reject) => {
    API.get('/purchases')
      .then(res => resolve(res?.data || res))
      .catch(error => reject(error?.response?.data || error));
  });
}
