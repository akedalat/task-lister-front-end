import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/brooke.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render((
<Router>
<Route path="/" component={App} />
</Router>),
document.getElementById('root')
)
registerServiceWorker();

