import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';

import { store } from './store';
import App from './App';

import { light } from '~/styles/theme';

function Index() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={light}>
        <App />
      </ThemeProvider>
    </Provider>
  );
}

export default Index;
