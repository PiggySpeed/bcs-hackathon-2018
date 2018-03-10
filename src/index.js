import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/app';
import registerServiceWorker from './registerServiceWorker';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Passenger from './Passenger/passenger.js';

ReactDOM.render(<MuiThemeProvider> <Passenger/> </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
