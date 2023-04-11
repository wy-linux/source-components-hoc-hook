import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Display from './hook/display';
import Move  from "./hook/move";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Display></Display>
    <Move></Move>
  </React.StrictMode>
)