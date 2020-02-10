import { FETCH_APPOINTMENTS_BEGIN,FETCH_APPOINTMENTS_SUCCESS,ERROR_HANDLING,FETCH_MESSAGES_BEGIN,FETCH_MESSAGES_SUCCESS,FETCH_MESSAGES_FAILURE} from "./action";

const initialState = {
    items: [],
    loading: false,
    error: null,
    messages:[],

};

export default function  partnerReducer(state = initialState,action) {

    switch (action.type) {
        case FETCH_APPOINTMENTS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_APPOINTMENTS_SUCCESS:
            return {
                ...state,
                loading:false,
                items: action.payload.appointments
            };
        case ERROR_HANDLING:
            return {
                ...state,
                error: action.payload.error,
                loading:false,
                items:[]
            };
        case FETCH_MESSAGES_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }; 
        case FETCH_MESSAGES_SUCCESS:
            return {
                ...state,
                loading:false,
                messages: action.payload.messages
            };  
        case FETCH_MESSAGES_FAILURE:
            return {
                ...state,
                loading:false,
                error: action.payload.error,
                messages: [],
            };             
        default:
            return state;
    }


}
