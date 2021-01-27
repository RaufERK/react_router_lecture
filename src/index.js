import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { createContext } from 'react'

const production = [
  { id: 11, label: 'sled' },
  { id: 22, label: 'skates' },
  { id: 33, label: 'skis' },
  { id: 44, label: 'snowboards' },
];

export const Context = createContext()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context.Provider value={production}>
        <App />
      </Context.Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
