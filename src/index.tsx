import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import StyledGlobal from './components/styled/Global.styled';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <StyledGlobal />
    <App />
  </React.StrictMode>
);
