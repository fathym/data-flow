/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Card from '@mui/material/Card';

const moduleBankCss = css`
  position: absolute;
  top: 2em;
  left: 2em;
  /* bottom: 6em; */
  max-height: calc(100% - 8em);
  overflow: auto;
  z-index: 300;
`;

function ModuleBank() {
  return (
    <Card css={moduleBankCss}>
      
    </Card>
  );
}

export default ModuleBank;
