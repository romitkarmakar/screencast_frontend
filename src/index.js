import React from 'react';
import ReactDOM from 'react-dom';
import Problem from './layouts/Problem';
import './stylesheets/bootstrap.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Problem />, document.getElementById('root'));

serviceWorker.unregister();
