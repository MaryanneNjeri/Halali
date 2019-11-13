import React from 'react';
import { MDBRow, MDBCol,MDBInput,MDBBtn } from 'mdbreact';

export default class LoginPage extends React.Component {
    login=()=>{
        this.props.history.push('/company_registration')
    };
    render() {
        return (

            <MDBRow className="registration-form-row">
                <MDBCol lg="8" md="8" sm="8" className="login-column"/>
                <MDBCol lg="4" md="4"  sm="4" className="form-column">
                    <h3 className="h3-responsive text-center"><b>Login to continue</b></h3>
                    <div className="form">


                        <MDBInput label="Email" type="email" icon="envelope" iconClass="registration-icon" name="email" required />


                        <MDBInput label="Password" type="password"  icon="unlock" iconClass="registration-icon" name="password" required />

                        <div className="register-button-login">
                            <MDBBtn gradient="peach" onClick={this.login} className="register-button" >Login</MDBBtn>
                        </div>
                    </div>

                </MDBCol>
            </MDBRow>

        );
    }
}
