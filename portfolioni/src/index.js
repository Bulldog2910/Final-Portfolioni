import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import _Header from './_Layout/_Header';
import _Footer from './_Layout/_Footer';
import MyProjects from './frontPage/projects/myProjects';
import Resume from './frontPage/resume/resume';
import TicTacToe from './frontPage/games/ticTacToe';
import SnakeBoard from './frontPage/games/snakeboard/snakeboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <_Header />
    <MyProjects />
    <App />
    <Resume />
    <TicTacToe />
    <SnakeBoard />

    <_Footer/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
