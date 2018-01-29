import { Record } from 'immutable'
import { Reducer } from 'redux'
import { INCREMENT_COUNTER, DECREMENT_COUNTER, IncrementCounter, DecrementCounter } from './contracts'

type ValidActions = IncrementCounter | DecrementCounter
interface State {
  counter: number
}
export interface HelloWorldState extends Record<State> {}

export const createHelloWorldRecord = Record<State>({ counter: 0 })

const reducer: Reducer<HelloWorldState | undefined> = (
  state = createHelloWorldRecord(),
  action: ValidActions
) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state.update('counter', counter => counter + 1)
    case DECREMENT_COUNTER:
      return state.update('counter', counter => counter - 1)
    default:
      return state
  }
}

export default reducer
