// 클라이언트 측 시작 스크립트

import 'babel-core/register';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

function run() {
    ReactDOM.hydrate(<App />, document.getElementById('app'));
}

const loadedStates = ['complete', 'loaded', 'interactive'];

if(loadedStates.includes(document.readyState) && document.body) {
    run();
}else {
    window.addEventListener('DOMContentLoaded', run, false);
}