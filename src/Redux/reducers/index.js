import {combineReducers} from 'redux';
import { profileReducer } from './profileReducer';
import { signalReducer } from './signalReducer';
import { cryptoReducer } from './cryptoReducer';
import { cryptoNewsReducer } from './cryptoNewsReducer';
import { cryptoEventReducer } from './cryptoEventReducer';
import { commentsReducer } from './commentsReducer';

const rootReducer = combineReducers({
    
    // reducers go here
    profileReducer,
    signalReducer,
    cryptoReducer,
    cryptoNewsReducer,
    cryptoEventReducer,
    commentsReducer
})

export default rootReducer;