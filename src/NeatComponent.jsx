// @flow
import React from 'react';
import PropTypes from 'prop-types';

const NeatComponent = ({ neatMessageProp }: { neatMessageProp: string }) => (
  <div>
    <p id="message">{neatMessageProp}</p>
  </div>
);

NeatComponent.propTypes = {
  neatMessageProp: PropTypes.string.isRequired,
};

export default NeatComponent;
