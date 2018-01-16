import * as React from 'react'
import { ActionCreator } from 'redux'
import { MapStateToProps, MapDispatchToProps, connect } from 'react-redux'
import { Increment, IncrementCounter } from './actions'
import { State } from '../store'

interface StateProps {
  counter: number
}

interface DispatchProps {
  inc: ActionCreator<IncrementCounter>
}

export const HelloWorldComponent = ({
  counter,
  inc
}: StateProps & DispatchProps) => (
  <div>
    <button onClick={e => inc()}>Increment</button>
    <span>Counter: {counter}</span>
  </div>
)

export const mapStateToProps: MapStateToProps<StateProps, {}, State> = state => ({
  counter: state.helloWorld.get('counter', 0)
})

const mapDispatchToProps: MapDispatchToProps<DispatchProps, State> = {
  inc: Increment
}

const connected = connect(mapStateToProps, mapDispatchToProps)(
  HelloWorldComponent
)

export default connected