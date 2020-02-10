export const FETCH_APPOINTMENTS_BEGIN = 'FETCH_APPOINTMENTS_BEGIN';
export const FETCH_APPOINTMENTS_SUCCESS ='FETCH_APPOINTMENTS_SUCCESS';
export const ERROR_HANDLING = 'ERROR_HANDLING';
export const FETCH_MESSAGES_BEGIN = 'FETCH_MESSAGES_BEGIN';
export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS';
export const FETCH_MESSAGES_FAILURE ='FETCH_MESSAGES_FAILURE';

export const fetchAppointmentsBegin = () => ({
    type: FETCH_APPOINTMENTS_BEGIN,
});

export const fetchAppointmentsSuccess = appointments => ({
    type: FETCH_APPOINTMENTS_SUCCESS,
    payload: { appointments },

});

export const errorHandling = error => ({
    type: ERROR_HANDLING,
    payload: { error },
}); 

export const fetchMessagesBegin = () => ({
    type: FETCH_MESSAGES_BEGIN,
});

export const fetchMessagesSuccess = messages => ({
    type: FETCH_MESSAGES_SUCCESS,
    payload: { messages },

});

export const fetchMessageFailure = error => ({
    type: FETCH_MESSAGES_FAILURE,
    payload: { error },
});
