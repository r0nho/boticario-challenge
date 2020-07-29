import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core';

import MyPurchases from 'containers/MyPurchases';

import { materialStyles } from './styles/styles';

const Home = ({ classes }: any) => (
  <Paper elevation={3} className={classes.container}>
    <MyPurchases />
  </Paper>
);

export default withStyles(materialStyles)(Home);
