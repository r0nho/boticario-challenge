import React, { Component } from 'react';

import Header from 'components/Header';

import { AppWrapper } from './styles';

import { RoutersApp } from './../../routes';

interface State {
    validToken: boolean;
    showSnackbar: boolean;
}

class App extends Component<any, State> {

    render() {
        return (
            <>
                <AppWrapper>
                    <Header name="Rômulo Argolo" />
                    <RoutersApp />
                </AppWrapper>
            </>
        );
    }
}

export default App;
