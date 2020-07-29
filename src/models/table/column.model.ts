export interface Column {
  id: 'code' | 'price' | 'date' | 'cashback' | 'cashback_value' | 'status';
  label: string;
  minWidth?: number;
  align?: 'center' | 'right';
  format?: any;
}
