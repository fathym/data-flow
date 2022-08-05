/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Card from '@mui/material/Card';
import { BrowserJsPlumbInstance, newInstance } from '@jsplumb/browser-ui';
import { AnchorSpec } from '@jsplumb/common';
import Panzoom, { PanzoomObject } from '@panzoom/panzoom';

const canvasCss = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

const ref1Css = css`
  position: absolute;
  top: 100px;
  left: calc(50% - 325px);
  width: 200px;
  height: 200px;
  z-index: 100;
`;

const ref2Css = css`
  position: absolute;
  top: 100px;
  left: calc(50% + 75px);
  width: 200px;
  height: 200px;
  z-index: 100;
`;

class DataFlowCanvasProperties {
  public zoomLevel: number;

  constructor() {
    this.zoomLevel = 0.5;
  }
}

export default class DataFlowCanvas extends React.Component<DataFlowCanvasProperties> {
  //#region Fields
  protected canvasRef: React.RefObject<HTMLDivElement>;

  protected jsPlumbCanvas!: BrowserJsPlumbInstance;

  protected panZoomCanvas!: PanzoomObject;

  protected ref1: React.RefObject<HTMLDivElement>;
  protected ref2: React.RefObject<HTMLDivElement>;
  //#endregion

  //#region Properties

  //#endregion

  //#region Constructors
  constructor(props: DataFlowCanvasProperties) {
    super(props);

    this.canvasRef = React.createRef();

    this.ref1 = React.createRef();
    this.ref2 = React.createRef();
  }
  //#endregion

  //#region Life Cycle
  public componentDidMount() {
    if (!this.jsPlumbCanvas) {
      this.jsPlumbCanvas = newInstance({
        container: this.canvasRef.current as Element,
      });
    }

    if (!this.panZoomCanvas) {
      this.panZoomCanvas = Panzoom(this.canvasRef.current as HTMLElement, {
        exclude: [this.ref1.current, this.ref2.current]
      });
    }

    this.setZoomLevel();

    const ep1 = this.jsPlumbCanvas.addEndpoint(this.ref1.current as Element, {
      endpoint: 'Dot',
      anchor: 'AutoDefault',
    });

    const ep2 = this.jsPlumbCanvas.addEndpoint(this.ref2.current as Element, {
      endpoint: 'Rectangle',
      anchor: 'AutoDefault',
    });

    this.jsPlumbCanvas.connect({
      source: ep1,
      target: ep2,
      connector: 'Straight',
      // connector: {
      //   type: 'Bezier',
      //   options: {},
      //   // overlays: [
      //   //   { type: 'Label', options: { label: 'Connection 1', location: 0.5 } },
      //   // ],
      // },
    });
  }

  public componentDidUpdate() {
    this.setZoomLevel();
  }

  public render() {
    return (
      <div css={canvasCss} ref={this.canvasRef}>
        <Card css={ref1Css} ref={this.ref1}>
          Hello
        </Card>

        <Card css={ref2Css} ref={this.ref2}>
          World
        </Card>
      </div>
    );
  }
  //#endregion

  //#region API Methods
  //#endregion

  //#region Helpers
  protected setZoomLevel(): void {
    // if (this.canvasRef.current) {
    //   this.canvasRef.current.style.transform = `scale(${this.props.zoomLevel})`;
    // }

    this.panZoomCanvas.zoom(this.props.zoomLevel, { animate: true });

    this.panZoomCanvas.pan(10, 10);

    this.jsPlumbCanvas.setZoom(this.props.zoomLevel);

    console.log(this.props.zoomLevel);
  }
  //#endregion
}
