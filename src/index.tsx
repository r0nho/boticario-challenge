import React from 'react';
import ReactDOM from 'react-dom';

import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';
import history from './utils/history';

// Styles
import GlobalStyle from './styles';

const store = configureStore();

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00555C',
    },
    secondary: {
      main: '#6F967E',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1280,
      xl: 1920,
    },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </MuiThemeProvider>
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
