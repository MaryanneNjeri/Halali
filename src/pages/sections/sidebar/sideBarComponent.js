import React from 'react';
import _ from  'lodash';
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';

export default ({
 iconClass,icon,imageSrc,children,...props
})=>{
    const selectedStyle = _.reduce(props,(aggregate,value,prop)=>(value && style[prop]
            ?{...aggregate,...styles[prop] } :aggregate),
        styles.standard);
    return (
        <div className="sidebar-fixed position-fixed">
        <img alt="dashboard image" src={imageSrc}/>
        <MDBListGroup className="list-group-flush">
            <NavLink exact to={props.firstLink} activeClassName="activeClass">
                <MDBListGroupItem>
                    <MDBIcon icon={icon.firstIcon} clasName={selectedStyle.icon}/>
                    {children}
                </MDBListGroupItem>
            </NavLink>
            <NavLink exact to={props.secondLink} activeClassName="activeClass">
                <MDBListGroupItem>
                    <MDBIcon icon={icon.secondIcon} clasName={selectedStyle.icon}/>
                    {children}
                </MDBListGroupItem>
            </NavLink>
            <NavLink exact to={props.thirdLink} activeClassName="activeClass">
                <MDBListGroupItem>
                    <MDBIcon icon={icon.thirdIcon} clasName={selectedStyle.icon}/>
                    {children}
                </MDBListGroupItem>
            </NavLink>
        </MDBListGroup>
        </div>

    );

}

