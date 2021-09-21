import initialState from "./initialState.json";
import * as actionTypes from "../actions/actionTypes";

const documentReducer = (state = initialState.document, action) => {
    switch (action.type) {
        case actionTypes.SET_SKIN:
            return { ...state, id: action.payload.id, skinId: action.payload.skinId };
        
        case actionTypes.UPDATE_SKIN:
            return { ...state, skinId: action.payload.skinId };
        
        default: return state;
    }
}

export default documentReducer;
