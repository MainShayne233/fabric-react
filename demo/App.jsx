/* eslint import/no-extraneous-dependencies: "off" */
/* eslint react/prefer-stateless-function: "off" */
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import FabricCanvas from '../src/FabricCanvas';

const INITIAL_STATE = {
  width: 500,
  height: 500,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  static renderStyles() {
    return (
      <style>
        {`
          canvas {
            border-style: dashed;
          }

          form {
            margin-top: 10px;
          }
        `}
      </style>
    );
  }

  renderFabricCanvas() {
    const { width, height } = this.state;
    return (
      <div>
        <FabricCanvas
          width={width || 0}
          height={height || 0}
        />
      </div>
    );
  }

  renderConfigForm() {
    const { width, height } = this.state;
    return (
      <form action="." method="post" className="vform">
        <fieldset>
          <legend>Configuration Form</legend>
          <p>
            <label htmlFor="width">
              Width
              <input
                type="text"
                name="width"
                value={width || ''}
                id="width"
                onChange={({ target }) => {
                  this.setState({ width: parseInt(target.value, 10) });
                }}
              />
            </label>
          </p>
          <p>
            <label htmlFor="height">
              Height
              <input
                type="text"
                name="height"
                value={height || ''}
                id="height"
                onChange={({ target }) => {
                  this.setState({ height: parseInt(target.value, 10) });
                }}
              />
            </label>
          </p>
        </fieldset>
      </form>
    );
  }

  render() {
    return (
      <div>
        {App.renderStyles()}
        {this.renderFabricCanvas()}
        {this.renderConfigForm()}
      </div>
    );
  }
}

export default hot(module)(App);
