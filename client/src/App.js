import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';

import PageTitle from './components/PageTitle';
import MainPage from './containers/MainPage';

const ReportPage = () => <div>Report Page</div>;
const DataPage = () => <div>Data Page</div>;

const App = () => (
  <div>
    <PageTitle>CatCall.io</PageTitle>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/report" component={ReportPage} />
      <Route exact path="/data" component={DataPage} />
    </Switch>
  </div>
);

export default App;
