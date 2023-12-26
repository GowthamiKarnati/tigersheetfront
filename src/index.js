import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = document.getElementById('root');

// Use createRoot instead of ReactDOM.render
const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(<App />);
