import { AnyAction } from 'redux'

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

export interface IncrementCounter extends AnyAction {
  type: 'INCREMENT_COUNTER'
}

export interface DecrementCounter extends AnyAction {
  type: 'DECREMENT_COUNTER'
}