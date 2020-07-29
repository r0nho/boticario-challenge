import { push } from 'connected-react-router';

import { createActions, createReducer } from 'reduxsauce';
import { authenticateUser, registerUser } from '../../services/auth';
import { Types as TypesUser } from './user';

/**
 * Interfaces
 */
interface AUTH {
  fetching: boolean;
  error: boolean;
  message: string | null;
  code: number | null;
  registred: boolean;
}

/**
 * Types e actions
 */
export const { Types, Creators } = createActions({
  errorAuthenticate: ['error'],
  fetching: null,
  registred: ['response'],
  unauthenticate: null,
});

export const login = (payload: object) => {
  return (dispatch: Function) => {
    dispatch({ type: Types.FETCHING, isFetching: true });

    authenticateUser(payload)
      .then(res => {
        const { token } = res;

        dispatch({
          token,
          type: TypesUser.SET_TOKEN,
        });

        push('/dashboard/home');
      })
      .catch((error: any) => {
        console.log(error);
      })
      .finally(() => {
        dispatch({ type: Types.FETCHING, isFetching: false });
      });
  };
};

export const register = (payload: object) => {
  return (dispatch: Function) => {
    dispatch({ type: Types.FETCHING, isFetching: true });

    registerUser(payload)
      .then(res => {
        const { token } = res;

        dispatch({ type: Types.REGISTRED, response: true });
        dispatch({
          token,
          type: TypesUser.SET_TOKEN,
        });
      })
      .catch(({ response }: any) => {
        console.log(response);
      })
      .finally(() => {
        dispatch({ type: Types.FETCHING, isFetching: false });
      });
  };
};

/**
 * Reducers
 */
const INITIAL_STATE: AUTH = {
  fetching: false,
  error: false,
  message: null,
  code: null,
  registred: false,
};

const setError = (state: AUTH = INITIAL_STATE, action: any) => {
  return {
    ...state,
    message: action?.data?.message || 'Ocorreu um erro inesperado',
    code: action.status,
    fetching: false,
    error: true,
  };
};

const setLoading = (state: AUTH = INITIAL_STATE, action: any) => {
  return {
    ...state,
    fetching: action.isFetching,
    error: false,
  };
};

const setRegistred = (state: AUTH = INITIAL_STATE, action: any) => {
  return {
    ...state,
    registred: action.response,
  };
};

const logout = () => {
  delete window.localStorage.token;
  return INITIAL_STATE;
};

export default createReducer(INITIAL_STATE, {
  [Types.ERROR_AUTHENTICATE]: setError,
  [Types.FETCHING]: setLoading,
  [Types.REGISTRED]: setRegistred,
  [Types.UNAUTHENTICATE]: logout,
});
