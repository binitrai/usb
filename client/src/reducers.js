import { combineReducers } from 'redux';
import  loginReducer  from './components/Login/reducers'

const rootReducer = combineReducers({
    login:loginReducer
});

export default rootReducer;