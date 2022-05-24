import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TodosContextProvider from './contexts/todosContext';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <TodosContextProvider>
    <App />
    </TodosContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
