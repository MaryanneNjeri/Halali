import { FETCH_COMPANY_BEGIN,POST_COMPANY_DETAILS,ERROR_HANDLING} from "./action";

const initialState = {
    items: [],
    loading: false,
    error: null,
    response: null,
};

export default function  companyReducer(state = initialState,action) {

    switch (action.type) {
        case FETCH_COMPANY_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case POST_COMPANY_DETAILS:
            return {
                ...state,
                loading:false,
                response: action.payload.company
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
