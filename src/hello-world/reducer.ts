import { Record } from 'immutable'
import { Reducer } from 'redux'
import { INCREMENT_COUNTER, ValidActions } from './actions'

interface State {
  counter: number
}
export interface HelloWorldState extends Record<State> {}

export const createHelloWorldRecord = Record<State>({ counter: 0 })

const reducer: Reducer<HelloWorldState> = (
  state = createHelloWorldRecord(),
  action: ValidActions
) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state.update('counter', counter => counter + 1)
    default:
      return state
  }
}

export default reducer
