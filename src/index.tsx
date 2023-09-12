import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import App from './App';
import { StyleProvider } from '@ant-design/cssinjs';

ReactDOM.render(
    <React.StrictMode>
        <StyleProvider hashPriority="high">
            <App/>
        </StyleProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
