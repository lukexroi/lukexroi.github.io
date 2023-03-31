index.js
// Import react
import React from 'react';
// Allow us to hook our react application to our index.html
import ReactDOM from 'react-dom';

import App from './App';
import './index.css'

// render the application, reference the div id root in index.html
ReactDOM.render(<App />, document.getElementById('root'));
