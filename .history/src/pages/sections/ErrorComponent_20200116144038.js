import React from 'react';
import { MDBCol, MDBContainer } from 'mdbreact';
import  errorImage  from '../../assets/images/error.svg'
import _ from 'lodash';

// eslint-disable-next-line react/prefer-stateless-function
class ErrorComponent extends React.Component {

    render() {
     const { error } = this.props;
        return (
            <MDBContainer>
                    <img alt="Server error"  className="img-fluid" src={errorImage}/>
                    <br/>
                    <br/>
                    <br/>
                    <h2 className="error-header text-center">Oops! Something went wrong</h2>
                    {!_.isEmpty(error)?
                    <p className="error-text text-center">{error}</p>:
                    
                    <p className="error-text text-center">An error seemed to have occurred</p>
                    }
            </MDBContainer>
        );
    }
}

export default ErrorComponent;
