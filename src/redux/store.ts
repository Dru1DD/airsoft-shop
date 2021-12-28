import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { initialState, postReducer } from './reducer/post'

export const store = createStore(
    postReducer,
    initialState,
    composeWithDevTools()
)