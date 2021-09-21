import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/reducers/rootReducer";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import { composeWithDevTools } from "redux-devtools-extension";

var firebaseConfig = {
    apiKey: "AIzaSyBqRUL6dDWG9gTWBFIrQ4FrHpMrXh9mJLw",
    authDomain: "resume-builder-356e8.firebaseapp.com",
    projectId: "resume-builder-356e8",
    storageBucket: "resume-builder-356e8.appspot.com",
    messagingSenderId: "512672780237",
    appId: "1:512672780237:web:02d6ed8cefd81847b2fe84",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

const reduxStore = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(firebase) // redux bindings for firestore,
    )
);

ReactDOM.render(
    <Provider store={reduxStore}>
        <BrowserRouter>
            <ReactReduxFirebaseProvider
                firebase={firebase}
                config={firebaseConfig}
                dispatch={reduxStore.dispatch}
                createFirestoreInstance={createFirestoreInstance}
            >
                <App />
            </ReactReduxFirebaseProvider>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
