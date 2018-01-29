import reducer, {
  createHelloWorldRecord as createRecord,
  HelloWorldState
} from '../reducer'
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../contracts'

describe('HelloWorldReducer', () => {
  let initState: HelloWorldState
  let testState: HelloWorldState | undefined
  beforeEach(() => {
    initState = createRecord().update('counter', val => val + 1)
  })
  it('should make no changes when given no matching action', () => {
    testState = reducer(initState, { type: '' })

    expect(testState).toEqual(initState)
  })
  it('should return something when undefined', () => {
    testState = reducer(undefined, { type: '' })
    expect(testState).toEqual(createRecord())
  })
  it('should increase counter by 1 when given an action of type INCREMENT_COUNTER', () => {
    testState = reducer(initState, { type: INCREMENT_COUNTER })

    expect(testState).not.toEqual(initState)
    expect(testState && testState.get('counter', 0)).toBe(2)
  })
  it('should decrease counter by 1 when give Decrement action', () => {
    testState = reducer(initState, { type: DECREMENT_COUNTER })

    expect(testState).not.toEqual(initState)
    expect(testState && testState.get('counter', 0)).toBe(0)
  })
})
