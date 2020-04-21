import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer, authoRehydrate } from 'redux-persist'
import FilesystemStorage from "redux-persist-filesystem-storage";


import AddSurveyReducer from './reducers/AddSurveyReducer'



const persistConfig = {
    key: "brkp",
    storage: FilesystemStorage.config(
        { storagePath: `${RNFetchBlob.fs.dirs.DocumentDir}/persistStore`,
        }
    )    
};

const rootReducer = combineReducers ({
    AddSurvey: AddSurveyReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
    let store = createStore(persistedReducer, undefined, authoRehydrate())
    let persistor = persistStore(store)
    return { store, persistor }
  }
