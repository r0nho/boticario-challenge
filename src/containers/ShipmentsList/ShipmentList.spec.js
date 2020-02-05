import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import ShipmentsService from 'services/shipments';
import { SelectInput } from 'components/Inputs';
import MenuItem from '@material-ui/core/MenuItem';

import _ from 'underscore';

jest.mock('underscore', () => {
  return { 'debounce': jest.fn((fn) => fn)};
});


const shipment = [{
  "id": "S1000",
  "name": "T-shirts(Summer2018) from Shanghai to Hamburg",
  "cargo": [
    {
      "type": "Fabric",
      "description": "1000 Blue T-shirts",
      "volume": "2"
    },
    {
      "type": "Fabric",
      "description": "2000 Green T-shirts",
      "volume": "3"
    }
  ],
  "mode": "sea",
  "type": "FCL",
  "destination": "Saarbrücker Str. 38, 10405 Berlin",
  "origin": "Shanghai Port",
  "services": [
    {
      "type": "customs"
    }
  ],
  "total": "1000",
  "status": "ACTIVE",
  "userId": "U1000"
},];


const multipleShipments = [
  {
  "id": "S1002",
  "name": "T-shirts(Summer2018) from Shanghai to Hamburgg",
  "cargo": [
    {
      "type": "Fabric",
      "description": "1000 Blue T-shirts",
      "volume": "2"
    },
    {
      "type": "Fabric",
      "description": "2000 Green T-shirts",
      "volume": "3"
    }
  ],
  "mode": "sea",
  "type": "FCL",
  "destination": "Saarbrücker Str. 38, 10405 Berlin",
  "origin": "Shanghai Port",
  "services": [
    {
      "type": "customs"
    }
  ],
  "total": "1000",
  "status": "ACTIVE",
  "userId": "U1000"
},
{
  "id": "S1001",
  "name": "T-shirts(Summer2018) from Shanghai to Hamburg1g",
  "cargo": [
    {
      "type": "Fabric",
      "description": "1000 Blue T-shirts",
      "volume": "2"
    },
    {
      "type": "Fabric",
      "description": "2000 Green T-shirts",
      "volume": "3"
    }
  ],
  "mode": "sea",
  "type": "FCL",
  "destination": "Saarbrücker Str. 38, 10405 Berlin",
  "origin": "Shanghai Port",
  "services": [
    {
      "type": "customs"
    }
  ],
  "total": "1000",
  "status": "ACTIVE",
  "userId": "U1000"
}];

jest.mock('services/shipments', () => {
  return {
    getShipments: () => {
      const response = [{
        "id": "S1000",
        "name": "T-shirts(Summer2018) from Shanghai to Hamburg",
        "cargo": [
          {
            "type": "Fabric",
            "description": "1000 Blue T-shirts",
            "volume": "2"
          },
          {
            "type": "Fabric",
            "description": "2000 Green T-shirts",
            "volume": "3"
          }
        ],
        "mode": "sea",
        "type": "FCL",
        "destination": "Saarbrücker Str. 38, 10405 Berlin",
        "origin": "Shanghai Port",
        "services": [
          {
            "type": "customs"
          }
        ],
        "total": "1000",
        "status": "ACTIVE",
        "userId": "U1000"
      }];

      return Promise.resolve(response);
    },
  }
});

import ShipmentList from './index';

const mockStore = configureStore();

describe('ShipmentList', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    const initialState = {
      shipments: {
        list: shipment,
      }
    };
    store = mockStore(initialState);

    wrapper = mount(<ShipmentList store={store} />);
  });

  it('should fire getListData when mounted', () => {
    const spy = jest.spyOn(ShipmentList.WrappedComponent.prototype, 'getListData');
    wrapper = mount(<ShipmentList store={store} />);

    expect(spy).toHaveBeenCalled();
  });

  it('should print one item on the list', () => {
    const spy = jest.spyOn(ShipmentsService, 'getShipments');
    wrapper = mount(shallow(<ShipmentList store={store} />).get(0));

    store.dispatch(wrapper.prop('setShipments')(shipment));
    wrapper.setState({ loading: false });

    expect(spy).toHaveBeenCalled();

    expect(wrapper.find('.list-items li').length).toEqual(1);
  });

  it('should print two items on the list', () => {
    const spy = jest.spyOn(ShipmentsService, 'getShipments');
    const initialState = {
      shipments: {
        list: multipleShipments,
      }
    };
    store = mockStore(initialState);

    wrapper = mount(shallow(<ShipmentList store={store} />).get(0));
    wrapper.setState({ loading: false });

    // Check if request was fired
    expect(spy).toHaveBeenCalled();

    expect(wrapper.find('.list-items li').length).toEqual(2);
  });

  it('should trigger function filter by id when type something on search input', () => {
    const spy = jest.spyOn(_, 'debounce');

    const initialState = {
      shipments: {
        list: multipleShipments,
      }
    };
    store = mockStore(initialState);

    wrapper = mount(shallow(<ShipmentList store={store} />).get(0));
    wrapper.setState({ loading: false });

    const inputFilterId = wrapper.find('input.MuiInput-input[type="text"]');
    inputFilterId.simulate('change', { target: { value: 'S1002' } });

    expect(spy).toHaveBeenCalled();
  });
});