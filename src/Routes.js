import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/Loginpage';
import WelcomePage from './pages/WelcomePage';
import SecretaryPage from './pages/Dashboard/SecretaryPage';
import AdvocatePage from './pages/Dashboard/AdvocatePage';
import InternPage from './pages/Dashboard/InternPage';
import PartnerPage from './pages/Dashboard/PartnerPage';
import CompanyRegistration from  './pages/CompanyRegistration';
import ConfirmRegistration from './pages/ConfirmRegistration';

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={RegistrationPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route  exact path="/welcome" component={WelcomePage}/>
        <Route  exact path="/company_registration" component={CompanyRegistration}/>
        <Route  exact path="/secretary" component={SecretaryPage}/>
        <Route  exact path="/advocate" component={AdvocatePage}/>
        <Route  exact path="/intern" component={InternPage}/>
        <Route  exact path="/partner" component={PartnerPage}/>
        <Route exact path="/confirm_registration" component={ConfirmRegistration}/>
      </Switch>
    );
  }
}
