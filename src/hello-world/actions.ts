import { AnyAction } from 'redux'

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'

export interface IncrementCounter extends AnyAction {
  type: 'INCREMENT_COUNTER'
}

export type ValidActions = IncrementCounter

export const Increment = (): IncrementCounter => ({
  type: INCREMENT_COUNTER
})
