import { FETCH_DETAILS_BEGIN,FETCH_DETAILS_SUCCESS,ERROR_HANDLING} from "./action";

const initialState = {
    items: [],
    loading: false,
    error: null,

};

export default function  companyReducer(state = initialState,action) {

    switch (action.type) {
        case FETCH_DETAILS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_DETAILS_SUCCESS:
            return {
                ...state,
                loading:false,
                items: action.payload.companyData
            };
        case ERROR_HANDLING:
            return {
                ...state,
                error: action.payload.error,
                loading:false,
                items:[]
            };
        default:
            return state;
    }


}
