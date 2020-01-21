import { combineReducers } from 'redux';
import loginReducer from './components/Login/reducers';
import { loadingReducer } from './components/Loading/reducers';

const rootReducer = combineReducers({
  login: loginReducer,
  loading: loadingReducer,
});

export default rootReducer;
