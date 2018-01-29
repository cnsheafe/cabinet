import { Increment, Decrement } from '../actions'
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../contracts'

describe('HelloWorld Actions', () => {
  describe('Increment', () => {
    it('should return action of type INCREMENT_COUNTER', () => {
      const action = Increment()
      expect(action.type).toBe(INCREMENT_COUNTER)
    })
  })
  describe('Decrement', () => {
    it('should return action of type DECREMENT_COUNTER', () => {
      const action = Decrement()
      expect(action.type).toBe(DECREMENT_COUNTER)
    })
  })
})
