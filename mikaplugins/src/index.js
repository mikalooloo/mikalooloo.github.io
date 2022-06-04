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
import PluginsList from './components/mc/plugins/pg-plugins-list';
import Plugin from './components/mc/plugins/pg-plugin';
import MCContactMe from './components/mc/about-me/mc-contact-me';
import MCAboutMe from './components/mc/about-me/mc-about-me';
import ReportBug from "./components/mc/help/pg-report-bug";
import SuggestFeature from "./components/mc/help/pg-suggest-feature";
import AskQuestion from "./components/mc/help/pg-ask-question";
import LeaveReview from "./components/mc/help/pg-leave-review";
import NotFound from "./components/mc/help/pg-not-found";

// Initializing Sentry
Sentry.init({
  dsn: process.env.REACT_APP_SENTRY,
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
            <Route path="plugins" element={<PluginsList />} />
            <Route path="plugins/:pluginID" element={<Plugin />} />
            <Route path="about-me" element={<MCAboutMe />} />
            <Route path="contact-me" element={<MCContactMe />} />
            <Route path="contact-me/:reason" element={<MCContactMe />} />
            <Route path="help/report-bug" element={<ReportBug />} />
            <Route path="help/suggest-feature" element={<SuggestFeature />} />
            <Route path="help/ask-question" element={<AskQuestion />} />
            <Route path="help/leave-review" element={<LeaveReview />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();