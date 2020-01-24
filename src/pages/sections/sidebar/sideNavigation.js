import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class SideNavigation extends React.Component {
  logoutUser = () => {
    const { logout } = this.props;
    logout();
     this.props.history.push('/login')
  };


  render() {

    return (
      <div className="sidebar-fixed position-fixed">
        
        <MDBListGroup className="list-group-flush">
          <NavLink exact to="/" activeClassName="activeClass">
            <MDBListGroupItem className="icon">
              <MDBIcon icon="tachometer-alt" className="mr-3 icon-color"/>
              Dashboard
            </MDBListGroupItem>
          </NavLink>
          <br/>
          <NavLink to="/requests" activeClassName="activeClass">
            <MDBListGroupItem className="icon">
              <MDBIcon icon="envelope" className="mr-3 icon-color"/>
              Schedule
            </MDBListGroupItem>
          </NavLink>
          <br/>
          <NavLink to="/bookings" activeClassName="activeClass">
            <MDBListGroupItem className="icon">
              <MDBIcon icon="address-book" className="mr-3 icon-color"/>
              Messages
            </MDBListGroupItem>
          </NavLink>

          {/* <NavLink to="/cancellation" activeClassName="activeClass">
            <MDBListGroupItem>
              <MDBIcon icon="ban" className="mr-3"/>
              Cancellation
            </MDBListGroupItem>
          </NavLink>
          <NavLink to="/404" activeClassName="activeClass">
            <MDBListGroupItem>
              <MDBIcon icon="exclamation" className="mr-3"/>
              404
            </MDBListGroupItem>
          </NavLink> */}
              
        </MDBListGroup>
      </div>
    );

  }


}



export default withRouter(SideNavigation)

