// @flow
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fabric } from 'fabric';

type Props = {
  fabricCanvasObject: fabric.Canvas,
  height: number,
};

class HeightHandler extends Component<Props> {
  componentDidMount() {
    const { height, fabricCanvasObject } = this.props;
    fabricCanvasObject.setHeight(height);
  }

  componentWillUpdate({ height, fabricCanvasObject }: {
    height: number,
    fabricCanvasObject: fabric.Canvas,
  }) {
    fabricCanvasObject.setHeight(height);
  }

  render() {
    return null;
  }
}

HeightHandler.propTypes = {
  fabricCanvasObject: PropTypes.instanceOf(fabric.Canvas).isRequired,
  height: PropTypes.number.isRequired,
};

export default HeightHandler;
