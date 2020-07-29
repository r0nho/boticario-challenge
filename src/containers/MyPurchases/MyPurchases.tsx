import React, { useState, useEffect } from 'react';

// Material
import { withStyles } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import CircularProgress from '@material-ui/core/CircularProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import ClearAllRoundedIcon from '@material-ui/icons/ClearAllRounded';

import { materialStyles } from './styles/styles';

// Models
import { Column } from 'models/table/column.model';
import { Data } from 'models/table/data.model';

function createData(
  code: string,
  price: number,
  date: string,
  cashback: number,
  cashback_value: number,
  status: string,
): Data {
  return { code, price, date, cashback, cashback_value, status };
}

const rows = [
  createData('323DSDV3', 135.5, '30/06/2020', 15, 20, 'Em analise'),
  createData('323DSDV2', 135.5, '30/06/2020', 15, 20, 'Em analise'),
  createData('323DSDV1', 135.5, '30/06/2020', 15, 20, 'Em analise'),
  createData('323DSDV11', 135.5, '30/06/2020', 15, 20, 'Em analise'),
  createData('323DSDV54', 135.5, '30/06/2020', 15, 20, 'Em analise'),
  createData('323DSDV322', 135.5, '30/06/2020', 15, 20, 'Em analise'),
  createData('323DSDV244', 135.5, '30/06/2020', 15, 20, 'Em analise'),
  createData('323DSDV9', 135.5, '30/06/2020', 15, 20, 'Em analise'),
];

const columns: Column[] = [
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
  },
];

const ListMyPurchases = ({ classes, getListPurchases, purchases }: any) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => setPage(newPage);

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    // getListPurchases();
  }, [getListPurchases]);

  return (
    <>
      <div className={classes.header}>
        <Typography variant="h4" component="h4" gutterBottom className={classes.title}>
          <ClearAllRoundedIcon style={{ fontSize: 30 }} /> Minhas compras
        </Typography>
        <div className={classes.cashBack}>
          Cashback acumulado:
          <Chip
            label={
              purchases.fetching ? <CircularProgress size={15} className={classes.loadingCashback} /> : 'R$ 1.025,00'
            }
            color="primary"
          />
        </div>
      </div>

      {!purchases.fetching ? (
        <>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map(column => (
                    <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map(column => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format ? column.format(value) : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </>
      ) : (
        <div className={classes.loading}>
          <CircularProgress size={60} />
        </div>
      )}
    </>
  );
};

export default withStyles(materialStyles)(ListMyPurchases);
