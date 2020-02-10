import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';

import { withRouter } from 'react-router-dom';

class SideCollapsedNavigation extends React.Component {
  render() {
    const firm_id = localStorage.getItem('firm_id')
    const employee = localStorage.getItem('employee')
    return(
    <div className="sidebar-collapsed position-fixed">
      
      <MDBListGroup className="list-group-flush">
        <NavLink exact to={`/${employee}/${firm_id}`} activeClassName="activeClass">
          <MDBListGroupItem className="icon">
            <MDBIcon icon="tachometer-alt" className="mr-3 icon-color"/>
          </MDBListGroupItem>
        </NavLink>
        <br/>
        
        <NavLink to="/requests" activeClassName="activeClass">
          <MDBListGroupItem className="icon">
            <MDBIcon icon="envelope" className="mr-3 icon-color"/>
          </MDBListGroupItem>
        </NavLink>
        <br/>
        <NavLink to="/bookings" activeClassName="activeClass">
          <MDBListGroupItem className="icon">
            <MDBIcon icon="address-book" className="mr-3 icon-color"/>

          </MDBListGroupItem>
        </NavLink>

        {/* <NavLink to="/cancellation" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="ban" className="mr-3"/>

          </MDBListGroupItem>
        </NavLink> */}
        {/* <NavLink to="/404" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="exclamation" className="mr-3"/>
          </MDBListGroupItem>
        </NavLink> */}
     </MDBListGroup>
    </div>
    )
  }
}


export default withRouter(SideCollapsedNavigation)

