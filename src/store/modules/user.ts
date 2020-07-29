import { createActions, createReducer } from 'reduxsauce';
import jwt_token from 'jwt-decode';

/**
 * Interfaces
 */
interface USER {
  name: string;
  email: string;
  cpf: string;
  token: string;
  avatar: string;
}

/**
 * Types e actions
 */
export const { Types, Creators } = createActions({
  setUser: ['user'],
  setToken: ['token'],
});

/**
 * Reducers
 */
const INITIAL_STATE: USER = {
  name: '',
  email: '',
  cpf: '',
  token: '',
  avatar: '',
};

const setCurrentUser = (state: USER = INITIAL_STATE, action: any) => {
  return {
    ...action.user,
  };
};

const setCurrentToken = (state: USER = INITIAL_STATE, action: any) => {
  const data: USER = jwt_token(action.token);
  const { name, cpf, email, avatar } = data;

  const user: USER = {
    name,
    cpf,
    email,
    avatar,
    token: action.token,
  };

  window.localStorage.setItem('token', action.token);

  return {
    ...user,
  };
};

export default createReducer(INITIAL_STATE, {
  [Types.SET_USER]: setCurrentUser,
  [Types.SET_TOKEN]: setCurrentToken,
});
