import React from 'react';
import { connect } from 'react-redux'
import { MDBContainer } from "mdbreact";
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
        console.log(details);
        return(
            <MDBContainer>
                <p>Hello world</p>
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
