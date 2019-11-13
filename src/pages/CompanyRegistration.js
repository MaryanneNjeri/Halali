import React from 'react';
import {MDBBtn, MDBCol, MDBInput, MDBRow} from "mdbreact";

export default class CompanyRegistration extends React.Component{
    render() {
        return(
            <MDBRow className="registration-form-row">
                <MDBCol lg="7" md="7" sm="7" className="login-column"/>
                <MDBCol lg="5" md="5"  sm="5" className="form-column">

                    <h3 className="h3-responsive text-center"><b>Company details</b></h3>

                    <div className="form">
                        <MDBInput label="First Name" type="text" name="first_name" required />
                        <MDBInput label="Last Name" type="text"  name="last_name" required />
                        <MDBInput label="Email" type="email"     name="email" required />
                        <MDBInput label="Address" type="text"  name="address" required />
                        <br/>
                        <div className="register-button-login">
                            <MDBBtn gradient="peach" onClick={this.login} className="register-button" >Save</MDBBtn>
                        </div>
                    </div>

                </MDBCol>
            </MDBRow>
        )
    }
}
