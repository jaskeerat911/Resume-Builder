import initialState from "./initialState.json";
import { actionTypes, firebaseReducer } from "react-redux-firebase";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import contactReducer from "./contactReducer";
import documentReducer from "./documentReducer";
import educationReducer from "./educationReducer";
import authReducer from "./authReducer";

const appReducer = combineReducers({
    auth: authReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    document: documentReducer,
    contact: contactReducer,
    education: educationReducer,
});

const rootReducer = (state = initialState, action) => {
    if (action.type === actionTypes.SIGN_OUT) {
        state = undefined;
    }
    return appReducer(state, action);
};

export default rootReducer;
