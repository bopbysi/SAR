import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { AsyncStorage } from 'react-native'


import AddSurveyReducer from './reducers/AddSurveyReducer'




const persistConfig = {
    key: "brkp",
    storage: AsyncStorage
     
};

const rootReducer = combineReducers ({
    AddSurvey: AddSurveyReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
    let store = createStore(persistedReducer)
    let persistor = persistStore( store )
    return { store, persistor }
  }
