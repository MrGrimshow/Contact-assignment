import { compose, createStore,applyMiddleware, combineReducers } from "redux";
import contactReducer from "../reducers/contactReducer";
import firebase from "../firebase/Config"
import { getFirebase, reduxReactFirebase, firebaseReducer} from "react-redux-firebase"
import { getFirestore, reduxFirestore} from "redux-firestore"
import thunk from "redux-thunk";

const reducers = combineReducers({
	contacts: contactReducer,
	firebase: firebaseReducer,
});

const store = createStore(reducers, 
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxReactFirebase(firebase),
        reduxFirestore(firebase)
    ));

export default store;
