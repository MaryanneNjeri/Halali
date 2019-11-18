export  const FETCH_DETAILS_BEGIN = 'FETCH_DETAILS_BEGIN';
export  const  FETCH_DETAILS_SUCCESS ='FETCH_DETAILS_SUCCESS';
export  const  ERROR_HANDLING = 'ERROR_HANDLING';

export const fetchDetailsBegin = () => ({
    type: FETCH_DETAILS_BEGIN,
});

export const fetchDetailsSuccess = companyData => ({
    type: FETCH_DETAILS_SUCCESS,
    payload: { companyData },

});

export const errorHandling = error => ({
    type: ERROR_HANDLING,
    payload: { error },
});


