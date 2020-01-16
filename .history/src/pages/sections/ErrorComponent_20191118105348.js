import React from 'react';
import { MDBCol, MDBContainer } from 'mdbreact';
import  errorImage  from '../../assets/images/error.svg'

// eslint-disable-next-line react/prefer-stateless-function
class ErrorComponent extends React.Component {

    render() {

        return (
            <MDBContainer>
                    <img alt="Server error"  className="img-fluid" src={errorImage}/>
                    <br/>
                    <br/>
                    <br/>
                    <h2 className="error-header text-center">Oops! Something went wrong</h2>
                    <p className="error-text text-center">An error seemed to have occurred</p>
            </MDBContainer>
        );
    }
}

export default ErrorComponent;
