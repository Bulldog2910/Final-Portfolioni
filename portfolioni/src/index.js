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
import GithubRequest from './frontPage/github/githubAllRepos';
import PongGame from './frontPage/games/pong/pong';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <_Header />
    <MyProjects />
    <App />
    <Resume />
    <div className='games bg-slate-200 ml-10 mr-10 rounded-lg p-5'>
      <TicTacToe />
      <SnakeBoard />
      <PongGame/>

    </div>
    
    <GithubRequest />

    <_Footer/>
    
  </React.StrictMode>
);
