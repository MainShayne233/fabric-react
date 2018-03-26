// @flow
/* eslint react/no-did-mount-set-state: "off" */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fabric } from 'fabric';
import WidthHandler from './FabricCanvas/WidthHandler';
import HeightHandler from './FabricCanvas/HeightHandler';

type Props = {
  width: number,
  height: number,
};

type State = {
  fabricCanvasReady: boolean,
};

class FabricCanvas extends Component<Props, State> {
  canvasNode: ?HTMLCanvasElement;
  fabricCanvasObject: fabric.Canvas;

  constructor(props: Object) {
    super(props);
    this.state = { fabricCanvasReady: false };
  }

  componentDidMount() {
    this.fabricCanvasObject = new fabric.Canvas(this.canvasNode);
    this.justAddAFreakingRectangle();
    this.setState({ fabricCanvasReady: true });
  }

  componentWillUnmount() {
    delete this.fabricCanvasObject;
  }

  justAddAFreakingRectangle() {
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: 'red',
      width: 20,
      height: 20,
    });

    this.fabricCanvasObject.add(rect);
  }

  renderHandlers() {
    if (this.state.fabricCanvasReady) {
      return [
        <WidthHandler
          key="widthHandler"
          fabricCanvasObject={this.fabricCanvasObject}
          width={this.props.width}
        />,
        <HeightHandler
          key="heightHandler"
          fabricCanvasObject={this.fabricCanvasObject}
          height={this.props.height}
        />,
      ];
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        <canvas
          ref={(node) => {
            this.canvasNode = node;
          }}
        />
        {this.renderHandlers()}
      </div>
    );
  }
}

FabricCanvas.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default FabricCanvas;
