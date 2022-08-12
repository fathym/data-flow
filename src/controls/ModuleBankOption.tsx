/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { useDrag } from 'react-dnd';
import { DnDItemTypes } from '../DataFlowContainer';

const moduleBankOptionCss = css`
  width: 50px;
  height: 50px;
`;

function ModuleBankOption() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: DnDItemTypes.MODULE,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return <div css={moduleBankOptionCss} ref={drag}>an option {isDragging}</div>;
}

export default ModuleBankOption;
