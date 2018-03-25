/* globals it describe */
import React from 'react';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import NeatComponent from '../src/NeatComponent';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('NeatComponent', () => {
  it('should render the neatMessageProp', () => {
    const message = 'This is a test message!';
    const componentInstance = <NeatComponent neatMessageProp={message} />;
    const mountedComponent = Enzyme.shallow(componentInstance);
    const messageNode = mountedComponent.find('p');
    expect(messageNode.text()).to.equal(message);
  });
});
