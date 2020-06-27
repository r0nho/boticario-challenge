import { createActions, createReducer } from 'reduxsauce';
// import { Shipment as SHIPMENT } from 'interfaces/USER/shipment.interface';

/**
 * Interfaces
 */
interface USER {
  email: string;
  name: string;
  cpf: string;
}

/**
 * Types & actions
 */
export const { Types, Creators } = createActions({
  setUser: ['user'],
});

/**
 * Reducers
 */
const INITIAL_STATE: USER = {
  email: '',
  name: '',
  cpf: '',
};

const setCurrentUser = (state: USER = INITIAL_STATE, action: any) => {
  return {
    ...state,
  };
};

export default createReducer(INITIAL_STATE, {
  [Types.SET_USER]: setCurrentUser,
});
