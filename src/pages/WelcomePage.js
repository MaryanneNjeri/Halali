import React from 'react';
import { MDBContainer,MDBBtn } from "mdbreact";
import welcome from '../assets/images/celebration.svg'
export default class WelcomePage extends  React.Component{
    render() {
        return(
            <MDBContainer>
                <br/>
                <br/>
                <div>
                    <h2 className="h2-responsive text-center welcome-text">Welcome to Halali</h2>
                    <p className="text-center welcome-text">"consectetur adipiscing elit, sed do eiusmod tempor incididunt ut magna aliqua."</p>
                  <img alt="welcome image" src={welcome} className="img-fluid welcome-image"/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                    <p className="text-center"><i>Welcome select your role to continue ....</i></p>
                  <div className="role-buttons">
                      <MDBBtn  gradient="peach" className="welcome-buttons">Partner</MDBBtn>
                      <MDBBtn gradient="sunny-morning" className="welcome-buttons">Secretary</MDBBtn>
                      <MDBBtn gradient="peach" className="welcome-buttons">Advocate</MDBBtn>
                      <MDBBtn gradient="aqua" className="welcome-buttons">Intern</MDBBtn>
                  </div>
                </div>
            </MDBContainer>
        )
    }
}
