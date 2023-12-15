

const { configureStore, combineReducers } = require("@reduxjs/toolkit");
import donateSlice from "./Reduces/donatReduces"
import { persistReducer } from 'redux-persist'
import AsyncStorage from "@react-native-async-storage/async-storage";
const persistConfig = {
    key: 'root',
    storage:AsyncStorage,
    blacklist: ['err'],
  }
  const  reducer = combineReducers({
  donate :donateSlice
   
  })
  const persistReducers = persistReducer(persistConfig,reducer)
const Store = configureStore({
reducer:{
    reducer: persistReducers
}
})
export default Store

