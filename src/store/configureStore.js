import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { reducer as formReducer } from 'redux-form'
import { AsyncStorage } from 'react-native'


import AddSurveyReducer from './reducers/AddSurveyReducer'


const persistConfig = {
    key: "brkp",
    storage: AsyncStorage,
    blacklist: ["form"],    
};

const rootReducer = combineReducers ({
    AddSurvey: AddSurveyReducer,
    form: formReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer);

export const persistor = persistStore(store);

// export default () => {
//     let store = createStore(persistedReducer)
//     let persistor = persistStore( store )
//     return { store, persistor }
//   }
