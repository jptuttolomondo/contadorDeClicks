//import{createStore,applyMiddleware}from "redux"
// import {composeWithDevTools}from "redux-devtools-extension"
// import thunk from "redux-thunk"
import rootReducer from "../redux"
// //export const store= createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))
import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'

export const store = configureStore({
  middleware: [thunkMiddleware],
  reducer: rootReducer
  
})
