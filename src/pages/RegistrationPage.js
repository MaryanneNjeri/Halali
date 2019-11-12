import React from 'react';
import { MDBRow, MDBCol,MDBInput,MDBBtn,MDBCard,MDBCardBody } from 'mdbreact';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles= {
    width: '100%',
    height:'25%',


};
class RegistrationPage extends React.Component {
   register=()=>{
        this.props.history.push('/welcome')
    };
  render() {
    return (

        <MDBRow className="registration-form-row">
          <MDBCol lg="8" md="8" sm="8" className="img-column"/>
          <MDBCol lg="4" md="4"  sm="4" className="form-column">
              <h3 className="h3-responsive text-center"><b>Registration</b></h3>
              <MDBInput label="Company Name" icon="pencil-alt"  iconSize="3x" iconClass="registration-icon" type="text" name="company_name" required />
              <MDBInput label="Email" type="email" icon="envelope" iconClass="registration-icon" name="email" required />

              <MDBInput label="Number of Employees" type="number"   iconClass="registration-icon" icon="users" name="no_of_employees" required />

              <MDBInput label="Address" type="text"  icon="map-marker" iconClass="registration-icon" name="company_address" required />

              <Map
                  google={this.props.google}
                  zoom={14}
                  style={mapStyles}
                  initialCenter={{lat:-1.28333 ,lng:36.8233}}
              />
              <div className="register-button-div">
                  <MDBBtn gradient="peach" onClick={this.register} className="register-button" >Register</MDBBtn>
                  <br/>
                       <div><span><a href="/login">Already have an account?</a></span></div>
              </div>


          </MDBCol>
        </MDBRow>

    );
  }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDYTORsIt6d7On403U205H4P42H5v6iI6U',
})(RegistrationPage);
