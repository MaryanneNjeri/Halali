import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/Loginpage';
import WelcomePage from './pages/WelcomePage';

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={RegistrationPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route  exact path="/welcome" component={WelcomePage}/>
      </Switch>
    );
  }
}
