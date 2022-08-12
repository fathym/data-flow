/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { useDrop } from 'react-dnd';
import PropTypes from 'prop-types';
import { DnDItemTypes } from '../models/DnDItemTypes';

const moduleCanvasWrapperCss = css`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

function DataFlowCanvasWrapper(props: any) {
  const [, drop] = useDrop(() => ({
    accept: DnDItemTypes.MODULE,
    drop: () => alert('hey'),
    // collect: (monitor) => ({
    //   isOver: !!monitor.isOver(),
    // }),
  }));

  return (
    <div css={moduleCanvasWrapperCss} ref={drop}>
      {props.children}
    </div>
  );
}

DataFlowCanvasWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DataFlowCanvasWrapper;
