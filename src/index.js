import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import GlobalStyle from "./theme/GlobalStyle";
import { ThemeProvider } from 'styled-components';
import Theme from './theme/theme.js';

ReactDOM.render(
  <ThemeProvider theme={Theme}>
      <GlobalStyle/>
      <App />
  </ThemeProvider>,
  document.getElementById('root')
);
