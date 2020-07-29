import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { withRouter } from 'react-router';
import { RoutersApp } from './../../routes';

import Sidebar from 'components/Sidebar';
import { AppWrapper } from './styles';

interface USER {
  token: string;
  name: string;
  cpf: string;
  email: string;
}

class App extends Component<any, any> {
  render() {
    const { location, user, setToken, unauthenticate } = this.props;
    const token = window.localStorage.getItem('token');
    const showSidebar = location.pathname === '/login' || location.pathname === '/register';

    if (token && !user.token) setToken(token);
    return (
      <>
        <AppWrapper>
          {!showSidebar && token ? <Sidebar user={user} logout={unauthenticate} /> : ''}
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
