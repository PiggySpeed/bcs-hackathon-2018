import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/app';
import Driver from './Driver/driver'
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(<MuiThemeProvider> <Driver/> </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
