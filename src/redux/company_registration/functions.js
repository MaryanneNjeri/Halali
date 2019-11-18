import { postCompanyDetails,fetchCompanyBegin,errorHandling } from "./action";

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

// function to accepts company details as a param.
export function registerPartner(partner){
    console.log(partner);
    return (dispatch) => {
        dispatch(fetchCompanyBegin());
        return fetch('http://localhost:3001/Partner', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(partner)
        })
            .then(handleErrors)
            .then(response => response.json())
            .then((body) => {
                dispatch(postCompanyDetails(body));
                return body;
            })
            .catch(error => dispatch(errorHandling(error)));
    };
}
