import { createActions, createReducer } from 'reduxsauce';
import { getPurchases } from 'services/purchases';
import { Data } from 'models/table/data.model';

/**
 * Interfaces
 */
interface PURCHASE {
  fetching: boolean;
  purchases: Data[];
}

/**
 * Types e actions
 */
export const { Types, Creators } = createActions({
  setPurchases: ['purchases'],
  updatePurchase: ['newPurchase'],
  fetching: null,
});

export const getListPurchases = () => {
  return (dispatch: Function) => {
    dispatch({ type: Types.FETCHING, isFetching: true });

    getPurchases()
      .then((res: { purchases: PURCHASE[] }) => {
        dispatch({ type: Types.SET_PURCHASES, list: res.purchases });
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
  return {
    ...state,
    purchases: action.list,
  };
};

const updatePurchaseItem = (state: PURCHASE = INITIAL_STATE, action: any) => {
  const purchases = state.purchases.map((item: Data) => {
    if (item.code === action.newPurchase.code) {
      item.status = action.newPurchase.status;
    }

    return item;
  });

  return {
    ...state,
    purchases,
  };
};

const setLoading = (state: PURCHASE = INITIAL_STATE, action: any) => {
  return {
    ...state,
    fetching: action.isFetching,
  };
};

export default createReducer(INITIAL_STATE, {
  [Types.SET_PURCHASES]: setPurchaseList,
  [Types.UPDATE_PURCHASE]: updatePurchaseItem,
  [Types.FETCHING]: setLoading,
});
