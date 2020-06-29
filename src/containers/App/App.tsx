import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
    const hideHeader = location.pathname === '/login' || location.pathname === '/register';
    return (
      <>
        <AppWrapper>
          {!hideHeader && <Header name="Rômulo Argolo" />}
          <TransitionGroup className="main-group">
            <CSSTransition key={location.key} timeout={{ enter: 300, exit: 300 }} classNames={'fade'}>
              <RoutersApp />
            </CSSTransition>
          </TransitionGroup>
        </AppWrapper>
      </>
    );
  }
}

export default withRouter(App);
