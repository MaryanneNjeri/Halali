import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { MDBContainer,MDBRow,MDBCol,MDBCardBody,MDBCard,MDBCardText,MDBCardTitle } from "mdbreact";
import { viewCompanyDetails } from "../redux/details/function";
import LoadingComponent from './sections/LoadingComponent';
import ErrorComponent from './sections/ErrorComponent';

class ViewDetailsPage extends React.Component{
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(viewCompanyDetails())
    }

    render() {
        const { loading,details,error } = this.props;
        
        if(loading){
            return(
                <LoadingComponent/>
            )
        }
        if(error){
            return(
                <ErrorComponent/>
            )
        }
           return(
            <MDBContainer>
               <h2 className="h2-responsive text-center">Company Information </h2>
               <br/>
                    <br/>
                    <h4 className="text-center"> <i className="fas fa-user-friends"></i> Partners</h4>
                    <br/>
                <MDBRow>
                    
                    { details.company_employees !== undefined ?
                    
                    _.map(details.company_employees.Partner,(detail,i)=>(
                        <MDBCol md="4" key={i}>
                            <MDBCard>
                                <MDBCardBody>
                                    <MDBRow>
                                        <MDBCol md="6">
                                        <p className="card-details-text">First name</p>
                                        <p className="card-details-text">Last name</p>
                                        <p className="card-details-text">Email</p>
                                        <p className="card-details-text">Address</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                            <MDBCardText>{detail.first_name}</MDBCardText>
                                            <MDBCardText>{detail.last_name}</MDBCardText>
                                            <MDBCardText>{detail.email}</MDBCardText>
                                            <MDBCardText>{detail.address}</MDBCardText> 
                                        </MDBCol>
                                    </MDBRow>

                                </MDBCardBody>

                            </MDBCard>
                            <br></br>
                        </MDBCol>
                    )):null}
                </MDBRow> 
                <br/>
                <br/>
                    <h4 className="text-center"> <i className="fas fa-user-friends"></i> Advocates</h4>
                    <br/>
                <MDBRow>
                    
                    { details.company_employees !== undefined ?
                    
                    _.map(details.company_employees.Advocate,(detail,i)=>(
                        <MDBCol md="4" key={i}>
                            <MDBCard>
                                <MDBCardBody>
                                    <MDBRow>
                                        <MDBCol md="6">
                                        <p className="card-details-text">First name</p>
                                        <p className="card-details-text">Last name</p>
                                        <p className="card-details-text">Email</p>
                                        <p className="card-details-text">Address</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                            <MDBCardText>{detail.first_name}</MDBCardText>
                                            <MDBCardText>{detail.last_name}</MDBCardText>
                                            <MDBCardText>{detail.email}</MDBCardText>
                                            <MDBCardText>{detail.address}</MDBCardText> 
                                        </MDBCol>
                                    </MDBRow>

                                </MDBCardBody>

                            </MDBCard>
                            <br></br>
                        </MDBCol>
                    )):<p>No Advocates registered</p>}
                </MDBRow>
                
                <br/>
                    <h4 className="text-center"> <i className="fas fa-user-friends"></i> Interns</h4>
                    <br/>
                <MDBRow>
                    
                    { details.company_employees !== undefined ?
                    
                    _.map(details.company_employees.Intern,(detail,i)=>(
                        <MDBCol md="4" key={i}>
                            <MDBCard>
                                <MDBCardBody>
                                    <MDBRow>
                                        <MDBCol md="6">
                                        <p className="card-details-text">First name</p>
                                        <p className="card-details-text">Last name</p>
                                        <p className="card-details-text">Email</p>
                                        <p className="card-details-text">Address</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                            <MDBCardText>{detail.first_name}</MDBCardText>
                                            <MDBCardText>{detail.last_name}</MDBCardText>
                                            <MDBCardText>{detail.email}</MDBCardText>
                                            <MDBCardText>{detail.address}</MDBCardText> 
                                        </MDBCol>
                                    </MDBRow>

                                </MDBCardBody>

                            </MDBCard>
                            <br></br>
                        </MDBCol>
                    )):<p>No Interns registered</p>}
                </MDBRow> 

                <br/>
                    <h4 className="text-center"> <i className="fas fa-user-friends"></i> Secretary</h4>
                    <br/>
                <MDBRow>
                    
                    { details.company_employees !== undefined ?
                    
                    _.map(details.company_employees.Secretary,(detail,i)=>(
                        <MDBCol md="4" key={i}>
                            <MDBCard>
                                <MDBCardBody>
                                    <MDBRow>
                                        <MDBCol md="6">
                                        <p className="card-details-text">First name</p>
                                        <p className="card-details-text">Last name</p>
                                        <p className="card-details-text">Email</p>
                                        <p className="card-details-text">Address</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                            <MDBCardText>{detail.first_name}</MDBCardText>
                                            <MDBCardText>{detail.last_name}</MDBCardText>
                                            <MDBCardText>{detail.email}</MDBCardText>
                                            <MDBCardText>{detail.address}</MDBCardText> 
                                        </MDBCol>
                                    </MDBRow>

                                </MDBCardBody>

                            </MDBCard>
                            <br></br>
                        </MDBCol>
                    )):<p>No Secretary registered</p>}
                </MDBRow>

                <br/>
                    <h4 className="text-center"> <i className="fas fa-user-friends"></i> Legal Clerks</h4>
                    <br/>
                <MDBRow>
                    
                    { details.company_employees !== undefined ?
                    
                    _.map(details.company_employees.LegalClerk,(detail,i)=>(
                        <MDBCol md="4" key={i}>
                            <MDBCard>
                                <MDBCardBody>
                                    <MDBRow>
                                        <MDBCol md="6">
                                        <p className="card-details-text">First name</p>
                                        <p className="card-details-text">Last name</p>
                                        <p className="card-details-text">Email</p>
                                        <p className="card-details-text">Address</p>
                                        </MDBCol>
                                        <MDBCol md="6">
                                            <MDBCardText>{detail.first_name}</MDBCardText>
                                            <MDBCardText>{detail.last_name}</MDBCardText>
                                            <MDBCardText>{detail.email}</MDBCardText>
                                            <MDBCardText>{detail.address}</MDBCardText> 
                                        </MDBCol>
                                    </MDBRow>

                                </MDBCardBody>

                            </MDBCard>
                            <br></br>
                        </MDBCol>
                    )):<p>No LegalClerks registered</p>}
                </MDBRow>
            </MDBContainer>
        )
    }
}

const mapStateToProps = state =>({
    loading: state.details.loading,
    error: state.details.error,
    details:state.details.items
});

export default connect(mapStateToProps)(ViewDetailsPage)
