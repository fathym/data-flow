/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountTree from '@mui/icons-material/AccountTree';
import DashboardCustomize from '@mui/icons-material/DashboardCustomize';
import Mouse from '@mui/icons-material/Mouse';

const controlCommandsCss = css`
  position: absolute;
  top: 2em;
  left: 2em;
  /* bottom: 6em; */
  max-height: calc(100% - 8em);
  overflow: auto;
  z-index: 300;
`;

const noMaxCss = css`
  max-width: auto;
`;

function ControlCommands() {
  return (
    <Card css={controlCommandsCss}>
      <div>
        <Button>
          <Mouse />
        </Button>
      </div>

      <div>
        <Button>
          <AccountTree />
        </Button>
      </div>

      <div>
        <Button>
          <DashboardCustomize />
        </Button>
      </div>
    </Card>
  );
}

export default ControlCommands;
