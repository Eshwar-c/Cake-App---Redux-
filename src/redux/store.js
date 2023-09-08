import { legacy_createStore as createStore } from 'redux';
import cakeReducer from './store'
const store =createStore(cakeReducer)
export default store 