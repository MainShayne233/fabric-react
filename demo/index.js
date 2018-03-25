import React from 'react';
import { render } from 'react-dom';
import App from './App';

const rootNode = document.getElementById('root-node');
const appInstance = React.createElement(App);
render(appInstance, rootNode);
