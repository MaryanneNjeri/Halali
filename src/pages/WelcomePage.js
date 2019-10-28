import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

export default class WelcomePage extends React.Component {
  render() {
    return (

      <MDBContainer fluid>
        <MDBRow>
          <MDBCol md="6" className="img-column">
            <h3>Registration Process</h3>

          </MDBCol>
          <MDBCol md="6">
            <h3>Registration Process</h3>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

    );
  }
}
