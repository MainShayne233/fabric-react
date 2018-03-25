/* globals it describe */
import React from 'react';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import FabricCanvas from '../src/FabricCanvas';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('FabricCanvas;', () => {
  it('should render the canvas', () => {
    const componentInstance = <FabricCanvas />;
    const mountedComponent = Enzyme.shallow(componentInstance);
    expect(mountedComponent.length).to.equal(1);
  });
});
