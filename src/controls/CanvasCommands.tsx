/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';

const canvasCommandsCss = css`
  position: absolute;
  bottom: 2em;
  right: 2em;
  height: 2em;
  z-index: 300;
`;

class CanvasCommandsProperties {
  public onZoomChange?: (zoomLevel: number) => void;

  public zoomLevel: number;

  constructor() {
    this.zoomLevel = 1.0;
  }
}

export default class CanvasCommands extends React.Component<CanvasCommandsProperties> {
  //#region Fields
  //#endregion

  //#region Properties
  //#endregion

  //#region Constructors
  //#endregion

  //#region Life Cycle
  public componentDidMount() {}

  public render() {
    return (
      <Card css={canvasCommandsCss}>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button onClick={() => this.handleZoomChange(-1)}>
            <Remove />
          </Button>

          <Button>{Math.round(this.props.zoomLevel * 100)}%</Button>

          <Button onClick={() => this.handleZoomChange(1)}>
            <Add />
          </Button>
        </ButtonGroup>
      </Card>
    );
  }
  //#endregion

  //#region API Methods
  //#endregion

  //#region Helpers
  protected handleZoomChange(zoomChange: number): void {
    const nextZoomLevel = Math.round(this.props.zoomLevel * 100) + zoomChange;

    if (this.props.onZoomChange) {
      this.props.onZoomChange(nextZoomLevel / 100);
    }
  }
  //#endregion
}
