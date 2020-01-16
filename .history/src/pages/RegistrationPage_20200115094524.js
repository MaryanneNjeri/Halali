import React from 'react';
import { connect } from 'react-redux';
import { MDBRow, MDBCol,MDBInput,MDBBtn } from 'mdbreact';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { registerCompany } from '../redux/registration/registrationFunctions';
import LoadingComponent from './sections/LoadingComponent';
import ErrorComponent from './sections/ErrorComponent';

const mapStyles= {
    width: '100%',
    height:'25%',


};
class RegistrationPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            company_name:'',
            number_of_employees:'',
            address: '',
            location:null,
            email:''
        }
    }
    handleChange=({target})=>{
        this.setState({[target.name]:target.value})

    };
   register=()=>{
       const { company_name,number_of_employees,address,email } = this.state;
       const { dispatch } = this.props;
       const company_details = {
           company_name,number_of_employees,address,email
       };
       dispatch(registerCompany(company_details));
        this.props.history.push('/login')

    };
  render() {
    const { loading,error } = this.props;
    if (loading ){
        return (
            <LoadingComponent/>
        )
    }
    if(error){
        return (
            <ErrorComponent/>
        )
    }

    return (

        <MDBRow className="registration-form-row">
          <MDBCol className="img-column col-8"/>
          <MDBCol className="form-column col-4">
              <h3 className="h3-responsive text-center"><b>Registration</b></h3>
              <MDBInput label="Company Name" icon="pencil-alt"  iconSize="3x" iconClass="registration-icon" type="text" name="company_name" onChange={this.handleChange} required />
              <MDBInput label="Email" type="email" icon="envelope" iconClass="registration-icon" name="email" required onChange={this.handleChange}/>
              <MDBInput label="Number of Employees" type="number"   iconClass="registration-icon" icon="users" name="number_of_employees" onChange={this.handleChange} required />
              <MDBInput label="Address" type="text"  icon="map-marker" iconClass="registration-icon" name="address" required onChange={this.handleChange} />
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
const mapStateToProps = state =>({
    loading: state.registration.loading,
    error: state.registration.error,
    response:state.registration.response
});
export default connect(mapStateToProps)(GoogleApiWrapper({
    apiKey: 'nnnnnn',
})(RegistrationPage));
