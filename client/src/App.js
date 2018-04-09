import React from 'react';
import { Route } from 'react-router';
import MainPage from './containers/MainPage';
import ReportPage from './containers/ReportPage';
import ViewReportsPage from './containers/ViewReportsPage';

const App = () => (
  <div>
    <Route exact path="/" component={MainPage} />
    <Route exact path="/report" component={ReportPage} />
    <Route exact path="/data" component={ViewReportsPage} />
  </div>
);

export default App;
