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
export function registerAdvocate(advocate){
    console.log(advocate);
    return (dispatch) => {
        dispatch(fetchCompanyBegin());
        return fetch('http://localhost:3001/Advocate', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(advocate)
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
export function registerClerk(clerk){
    return (dispatch) => {
        dispatch(fetchCompanyBegin());
        return fetch('http://localhost:3001/LegalClerk', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(clerk)
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
export function registerIntern(intern){
    return (dispatch) => {
        dispatch(fetchCompanyBegin());
        return fetch('http://localhost:3001/Intern', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(intern)
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

export function registerSecretary(secretary){
    return (dispatch) => {
        dispatch(fetchCompanyBegin());
        return fetch('http://localhost:3001/Secretary', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(secretary)
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
