import { postCompanyDetails,fetchCompanyBegin,errorHandling } from "./action";
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

// function to accepts company details as a param.
export function registerCompanyDetails(data){
    console.log(data)
    const firm_id = localStorage.getItem('firm_id')
    console.log(firm_id)
    return (dispatch) => {
        dispatch(fetchCompanyBegin());
        return fetch(`http://halali.co.ke/v1/profiles/users/register/${firm_id}/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
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

