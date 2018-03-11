import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/app';
<<<<<<< Updated upstream
import Driver from './Driver/driver'
import Passenger from './Passenger/passenger';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(<MuiThemeProvider> <Passenger/> </MuiThemeProvider>, document.getElementById('root'));
=======
import DriverQueue from './Driver/driverQueue';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(<MuiThemeProvider><DriverQueue/></MuiThemeProvider>, document.getElementById('root'));
>>>>>>> Stashed changes
registerServiceWorker();
