import { createActions, createReducer } from 'reduxsauce';
import { getPurchases } from 'services/purchases';

/**
 * Interfaces
 */
interface PURCHASE {
  fetching: boolean;
  purchases: PURCHASE[];
}

/**
 * Types e actions
 */
export const { Types, Creators } = createActions({
  setPurchases: ['purchases'],
  fetching: null,
});

export const getListPurchases = (payload: object) => {
  return (dispatch: Function) => {
    dispatch({ type: Types.FETCHING, isFetching: true });

    getPurchases()
      .then((res: { purchases: PURCHASE[] }) => {
        console.log(res);
        dispatch({ type: Types.SET_PURCHASES, list: res.purchases });
      })
      .catch((error: any) => {
        console.log(error);
      })
      .finally(() => {
        dispatch({ type: Types.FETCHING, isFetching: false });
      });
  };
};

/**
 * Reducers
 */
const INITIAL_STATE: PURCHASE = {
  fetching: true,
  purchases: [],
};

const setPurchaseList = (state: PURCHASE = INITIAL_STATE, action: any) => {
  console.log(action);

  return {
    ...state,
    purchases: action.list,
  };
};

const setLoading = (state: PURCHASE = INITIAL_STATE, action: any) => {
  return {
    ...state,
    loading: action.isFetching,
  };
};

export default createReducer(INITIAL_STATE, {
  [Types.SET_PURCHASES]: setPurchaseList,
  [Types.FETCHING]: setLoading,
});
