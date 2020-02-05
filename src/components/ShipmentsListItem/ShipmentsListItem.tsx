import React from 'react';
import { Shipment } from 'interfaces/shipments/shipment.interface';

import Chip from '@material-ui/core/Chip';

import { getStatus } from 'utils/helpers';

import {
  Item, 
  DivLeft, 
  DivRight,
  SpanLabel, 
  DetailSpan, 
  DivStatus 
} from './styles';

interface Props {
  id: string;
  item: Shipment;
  onSelectShipment: Function;
}

const ListItem = ({ item, onSelectShipment }: Props) => {

  const clickHandler = (id: string) => {
    onSelectShipment(id);
  }

  return (
    <Item key={item.id} onClick={() => clickHandler(item.id)}>
      <DivLeft>
        <SpanLabel>Name:</SpanLabel> <br />
          { item.name } <br />
        <DetailSpan> {item.id} </DetailSpan>
      </DivLeft>

      <DivRight>
        <SpanLabel>Origin / Destination:</SpanLabel> <br />
        <DetailSpan> {item.origin} - {item.destination} </DetailSpan>
      </DivRight>

      <DivStatus>
        <SpanLabel>Status:</SpanLabel> <br />
        <Chip label={getStatus(item.status)} className={`chip ${getStatus(item.status)}`} color="primary" />
      </DivStatus>
    </Item>
  );
};


export default ListItem;