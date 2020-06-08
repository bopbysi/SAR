import { createStore, combineReducers, compose, apllyMiddleware, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { reducer as formReducer } from 'redux-form'
import { AsyncStorage } from 'react-native'
import thunk from "redux-thunk"


import AddSurveyReducer from './reducers/AddSurveyReducer'
import appReducer from "./reducers/appReducer"


const persistConfig = {
    key: "brkp",
    storage: AsyncStorage,
    blacklist: ["form"],    
};

const rootReducer = combineReducers ({
    form: formReducer,
    surveys: AddSurveyReducer,
    app: appReducer
    
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

let composeEnhancers = compose;

if (__DEV__) {
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk)));

export const persistor = persistStore(store);

// export default () => {
//     let store = createStore(persistedReducer)
//     let persistor = persistStore( store )
//     return { store, persistor }
//   }
