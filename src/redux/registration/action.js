export  const FETCH_REGISTRATION_BEGIN = 'FETCH_REGISTRATION_BEGIN';
export  const POST_REGISTRATION_SUCCESS = 'POST_REGISTRATION_SUCCESS';
export  const  FETCH_REGISTRATION_SUCCESS ='FETCH_REGISTRATION_SUCCESS';
export  const  ERROR_HANDLING = 'ERROR_HANDLING';

export const fetchRegistrationBegin = () => ({
    type: FETCH_REGISTRATION_BEGIN,
});

export const fetchRegistrationSuccess = registrationData => ({
    type: FETCH_REGISTRATION_SUCCESS,
    payload: { registrationData },

});
export const postSuccess = response => ({
    type: POST_REGISTRATION_SUCCESS,
    payload: { response }
});

export const errorHandling = error => ({
    type: ERROR_HANDLING,
    payload: { error },
});


