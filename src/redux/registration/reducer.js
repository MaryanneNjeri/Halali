import { FETCH_REGISTRATION_SUCCESS,FETCH_REGISTRATION_BEGIN,POST_REGISTRATION_SUCCESS,ERROR_HANDLING} from "./action";

const initialState = {
    items: [],
    loading: false,
    error: null,
    response: null,
};

export default function  registrationReducer(state = initialState,action) {

    switch (action.type) {
        case FETCH_REGISTRATION_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case POST_REGISTRATION_SUCCESS:
            return {
                ...state,
                loading:false,
                response: action.payload.response
            };
        case ERROR_HANDLING:
            return {
                ...state,
                error: action.payload.error,
                loading:false,
                response:null
            };
        default:
            return state;
    }


}
