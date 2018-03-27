import React from 'react';
import { Route } from 'react-router';

import PageTitle from './components/PageTitle';
import MainPage from './containers/MainPage';
import ReportPage from './containers/ReportPage';

const DataPage = () => <div>Data Page</div>;

const App = () => (
  <div>
    <PageTitle>CatCall.io</PageTitle>
    <Route exact path="/" component={MainPage} />
    <Route exact path="/report" component={ReportPage} />
    <Route exact path="/data" component={DataPage} />
  </div>
);

export default App;
