import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import * as serviceWorker from './serviceWorker';
import ContextProvider from './Context'

ReactDOM.render(<ContextProvider><Router /></ContextProvider>, document.getElementById('root'));

serviceWorker.unregister();
