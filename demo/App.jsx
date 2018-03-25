/* eslint import/no-extraneous-dependencies: "off" */
import React from 'react';
import { hot } from 'react-hot-loader';
import NeatComponent from '../src/NeatComponent';

const App = () => (
  <div>
    <NeatComponent neatMessageProp="Woooo! The demo is working!" />
  </div>
);

export default hot(module)(App);
