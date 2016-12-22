import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from "./App";
import {AppState} from "./AppState";

const state = new AppState();

ReactDOM.render(
    <App state={state} />,
    document.getElementById('root')
);