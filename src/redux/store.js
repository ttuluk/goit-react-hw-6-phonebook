// import { createStore, combineReducers  } from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension';
import contactReducer from './contact-reducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

const middleWare =  [...getDefaultMiddleware(), logger] ;

const store = configureStore({
    reducer: {
    contact: contactReducer,
    },
    middleware: middleWare,
    devTools:process.env.NODE_ENV === 'development',
});

export default store;
