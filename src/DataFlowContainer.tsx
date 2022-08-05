/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import ControlCommands from './controls/ControlCommands';
import ModuleCommands from './controls/ModuleCommands';
import CanvasCommands from './controls/CanvasCommands';
import DataFlowCommands from './controls/DataFlowCommands';
import DataFlowCanvas from './controls/DataFlowCanvas';
import logo from './logo.svg';

const backgroundGridBorder = '#cad9d4';

const containerCss = css`
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 100%;
  overflow: hidden;
  z-index: 50;
  background-size: 100px 100px;
  background-color: whitesmoke;
  background-image: linear-gradient(
      to right,
      ${backgroundGridBorder} 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, ${backgroundGridBorder} 1px, transparent 1px);
`;

class DataFlowContainerProperties {
  public zoomLevel?: number;

  constructor() {
    this.zoomLevel = 0.5;
  }
}

class DataFlowContainerState {
  public zoomLevel: number;

  constructor() {
    this.zoomLevel = 0.5;
  }
}

export default class DataFlowContainer extends React.Component<
  DataFlowContainerProperties,
  DataFlowContainerState
> {
  //#region Constants
  defaultZoomLevel: number = 0.5;
  //#endregion

  //#region Fields
  //#endregion

  //#region Properties
  //#endregion

  //#region Constructors
  constructor(props: DataFlowContainerProperties) {
    super(props);

    this.state = {
      zoomLevel: props.zoomLevel || this.defaultZoomLevel,
    };
  }
  //#endregion

  //#region Life Cycle
  public componentDidUpdate(prevProps: DataFlowContainerProperties) {
    if (prevProps.zoomLevel !== this.props.zoomLevel) {
      this.handleZoomChange(this.props.zoomLevel);
    }
  }

  public render() {
    return (
      <div css={containerCss}>
        <CanvasCommands
          zoomLevel={this.state.zoomLevel}
          onZoomChange={(zl) => this.handleZoomChange(zl)}
        />

        <DataFlowCommands />

        <ControlCommands />

        <ModuleCommands />

        <DataFlowCanvas zoomLevel={this.state.zoomLevel} />
      </div>
    );
  }
  //#endregion

  //#region API Methods
  //#endregion

  //#region Helpers
  protected handleZoomChange(zoomLevel?: number): void {
    let nextZoom: number =
      zoomLevel !== undefined
        ? zoomLevel
        : this.props?.zoomLevel || this.defaultZoomLevel;

    if (nextZoom < 0.01) {
      nextZoom = 0.01;
    } else if (nextZoom > 1) {
      nextZoom = 1;
    }

    this.setState({
      zoomLevel: nextZoom,
    });

    console.log(nextZoom);
  }
  //#endregion
}
