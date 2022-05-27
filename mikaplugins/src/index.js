import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import App from './App';
import RLHome from './components/rl/rl-home';
import MCBase from './components/mc/base/mc-base';
import MCHome from './components/mc/home/mc-home';
import MCPlugins from './components/mc/plugins/mc-plugins';
import MCPlugin from './components/mc/plugins/mc-plugin';

// Initializing Sentry
Sentry.init({
  dsn: "https://7fdd27a868044f48b6bcf0d0669c71a0@o1253165.ingest.sentry.io/6419919",
  integrations: [new BrowserTracing()],

  // captures 100% of transcations -- prob should change this for deployment
  tracesSampleRate: 1.0, 
});

// Initializing React
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router> {/* this is done so it can be deployed to GitHub pages*/}
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<RLHome />} />
          <Route path="minecraft" element={<MCBase />}>
            <Route index element={<MCHome />} />
            <Route path="plugins" element={<MCPlugins />} />
            <Route path="plugins/:pluginID" element={<MCPlugin />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
