import { combineReducers } from 'redux';
import  registration from './registration/reducer';
import company from './company_registration/reducer';
import details from './details/reducer';
import appointments from './partner/reducer';

/*
* thunk has to be wrapped around a middleware
* since reducers only take simple action object
* we use thunk as the object we pass has an action
* here we link the store with our reducers using the create store function....
*/
export default combineReducers({
 registration,
 company,
 details,
 appointments
});
