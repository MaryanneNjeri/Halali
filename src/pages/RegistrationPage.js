import React from 'react';
import { MDBRow, MDBCol,MDBInput,MDBBtn } from 'mdbreact';

export default class RegistrationPage extends React.Component {
   register=()=>{
        this.props.history.push('/welcome')
    };
  render() {
    return (

        <MDBRow className="registration-form-row">
          <MDBCol lg="8" md="8" sm="8" className="img-column"/>
          <MDBCol lg="4" md="4"  sm="4" className="form-column">
              <h3 className="h3-responsive text-center"><b>Registration</b></h3>
              <div className="form">
                  <MDBRow>
                      <MDBCol md="6" sm="6">
                          <MDBInput label="First Name" type="text" icon="user" iconClass="registration-icon" name="first_name" required />
                      </MDBCol>
                      <MDBCol md="6" sm="6">
                          <MDBInput label="Last Name" type="text" icon="user" iconClass="registration-icon" name="last_name" required />
                      </MDBCol>
                  </MDBRow>
                  <MDBInput label="Company Name" icon="pencil-alt"  iconSize="3x" iconClass="registration-icon" type="text" name="company_name" required />

                  <MDBInput label="Email" type="email" icon="envelope" iconClass="registration-icon" name="email" required />

              <MDBInput label="Number of Employees" type="number"   iconClass="registration-icon" icon="users" name="no_of_employees" required />

              <MDBInput label="Address" type="text"  icon="map-marker" iconClass="registration-icon" name="company_address" required />

              <MDBInput label="Role" type="text" icon="envelope" iconClass="registration-icon" name="Role" required />
                   <div className="register-button-div">
                  <MDBBtn gradient="peach" onClick={this.register} className="register-button" >Register</MDBBtn>
                       <div className="decoratedLine"><span><a href="/login">Already have an account?</a></span></div>
                   </div>
              </div>

          </MDBCol>
        </MDBRow>

    );
  }
}
