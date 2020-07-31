import React from 'react';
import Chip from 'components/Chip';

import { Column } from 'models/table/column.model';

export const Columns: Column[] = [
  { id: 'code', label: 'Código', minWidth: 70 },
  {
    id: 'price',
    label: 'Valor',
    align: 'center',
    minWidth: 70,
    format: (value: number) =>
      value.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' }),
  },
  {
    id: 'date',
    label: 'Data',
    minWidth: 70,
    align: 'center',
  },
  {
    id: 'cashback',
    label: '% de cashback',
    minWidth: 70,
    align: 'center',
    format: (value: number) => `${value}%`,
  },
  {
    id: 'cashback_value',
    label: 'Valor do cashback',
    minWidth: 70,
    align: 'center',
    format: (value: number) =>
      value.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' }),
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 70,
    align: 'center',
    format: (value: 'aprovado' | 'reprovado' | 'em validação') => <Chip label={value} status={value} />,
  },
];
