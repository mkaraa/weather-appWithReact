import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap-4.1.1/assets/css/docs.min.css'; 
import "./App.css";
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
