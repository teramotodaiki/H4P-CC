'use strict';
Object.defineProperty(exports, '__esModule', { value: true });

const hostedIDE = require('./hostedIDE');
hostedIDE.setupEditorName('Feeles');
hostedIDE.setupNavigationBar();
hostedIDE.setupEditorTransition(true);
hostedIDE.allowAlternateStartPage();
hostedIDE.setupIPCPipe();
