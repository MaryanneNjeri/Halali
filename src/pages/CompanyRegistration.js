import React from 'react';
import {MDBBtn, MDBCol, MDBInput, MDBRow,MDBIcon} from "mdbreact";

export default class CompanyRegistration extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            role:'',
            form:false,
            headerText:''
        }
    }
    goToPartner=()=>{
       this.setState({
           role:'partner',
           headerText: 'Partner Details',
           form: true
       })
    };
    goToSecretary=()=>{
        this.setState({
            role:'secretary',
            headerText: 'Secretary Details',
            form:true,
        })
    };
    goToAdvocate=()=>{
        this.setState({
            role:'advocate',
            headerText: 'Advocate Details',
            form:true,
        })
    };
    goToIntern=()=>{
       this.setState({
           role: 'intern',
           headerText: 'Intern Details',
           form:true
       })
    };
    close=()=>{
        this.setState({
            form:false
        })
    }
    render() {
        const { form,role,headerText } = this.state;
        return(
            <MDBRow className="registration-form-row">
                <MDBCol lg="7" md="7" sm="7" className="login-column"/>
                <MDBCol lg="5" md="5"  sm="5" className="form-column">

                    <h4 className="h3-responsive text-center"><b>Who would you like to register</b></h4>
                     <br/>
                    { form ===  true ?
                        <div className="form">

                                <MDBIcon icon="times" className="float-right" onClick={this.close} />

                            <p className="welcome-text">{headerText}</p>
                            <MDBInput label="First Name" type="text" name="first_name" required />
                            <MDBInput label="Last Name" type="text"  name="last_name" required />
                            <MDBInput label="Email" type="email"     name="email" required />
                            <MDBInput label="Address" type="text"  name="address" required />
                            <MDBInput label="Role"  value={role} type="text"  name="role" required />

                            <br/>
                            <div className="register-button-login">
                                <MDBBtn gradient="aqua"  onClick={this.add}  icon="magic" className="register-buttons" ><MDBIcon icon="plus" className="mr-1" /> Add</MDBBtn>
                                <br/>
                                <br/>
                                <MDBBtn gradient="peach" onClick={this.save} className="register-buttons" >Save</MDBBtn>
                            </div>
                        </div> :
                        <div className="role-buttons-reg">
                            <MDBBtn  gradient="peach" onClick={this.goToPartner} className="welcome-buttons">Partner</MDBBtn>
                            <br/>
                            <MDBBtn gradient="sunny-morning" onClick={this.goToSecretary} className="welcome-buttons">Secretary</MDBBtn>
                            <br/>
                            <MDBBtn gradient="peach" onClick={this.goToAdvocate} className="welcome-buttons">Advocate</MDBBtn>
                            <br/>
                            <MDBBtn gradient="aqua" onClick={this.goToIntern} className="welcome-buttons" >Intern</MDBBtn>
                        </div>
                    }




                </MDBCol>
            </MDBRow>
        )
    }
}
