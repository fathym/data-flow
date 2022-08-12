/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Card from '@mui/material/Card';
import ModuleBankOption from './ModuleBankOption';
import { ModuleOptionModel } from '../models/ModuleOptionModel';
import ModuleShape from './ModuleShape';

const moduleBankCss = css`
  position: absolute;
  top: 2em;
  left: 8em;
  /* bottom: 6em; */
  max-height: calc(100% - 8em);
  overflow: auto;
  z-index: 300;
`;

class ModuleBankProperties {
  public options?: Array<ModuleOptionModel>;
}

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
        <div>
          {this.props.options?.map((option, i) => (
            <ModuleBankOption key={option.Text + i.toString()}>
              <ModuleShape
                color={option.Color}
                fillColor={option.FillColor}
                shape={option.Shape}
                text={option.Text}
              >
                {option.Custom}
              </ModuleShape>
            </ModuleBankOption>
          ))}
        </div>
      </Card>
    );
  }
  //#endregion

  //#region API Methods
  //#endregion

  //#region Helpers
  //#endregion
}
