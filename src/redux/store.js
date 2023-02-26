import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootreducer from './rootReducer'

const store =createStore(rootreducer,composeWithDevTools())

export default store;