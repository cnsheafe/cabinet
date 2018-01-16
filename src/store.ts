import { createStore, combineReducers } from 'redux'
import {  devToolsEnhancer } from 'redux-devtools-extension'

import HelloWorldReducer, { HelloWorldState, createHelloWorldRecord } from './hello-world/reducer'

export interface State {
  helloWorld: HelloWorldState
}

const reducer = combineReducers<State>({
  helloWorld: HelloWorldReducer
})

const mWindow = window as any

const store = createStore(reducer, devToolsEnhancer({}))
export default store