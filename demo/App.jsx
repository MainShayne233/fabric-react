/* eslint import/no-extraneous-dependencies: "off" */
import React from 'react';
import { hot } from 'react-hot-loader';
import FabricCanvas from '../src/FabricCanvas';

const App = () => (
  <FabricCanvas />
);

export default hot(module)(App);
