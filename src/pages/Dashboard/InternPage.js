import React from 'react';
import { MDBContainer,MDBRow,MDBCol,MDBCard,MDBCardBody,MDBCardText,MDBIcon} from "mdbreact";
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // make sure to import the default stylesheet
import { connect } from 'react-redux';
import _ from 'lodash';
import { getAppointments,getMessages } from "../../redux/partner/function";
import LoadingComponent from '../sections/LoadingComponent';
import ErrorComponent from '../sections/ErrorComponent';

let today = new Date();
let lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

class InternPage extends React.Component{
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getAppointments())
        dispatch(getMessages())

    }
    render() {
        const { loading,appointments,error,messages } = this.props;
        
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
        return(
            <MDBContainer fluid>
                <h3 className="dashboard-text"></h3>
                <MDBRow>
                    <MDBCol className="col-md-push-4 col-xs-push-4 col-sm-push-4 col-lg-4">
                    <InfiniteCalendar
                        width={400}
                        height={600}
                        selected={today}
                        disabledDays={[0,6]}
                        minDate={lastWeek}
                    />,
                    </MDBCol>

                    <MDBCol className="col-md-pull-8 col-sm-pull-8 col-lg-8 col-xs-pull-8">
                        <h3 className="text-canter subtext">Today's appointments</h3>
                        <br/>
                        <MDBRow>
                        { appointments !== undefined ?
                    
                    _.map(appointments,(appointment,i)=>(
                            <MDBCol className="col-md-12 col-xs-6 col-lg-6 col-sm-6" key={i}>
                                <MDBCard className="appointment-card">
                                    <MDBCardBody>
                                      <MDBRow>
                                          <MDBCol className="col-4">
                                          <MDBIcon className="appointment-icon" size="2x" icon="user-circle" />
                                          </MDBCol>
                                          <MDBCol className="col-8">
                                        <MDBCardText>
                                              {appointment.client_name}
                                              <br/>
                                            <b>{appointment.start_time} - {appointment.end_time}</b>
                                          </MDBCardText>
                                      
                                          
                                          </MDBCol>
                                      </MDBRow>  
                                    </MDBCardBody>
                                </MDBCard>
                                <br></br>
                            </MDBCol>
                    ))
                        : 
                        <p>No appointments available</p>}
                        </MDBRow>
                       <br/>
                        <h3 className="text-canter subtext">Recent Messages</h3>
                        <br/>
                        <MDBRow>
                        { messages !== undefined ?
                    
                    _.map(messages,(message,i)=>(
                            <MDBCol className="col-md-12 col-xs-6 col-lg-6 col-sm-6" key={i}>
                                <MDBCard className="appointment-card">
                                    <MDBCardBody>
                                      <MDBRow>
                                          <MDBCol className="col-4">
                                          <MDBIcon className="appointment-icon" size="2x" icon="user-circle" />
                                          </MDBCol>
                                          <MDBCol className="col-8">
                                        <MDBCardText>
                                              {message.from}
                                              <br/>
                                             <b>{message.message_title}</b>
                                          </MDBCardText>
                                      
                                          
                                          </MDBCol>
                                      </MDBRow>  
                                    </MDBCardBody>
                                </MDBCard>
                                <br></br>
                            </MDBCol>
                    ))
                        : 
                        <p>No messages available</p>}
                        </MDBRow>

                    </MDBCol>

                </MDBRow> 


            </MDBContainer>
        )
    }
} 

const mapStateToProps = state =>({
    loading: state.appointments.loading,
    error: state.appointments.error,
    appointments:state.appointments.items,
    messages:state.appointments.messages
});
export default connect(mapStateToProps)(InternPage)
