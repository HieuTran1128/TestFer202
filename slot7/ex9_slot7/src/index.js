import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AboutMe from './components/AboutMe'
import HelloReact from './components/HelloWorld'
import CounterApp from './components/CounterApp';
import './css/Card.css'
import './css/Web.css'
import Card from './components/Card';
import Web from './components/Web';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AboutMe/>
    <HelloReact/>
    <CounterApp/>
    <Card/>
    <Web/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();