// @flow
import React, { Component } from 'react';
import { fabric } from 'fabric';

type Props = {
};

class FabricCanvas extends Component<Props> {
  canvasNode: ?HTMLCanvasElement;
  fabricObject: fabric.Canvas;

  componentDidMount() {
    this.fabricObject = new fabric.Canvas(this.canvasNode);
    this.justAddAFreakingRectangle();
  }

  componentWillUnmount() {
    delete this.fabricObject;
  }

  justAddAFreakingRectangle() {
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: 'red',
      width: 20,
      height: 20,
    });

    this.fabricObject.add(rect);
  }

  render() {
    return (
      <canvas
        ref={(node) => {
          this.canvasNode = node;
        }}
      />
    );
  }
}

FabricCanvas.propTypes = {};

export default FabricCanvas;
