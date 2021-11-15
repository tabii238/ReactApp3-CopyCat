import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { CopyCatContainer } from './containers/CopyCatContainer';

ReactDOM.render(
  <React.StrictMode>
    <CopyCatContainer />
  </React.StrictMode>,
  document.getElementById('app')
);

