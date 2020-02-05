import React from 'react';
import { ShipmentCargo } from 'interfaces/shipments/cargo.interface';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

interface Props {
  items: Array<ShipmentCargo>;
}

const ProductsList = ({ items }: Props) => {
  return (
    <List disablePadding>
      {
        items.map((item: ShipmentCargo) => (
          <ListItem dense key={`${item.description}-${item.volume}`}>
            <ListItemText
              primary={`${item.volume}x - ${item.description}`}
              secondary={`Type: ${item.type}`}
            />
          </ListItem>
        ))
      }
    </List>
  );
};

export default ProductsList;
