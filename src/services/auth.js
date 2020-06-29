import { API } from '../configs/api';

export function authenticateUser(payload) {
  return new Promise((resolve, reject) => {
    API.post('/login', payload)
      .then(res => resolve(res?.data || res))
      .catch(error => reject(error?.response?.data || error));
  });
}

export function registerUser(payload) {
  return new Promise((resolve, reject) => {
    API.post('/register', payload)
      .then(res => resolve(res?.data || res))
      .catch(error => reject(error?.response?.data || error));
  });
}
