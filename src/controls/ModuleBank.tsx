/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Card from '@mui/material/Card';
import ModuleBankOption from './ModuleBankOption';

const moduleBankCss = css`
  position: absolute;
  top: 2em;
  left: 8em;
  /* bottom: 6em; */
  max-height: calc(100% - 8em);
  overflow: auto;
  z-index: 300;
`;

class ModuleBankProperties {}

export default class ModuleBank extends React.Component<ModuleBankProperties> {
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
      <Card css={moduleBankCss}>
        <ModuleBankOption />

        <ModuleBankOption />

        <ModuleBankOption />
      </Card>
    );
  }
  //#endregion

  //#region API Methods
  //#endregion

  //#region Helpers
  //#endregion
}
