import { postSuccess,fetchRegistrationBegin,errorHandling } from "./action";

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

// function to accepts company details as a param.
export function registerCompany(company){
    
    return (dispatch) => {
        dispatch(fetchRegistrationBegin());
        return fetch('http://halali.co.ke/v1/profiles/firm/register/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(company)
        })
            .then(handleErrors)
            .then(response => response.json())
            .then((body) => {
               dispatch(postSuccess(body));
                return body;
            })
            .catch( error => dispatch(errorHandling(error)
            ))
        


    };
}
