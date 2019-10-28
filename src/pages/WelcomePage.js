import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

export default class WelcomePage extends React.Component {
  render() {
    return (

      <MDBContainer fluid>
        <MDBRow>
          <MDBCol md="6" className="img-column">
            <h1 className="landing-text"><b>Mastermind Better Succeed Together</b></h1>
            <br/>
            <p className="landing-text">
Sed ut p      erspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae
              {' '}
            </p>

          </MDBCol>
          <MDBCol md="6">
            <h3>Registration Process</h3>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

    );
  }
}
