import{ fetchAppointmentsBegin,fetchAppointmentsSuccess,errorHandling,fetchMessagesBegin,fetchMessagesSuccess,fetchMessageFailure } from "./action";

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

// function to accepts company details as a param.
export function getAppointments(){
    return (dispatch) => {
        dispatch(fetchAppointmentsBegin());
        return fetch('http://localhost:3001/current_appointments', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(handleErrors)
            .then(response => response.json())
            .then((body) => {
                dispatch(fetchAppointmentsSuccess(body));
                return body;
            })
            .catch(error => dispatch(errorHandling(error)));
    };
}

export function getMessages(){
    return (dispatch) => {
        dispatch(fetchMessagesBegin());
        return fetch('http://localhost:3001/messages_get_request_fetch_all_messsages', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(handleErrors)
            .then(response => response.json())
            .then((body) => {
                dispatch(fetchMessagesSuccess(body));
                return body;
            })
            .catch(error => dispatch(fetchMessageFailure(error)));
    }; 
}
