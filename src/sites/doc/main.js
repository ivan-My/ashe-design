import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
const rootElement = document.querySelector('#doc');
if (rootElement != null) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(React.createElement(App, null));
}
