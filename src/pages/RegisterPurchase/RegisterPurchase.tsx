import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core';

import RegisterPurchaseContainer from 'containers/RegisterPurchase';
import { materialStyles } from './styles/styles';

const RegisterPurchase = ({ classes }: any) => (
  <Paper elevation={3} className={classes.container}>
    <RegisterPurchaseContainer />
  </Paper>
);
export default withStyles(materialStyles)(RegisterPurchase);
