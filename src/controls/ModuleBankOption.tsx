/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { useDrag } from 'react-dnd';
import PropTypes from 'prop-types';
import { DnDItemTypes } from '../models/DnDItemTypes';

const moduleBankOptionCss = css`
  width: 100px;
  height: 100px;
  margin: 1em;
  overflow: hidden;
`;

function ModuleBankOption(props: any) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: DnDItemTypes.MODULE,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div css={moduleBankOptionCss} ref={drag}>
      {props.children}
    </div>
  );
}

ModuleBankOption.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ModuleBankOption;
