import React from 'react';
import { render } from 'react-snapshot';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const target = document.querySelector('#root');
render(<App />, target);
registerServiceWorker();
