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
import ViewDetailsPage from './pages/ViewDetailsPage';
import{ RegisteredRoute } from './RegisteredRoutes';

export default class Routes extends React.Component {
  render() {
    const firm_id = localStorage.getItem('firm_id')
    return (
      <Switch>
        <Route exact path="/registration" component={RegistrationPage} />

        <RegisteredRoute exact path="/" component={LoginPage} />
        <RegisteredRoute exact path={"/welcome/" +firm_id}  component={WelcomePage}/>
        <RegisteredRoute exact path={"/company_registration/" +firm_id} component={CompanyRegistration}/>
        <RegisteredRoute exact path={"/view_details/" + firm_id} component={ViewDetailsPage}/>
        <RegisteredRoute  exact path={"/secretary/" +firm_id} component={SecretaryPage}/>
        <RegisteredRoute  exact path={"/advocate/" +firm_id} component={AdvocatePage}/>
        <RegisteredRoute  exact path={"/intern/" + firm_id} component={InternPage}/>
        <RegisteredRoute  exact path={"/partner/" + firm_id} component={PartnerPage}/>
      </Switch>
    );
  }
}
