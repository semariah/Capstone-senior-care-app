import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import registerServiceWorker from './registerServiceWorker'
//import { BrowserRouter } from 'react-router-dom'
//import { HashRouter } from 'react-router-dom'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
