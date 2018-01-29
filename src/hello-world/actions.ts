import { INCREMENT_COUNTER, DECREMENT_COUNTER, IncrementCounter, DecrementCounter } from './contracts'

export const Increment = (): IncrementCounter => ({
  type: INCREMENT_COUNTER
})

export const Decrement = (): DecrementCounter => ({
  type: DECREMENT_COUNTER
})
