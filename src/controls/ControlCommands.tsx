/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import AccountTree from '@mui/icons-material/AccountTree';
import DashboardCustomize from '@mui/icons-material/DashboardCustomize';
import Mouse from '@mui/icons-material/Mouse';
import PanTool from '@mui/icons-material/PanTool';

const controlCommandsCss = css`
  position: absolute;
  top: 2em;
  left: 2em;
  /* bottom: 6em; */
  max-height: calc(100% - 8em);
  overflow: auto;
  z-index: 300;
`;

class ControlCommandsProperties {
  public onModuleBankClick?: () => void;

  public onPointerToggled?: (oldPointer: string, newPointer: string) => void;

  public onTemplatesClick?: () => void;
}

class ControlCommandsState {
  public CurrentPointer!: string;
}

export default class ControlCommands extends React.Component<
  ControlCommandsProperties,
  ControlCommandsState
> {
  //#region Fields
  protected pointers: Array<string>;
  //#endregion

  //#region Properties
  //#endregion

  //#region Constructors
  constructor(props: ControlCommandsProperties) {
    super(props);

    this.pointers = ['select', 'pan'];

    this.state = {
      CurrentPointer: this.pointers[0],
    };
  }
  //#endregion

  //#region Life Cycle
  public componentDidMount() {}

  public render() {
    return (
      <Card css={controlCommandsCss}>
        <div>
          <Button onClick={() => this.togglePointer()}>
            {this.state.CurrentPointer === 'select' && (<Mouse />)}
            
            {this.state.CurrentPointer === 'pan' && (<PanTool />)}
          </Button>
        </div>

        <div>
          <Button onClick={() => this.moduleBankClicked()}>
            <AccountTree />
          </Button>
        </div>

        <div>
          <Button onClick={() => this.templatesClicked()}>
            <DashboardCustomize />
          </Button>
        </div>
      </Card>
    );
  }
  //#endregion

  //#region API Methods
  //#endregion

  //#region Helpers
  protected findNextPointer(): string {
    const curIndex = this.pointers.indexOf(this.state.CurrentPointer);

    let nextIndex = curIndex + 1;

    if (nextIndex >= this.pointers.length) {
      nextIndex = 0;
    }

    return this.pointers[nextIndex];
  }

  protected moduleBankClicked(): void {
    if (this.props?.onModuleBankClick) {
      this.props.onModuleBankClick();
    }
  }

  protected templatesClicked(): void {
    if (this.props?.onTemplatesClick) {
      this.props.onTemplatesClick();
    }
  }

  protected togglePointer(): void {
    const oldPointer = this.state.CurrentPointer;

    const newPointer = this.findNextPointer();

    this.setState({
      CurrentPointer: newPointer,
    });

    if (this.props?.onPointerToggled) {
      this.props.onPointerToggled(oldPointer, newPointer);
    }
  }
  //#endregion
}
