import React from 'react';
import { Route, Switch } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={WelcomePage} />
      </Switch>
    );
  }
}
