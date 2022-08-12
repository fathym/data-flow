/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { ModuleShapeTypes } from '../models/ModuleShapeTypes';

class ModuleShapeProperties {
  public children?: React.ReactNode;

  public color?: string;

  public fillColor?: string;

  public shape?: ModuleShapeTypes;

  public text?: string;
}

export default class ModuleShape extends React.Component<ModuleShapeProperties> {
  //#region Fields
  //#endregion

  //#region Properties
  //#endregion

  //#region Constructors
  //#endregion

  //#region Life Cycle
  public componentDidMount() {}

  public render() {
    const moduleShapeCss = css`
      width: 100%;
      height: 100%;
    `;

    const shape =
      this.props.shape === ModuleShapeTypes.Custom ? (
        <svg css={moduleShapeCss}>{this.props.children}</svg>
      ) : (
        <svg css={moduleShapeCss}>
          {this.props.shape === ModuleShapeTypes.Circle && (
            <circle cx="50%" cy="50%" r="50%" fill={this.props.fillColor} />
          )}

          {this.props.shape === ModuleShapeTypes.Diamond && (
            <polygon
              points="0 50, 50 100, 100 50, 50 0"
              fill={this.props.fillColor}
            />
          )}

          {this.props.shape === ModuleShapeTypes.Ellipse && (
            <ellipse
              cx="50%"
              cy="50%"
              rx="60%"
              ry="45%"
              fill={this.props.fillColor}
            />
          )}

          {this.props.shape === ModuleShapeTypes.Square && (
            <rect width="100%" height="100%" fill={this.props.fillColor} />
          )}

          <text x="50%" y="55%" textAnchor="middle" fill={this.props.color}>
            {this.props.text}
          </text>

          {this.props.text}
        </svg>
      );

    return shape;
  }
  //#endregion

  //#region API Methods
  //#endregion

  //#region Helpers
  //#endregion
}
