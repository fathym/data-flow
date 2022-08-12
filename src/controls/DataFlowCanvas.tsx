/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Card from '@mui/material/Card';
import { BrowserJsPlumbInstance, newInstance } from '@jsplumb/browser-ui';
import Panzoom, { PanzoomObject } from '@panzoom/panzoom';
import { useDrop } from 'react-dnd';

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
  public onZoomChange?: (zoomLevel: number) => void;

  public zoomLevel: number;

  constructor() {
    this.zoomLevel = 1.0;
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
    this.configureJsPlumbCanvas();

    // this.configurePanzoom();

    this.setZoomLevel();

    const ep1 = this.jsPlumbCanvas.addEndpoint(this.ref1.current as Element, {
      source: true,
      endpoint: 'Dot',
      anchor: 'Right',
    });

    const ep2 = this.jsPlumbCanvas.addEndpoint(this.ref2.current as Element, {
      target: true,
      endpoint: 'Rectangle',
      anchor: 'Left',
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
      <div css={canvasCss}>
        <div ref={this.canvasRef}>
          <Card css={ref1Css} ref={this.ref1}>
            Hello
          </Card>

          <Card css={ref2Css} ref={this.ref2}>
            World
          </Card>
        </div>
      </div>
    );
  }
  //#endregion

  //#region API Methods
  //#endregion

  //#region Helpers
  protected configureJsPlumbCanvas(): void {
    if (!this.jsPlumbCanvas) {
      this.jsPlumbCanvas = newInstance({
        container: this.canvasRef.current as Element,
        dragOptions: {
          cursor: 'pointer',
          zIndex: 2000,
        },
      });
    }
  }

  protected configurePanzoom(): void {
    if (!this.panZoomCanvas) {
      this.panZoomCanvas = Panzoom(
        this.canvasRef.current?.parentElement as HTMLElement,
        {
          exclude: [this.ref1.current, this.ref2.current],
          // contain: 'inside',
        }
      );

      this.canvasRef.current?.parentElement?.addEventListener(
        'panzoomzoom',
        (e: any) => {
          this.handleZoomChange(e);
        }
      );

      this.canvasRef.current?.parentElement?.parentElement?.addEventListener(
        'wheel',
        (e) => {
          if (!e.shiftKey) return;

          this.panZoomCanvas.zoomWithWheel(e);
        }
      );
    }
  }

  protected handleZoomChange(e: any): void {
    if (e.detail.scale !== this.props?.zoomLevel) {
      if (this.props?.onZoomChange) {
        this.props.onZoomChange(e.detail.scale);
      }
    }
  }
  protected setZoomLevel(): void {
    // this.panZoomCanvas.zoom(this.props.zoomLevel, { animate: true });

    // this.panZoomCanvas.pan(10, 10);

    // this.jsPlumbCanvas.setZoom(this.props.zoomLevel);

    // this.canvasRef.current!.style.transform = `scale(${this.props.zoomLevel})`;
  }
  //#endregion
}
