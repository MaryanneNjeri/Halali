import React from 'react';
import { connect } from 'react-redux';
import { registerPartner,registerAdvocate,registerIntern,registerSecretary } from "../redux/company_registration/functions";
import {MDBBtn, MDBCol, MDBInput, MDBRow,MDBIcon} from "mdbreact";
import LoadingComponent from './sections/LoadingComponent';
import ErrorComponent from './sections/ErrorComponent';

let partner =[];
let advocate = [];
let intern = [];
let secretary = [];

class CompanyRegistration extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            role:'',
            partner:[],
            advocate:[],
            intern:[],
            secretary:[],
            first_name:'',
            last_name:'',
            email:'',
            phone_number:'',
            user_name:'',
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
    handleChange=({target})=>{
        this.setState({[target.name]:target.value})

    };
    save=()=>{
        const { first_name,last_name,email,role,user_name,phone_number } = this.state;
        const { dispatch } = this.props;
        if ( role === 'partner'){
            partner.push({ first_name,last_name,email,user_name,phone_number,role});
            this.setState({
                partner,
                form:false
            });
            dispatch(registerPartner(partner))
        }
        else  if (role === 'advocate'){
            advocate.push({first_name,last_name,email,user_name,phone_number,role});
            this.setState({
                advocate:advocate,
                form:false

            });
            dispatch(registerAdvocate(advocate))


        }
        else if (role === 'intern'){
            intern.push({first_name,last_name,email,user_name,phone_number,role});
            this.setState({
                intern,
                form:false
            });
            dispatch(registerIntern(intern))


        }
        else{
            secretary.push({first_name,last_name,email,user_name,phone_number,role});
            this.setState({
                secretary,
                form:false
            });
            dispatch(registerSecretary(secretary))


        }


    };
    close=()=>{
        this.setState({
            form:false
        })
    };
    add=()=>{
        const { first_name,last_name,email,role,phone_number,user_name } = this.state;
        const { dispatch } = this.props;

        if ( role === 'partner'){
            partner.push({ first_name,last_name,email,user_name,phone_number,role});
            this.setState({
                partner
            });
        }
        else  if (role === 'advocate'){
            advocate.push({first_name,last_name,email,role,user_name,phone_number,});
            this.setState({
                advocate:advocate
            })

        }
        else if (role === 'intern'){
            intern.push({first_name,last_name,email,role,user_name,phone_number,});
            this.setState({
                intern
            })

        }
        else{
            secretary.push({first_name,last_name,email,role,user_name,phone_number,});
            this.setState({
                secretary
            })

        }
        this.setState({
            form:true,
            first_name:'',
            last_name:'',
            phone_number:'',
            user_name:'',
            email:''
        })
    };
    next=()=>{
        this.props.history.push('/view_details')
    };
    render() {
        const { form,role,headerText,first_name,last_name,email,user_name,phone_number } = this.state;
        const { loading,error } = this.props;
        if(loading){
            return (
                <LoadingComponent/>
            )
        }
        if (error){
            return (
                <ErrorComponent/>
            )
        }
        return(
            <MDBRow className="registration-form-row">
                <MDBCol  className="company-reg-column col-7"/>
                <MDBCol  className="form-column col-5">

                    <h4 className="h3-responsive text-center"><b>Who would you like to register</b></h4>
                     <br/>
                    { form ===  true ?
                        <div className="form">

                                <MDBIcon icon="times" className="float-right" onClick={this.close} />

                            <p className="welcome-text">{headerText}</p>
                            <MDBInput
                                label="First Name"
                                type="text"
                                value={first_name}
                                name="first_name"
                                onChange={this.handleChange} required
                            />
                            <MDBInput
                                label="Last Name"
                                type="text"
                                value={last_name}
                                name="last_name"
                                onChange={this.handleChange} required />
                            <MDBInput
                                label="Email"
                                type="email"
                                value={email}
                                name="email"
                                onChange={this.handleChange} required />
                            <MDBInput
                                label="Username"
                                type="text" value={user_name}
                                name="user_name"
                                onChange={this.handleChange} required />
                            <MDBInput
                                label="Phone Number"
                                type="text" value={phone_number}
                                name="phone_number"
                                onChange={this.handleChange} required />
                            <MDBInput
                                label="Role"
                                value={role}
                                type="text"
                                name="role" required />

                            <br/>
                            <div className="register-button-login">
                                <MDBBtn gradient="aqua"  onClick={this.add}  icon="magic" className="register-buttons" >
                                    <MDBIcon icon="plus" className="mr-1" /> Save & Add</MDBBtn>
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
                            <div className="next">
                                <p>Next  <MDBIcon onClick={this.next} icon="arrow-right" /></p>
                            </div>
                        </div>
                    }




                </MDBCol>
            </MDBRow>
        )
    }
}
const mapStateToProps = state =>({
    loading: state.company.loading,
    error: state.company.error,
    company:state.company.response
});

export default connect(mapStateToProps)(CompanyRegistration)
