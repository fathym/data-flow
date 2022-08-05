/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';
import BugReport from '@mui/icons-material/BugReport';
import RocketLaunch from '@mui/icons-material/RocketLaunch';

const commandBarCss = css`
  position: absolute;
  bottom: 2em;
  left: 2em;
  height: 2em;
  z-index: 300;
`;

function ModuleCommands() {
  return (
    <Card css={commandBarCss}>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button>
          <BugReport />
        </Button>
        <Button>
          <RocketLaunch />
        </Button>
      </ButtonGroup>
    </Card>
  );
}

export default ModuleCommands;
