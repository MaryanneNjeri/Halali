export  const FETCH_COMPANY_BEGIN = 'FETCH_COMPANY_BEGIN';
export  const POST_COMPANY_DETAILS = 'POST_COMPANY_DETAILS';
export  const  FETCH_COMPANY_SUCCESS ='FETCH_COMPANY_SUCCESS';
export  const  ERROR_HANDLING = 'ERROR_HANDLING';

export const fetchCompanyBegin = () => ({
    type: FETCH_COMPANY_BEGIN,
});

export const fetchCompanySuccess = registrationData => ({
    type: FETCH_COMPANY_SUCCESS,
    payload: { registrationData },

});
export const postCompanyDetails = company => ({
    type: POST_COMPANY_DETAILS,
    payload: { company }
});

export const errorHandling = error => ({
    type: ERROR_HANDLING,
    payload: { error },
});


