import React from 'react';
import ReactDOM from 'react-dom/client';
import '@xyflow/react/dist/style.css';
import 'katex/dist/katex.min.css';
import './styles/base.css';
import './styles/graph.css';
import './styles/panels.css';
import './styles/thinking.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
