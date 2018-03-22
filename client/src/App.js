import React from 'react';
import { Route } from 'react-router';

import MainPage from './containers/MainPage';

const ReportPage = () => <div>Report Page</div>;
const DataPage = () => <div>Data Page</div>;

const App = () => (
  <div>
    <Route exact path="/" component={MainPage} />
    <Route exact path="/report" component={ReportPage} />
    <Route exact path="/data" component={DataPage} />
  </div>
);

export default App;
