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
       if( details.company_employees !== undefined){
           console.log(details.company_employees.Partner);

       }
        return(
            <MDBContainer>
               <h2 className="h2-responsive text-center">Company Information </h2>
                <MDBRow>
                    { details.company_employess !== undefined ?
                    _.map(details.company_employees.Partner,(detail,i)=>(
                        <MDBCol md="4">
                          <p>{detail.first_name}</p>
                        </MDBCol>
                    )):null}
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
