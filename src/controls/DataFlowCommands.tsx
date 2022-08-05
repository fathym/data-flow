/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import Save from '@mui/icons-material/Save';

const dataFlowCommandsCss = css`
  position: absolute;
  top: 2em;
  right: 2em;
  height: 2em;
  z-index: 300;
`;

function DataFlowCommands() {
  return (
    <Card css={dataFlowCommandsCss}>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button>
          <Save />
        </Button>
        
        <Button>
          <ChevronLeft />
        </Button>
      </ButtonGroup>
    </Card>
  );
}

export default DataFlowCommands;
