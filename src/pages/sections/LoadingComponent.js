import React from 'react';
import { MDBCol, MDBRow } from 'mdbreact';
import ReactLoading from 'react-loading';

class LoadingComponent extends React.Component{
    render() {
        return(
            <div className="center">
                <MDBRow>
                    <MDBCol lg="9" align="center">
                        <ReactLoading className="loading-bar" type="spinningBubbles" color="orange" height="80%" width="40%" />
                        <p className="loading-text">Loading......</p>
                    </MDBCol>
                </MDBRow>
            </div>
        )
    }
}

export default LoadingComponent;
