import React from 'react';
import { connect } from 'react-redux';
import { MDBRow, MDBCol,MDBInput,MDBBtn, MDBContainer,MDBAlert } from 'mdbreact';
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
            phone_number:'',
            location:[
                {
                    'lat': 40.7143528,
                    'lng': -74.0059731
                }
            ],
            email:'',
            successful:null,
            message:''
        }
    }
    handleChange=({target})=>{
        this.setState({[target.name]:target.value})

    };
   register=()=>{
       const { company_name,number_of_employees,phone_number,address,email,location } = this.state;
       const { dispatch,error } = this.props;
       const company_details = {
           company_name,number_of_employees,address,phone_number,email,location
       };
    
     dispatch(registerCompany(company_details)).then((response)=>{
         console.log(response)
         if(response.type == 'ERROR_HANDLING')
         {
             this.setState({
                 successful:false
             })
        console.log(response.type)
         }
         else {
             this.setState({
                 successful: true,
                 message:response.message
             })
            //  this.props.history.push('\login')
         }
     })
     
      

    };
  render() {
    const { loading,error } = this.props;
    const {message,successful } = this.state;
    if (loading ){
        return (
            <LoadingComponent/>
        )
    }
    if(error){
        return (
            <ErrorComponent error={error}/>
        )
    }
    
    return (
        <MDBContainer fluid>

        { successful ==null ? null:
                    successful?
                    <MDBContainer>
                        <MDBAlert color="success" dismiss>
                        Successfully {message}
                        </MDBAlert>
              </MDBContainer>:
              <MDBContainer>
                <MDBAlert color="danger" dismiss>
                  Registration not successful
                </MDBAlert>
              </MDBContainer>}


        <MDBRow className="registration-form-row">
          <MDBCol className="img-column col-8"/>
          <MDBCol className="form-column col-4">
              <h3 className="h3-responsive text-center"><b>Registration</b></h3>
              <MDBInput label="Company Name" icon="pencil-alt"  iconSize="3x" iconClass="registration-icon" type="text" name="company_name" onChange={this.handleChange} required />
              <MDBInput label="Email" type="email" icon="envelope" iconClass="registration-icon" name="email" required onChange={this.handleChange}/>
              <MDBInput label="Phone Number" type="text" icon="phone" iconClass="registration-icon" name="phone_number" required onChange={this.handleChange}/>
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
        </MDBContainer>

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
