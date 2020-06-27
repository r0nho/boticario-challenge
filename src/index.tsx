import React from 'react';
import ReactDOM from 'react-dom';

import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';
import history from './utils/history';

// Styles
import GlobalStyle from './styles';

const store = configureStore();

const theme = {
  primary: '#00555C',
  accent: '#6F967E',
};

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
