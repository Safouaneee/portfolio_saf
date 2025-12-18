// redux/store.js 
import { legacy_createStore } from 'redux'; 
import CounterReducer from './redux'; 
const store = legacy_createStore(CounterReducer); 
 
export default store;