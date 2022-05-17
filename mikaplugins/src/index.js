import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import App from './App';
import RLHome from './components/rl/rl-home';
import MCHome from './components/mc/mc-home';
import MCPlugins from './components/mc/mc-plugins';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router> {/* this is done so it can be deployed to GitHub pages*/}
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<RLHome />} />
          <Route path="minecraft" element={<MCHome />}>
            <Route path="plugins" element={<MCPlugins />} />
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
