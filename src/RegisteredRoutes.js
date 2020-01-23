import React,{ Component } from 'react';
import { Route,Redirect } from 'react-router-dom';
import { auth } from './auth/functions/registered';

export const RegisteredRoute = ({ component: Component,...rest})=> 
(
    <Route {...rest} render={props=>(
        auth.registered()? 
        <Component {...props}/>
        :
        <Redirect to={{pathname:'/registration', state:{from:props.location}}}/>
    )}
    />
);