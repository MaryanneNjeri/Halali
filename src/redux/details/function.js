import{ fetchDetailsSuccess,fetchDetailsBegin,errorHandling } from "./action";

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

// function to accepts company details as a param.
export function viewCompanyDetails(){
    return (dispatch) => {
        dispatch(fetchDetailsBegin());
        return fetch('http://localhost:3001/company_employees', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(handleErrors)
            .then(response => response.json())
            .then((body) => {
                dispatch(fetchDetailsSuccess(body));
                return body;
            })
            .catch(error => dispatch(errorHandling(error)));
    };
}

