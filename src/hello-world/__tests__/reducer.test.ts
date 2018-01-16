import reducer, { createHelloWorldRecord as createRecord } from '../reducer'
import { Increment } from '../actions'

describe('HelloWorldReducer', () => {
  const initState = createRecord().update('counter', val => val + 1)
  it('should make no changes when given no matching action', () => {
    const testState = reducer(initState, { type: '' })

    expect(testState).toEqual(initState)
  })
  it('should increase counter by 1 when given Increment action', () => {
    const testState = reducer(initState, Increment())
    expect(testState).not.toEqual(initState)
    expect(testState.get('counter', 0)).toBe(2)
  })
})
