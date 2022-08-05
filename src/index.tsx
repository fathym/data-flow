import React from 'react';
import ReactDOM from 'react-dom/client';
import DataFlowContainer from './DataFlowContainer';
import reactToWebComponent from 'react-to-webcomponent';

const fathymDataFlow = reactToWebComponent(DataFlowContainer, React, ReactDOM);

customElements.define('fathym-data-flow', fathymDataFlow);
