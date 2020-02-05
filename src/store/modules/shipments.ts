import { createActions, createReducer } from 'reduxsauce';
import { Shipment as SHIPMENT } from 'interfaces/shipments/shipment.interface';
/**
 * Interfaces
 */
interface SHIPMENTS {
    // tslint:disable-next-line: prefer-array-literal
    list: Array<SHIPMENT>;
    currentShipment: {};
}

/**
 * Types & actions
 */
export const { Types, Creators } = createActions({
    setShipments: ['shipments'],
    setCurrentShipment: ['shipment'],
});

/**
 * Reducers
 */
const INITIAL_STATE: SHIPMENTS = {
    list: [],
    currentShipment: {},
};

const setShipmentsList = (state: SHIPMENTS = INITIAL_STATE, action: any) => {
    return {
        ...state,
        list: action.shipments,
    };
};

const setSelectedShipment = (state: SHIPMENTS = INITIAL_STATE, action: any) => {
    return {
        ...state,
        currentShipment: action.shipment,
    };
};


export default createReducer(INITIAL_STATE, {
    [Types.SET_CURRENT_SHIPMENT]: setSelectedShipment,
    [Types.SET_SHIPMENTS]: setShipmentsList,
});
