/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { TouchBackend, TouchBackendOptions } from 'react-dnd-touch-backend';
import { DndProvider } from 'react-dnd';
import ControlCommands from './controls/ControlCommands';
import ModuleCommands from './controls/ModuleCommands';
import CanvasCommands from './controls/CanvasCommands';
import DataFlowCommands from './controls/DataFlowCommands';
import DataFlowCanvas from './controls/DataFlowCanvas';
import ModuleBank from './controls/ModuleBank';
import OutsideAlerter from './utils/OutsideAlerter';

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
    this.zoomLevel = 1.0;
  }
}

class DataFlowContainerState {
  public OpenSubControls?: 'ModuleBank' | 'Templates';

  public zoomLevel: number;

  constructor() {
    this.zoomLevel = 1.0;
  }
}

export const DnDItemTypes = {
  MODULE: 'module',
};

export default class DataFlowContainer extends React.Component<
  DataFlowContainerProperties,
  DataFlowContainerState
> {
  //#region Constants
  defaultZoomLevel: number = 1.0;
  //#endregion

  //#region Fields
  protected dndOptions?: TouchBackendOptions;
  //#endregion

  //#region Properties
  //#endregion

  //#region Constructors
  constructor(props: DataFlowContainerProperties) {
    super(props);

    // this.dndOptions = {} as TouchBackendOptions;

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
      <DndProvider backend={TouchBackend} options={this.dndOptions}>
        <div css={containerCss}>
          <CanvasCommands
            zoomLevel={this.state.zoomLevel}
            onZoomChange={(zl) => this.handleZoomChange(zl)}
          />

          <DataFlowCommands />

          <ControlCommands
            onModuleBankClick={() => this.SetOpenSubControls('ModuleBank')}
          />

          <ModuleCommands />

          <DataFlowCanvas
            zoomLevel={this.state.zoomLevel}
            onZoomChange={(zl) => this.handleZoomChange(zl)}
          />

          {this.state.OpenSubControls === 'ModuleBank' ? (
            <OutsideAlerter onOutsideClick={() => this.SetOpenSubControls()}>
              <ModuleBank />
            </OutsideAlerter>
          ) : (
            ''
          )}
        </div>
      </DndProvider>
    );
  }
  //#endregion

  //#region API Methods
  public SetOpenSubControls(open?: 'ModuleBank' | 'Templates'): void {
    this.setState({
      OpenSubControls: open,
    });
  }
  //#endregion

  //#region Helpers
  protected handleZoomChange(zoomLevel?: number): void {
    let nextZoom: number =
      zoomLevel !== undefined
        ? zoomLevel
        : this.props?.zoomLevel || this.defaultZoomLevel;

    if (nextZoom < 0.01) {
      nextZoom = 0.01;
    } else if (nextZoom > 4) {
      nextZoom = 4;
    }

    this.setState({
      zoomLevel: nextZoom,
    });

    console.log(nextZoom);
  }
  //#endregion
}
