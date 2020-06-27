import React, { Component } from 'react';
import { withRouter } from 'react-router';

import Header from 'components/Header';

import { AppWrapper } from './styles';

import { RoutersApp } from './../../routes';

interface State {
  validToken: boolean;
  showSnackbar: boolean;
}

class App extends Component<any, State> {
  render() {
    const { location } = this.props;
    return (
      <>
        <AppWrapper>
          {location.pathname !== '/login' && <Header name="Rômulo Argolo" />}
          <RoutersApp />
        </AppWrapper>
      </>
    );
  }
}

export default withRouter(App);
