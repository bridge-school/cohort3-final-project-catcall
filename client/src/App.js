import React from 'react';
import { Route } from 'react-router';
import MainPage from './pages/MainPage';
import ReportPage from './pages/ReportPage';
import ViewReportsPage from './pages/ViewReportsPage';

const App = () => (
  <div>
    <Route exact path="/" component={MainPage} />
    <Route exact path="/report" component={ReportPage} />
    <Route exact path="/data" component={ViewReportsPage} />
  </div>
);

export default App;
