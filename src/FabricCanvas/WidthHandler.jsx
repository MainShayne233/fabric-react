// @flow
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fabric } from 'fabric';

type Props = {
  fabricCanvasObject: fabric.Canvas,
  width: number,
};

class WidthHandler extends Component<Props> {
  componentDidMount() {
    const { width, fabricCanvasObject } = this.props;
    fabricCanvasObject.setWidth(width);
  }

  componentWillUpdate({ width, fabricCanvasObject }: {
    width: number, fabricCanvasObject: fabric.Canvas
  }) {
    fabricCanvasObject.setWidth(width);
  }

  render() {
    return null;
  }
}

WidthHandler.propTypes = {
  fabricCanvasObject: PropTypes.instanceOf(fabric.Canvas).isRequired,
  width: PropTypes.number.isRequired,
};

export default WidthHandler;
