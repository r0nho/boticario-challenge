import React, { useEffect, useState } from 'react';

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

// Styles
import { materialStyles } from './styles/styles';

// Models
import { Column } from 'models/table/column.model';
import { Data } from 'models/table/data.model';

import { Columns } from './assets/columns';

const ListMyPurchases = ({ classes, getListPurchases, purchases }: any) => {
  const columns: Column[] = Columns;

  useEffect(() => {
    getListPurchases();
  }, [getListPurchases]);

  // States
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Handlers
  const handleChangePage = (event: unknown, newPage: number) => setPage(newPage);

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const countCashback = (list: Column[]) => {
    // Counting only items with status "aprovado"
    const result = list
      .filter((item: any) => item.status === 'aprovado')
      .map((item: any) => item.cashback_value)
      .reduce((prev, cur) => prev + cur)
      .toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' });

    return result;
  };

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
              purchases.fetching ? (
                <CircularProgress size={15} className={classes.loadingCashback} />
              ) : (
                countCashback(purchases.purchases)
              )
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
                {purchases.purchases.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: Data) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code} className={classes.table}>
                    {columns.map(column => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={purchases.purchases.length}
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
