import * as React from 'react'
import { ActionCreator } from 'redux'
import { MapStateToProps, MapDispatchToProps, connect } from 'react-redux'

import { Increment, Decrement } from './actions'
import { IncrementCounter, DecrementCounter } from './contracts'
import { State } from 'store'
import { BEM } from 'util/bem'
import './_hello-world.scss'

export interface StateProps {
  counter: number
}

export interface DispatchProps {
  inc: ActionCreator<IncrementCounter>,
  dec: ActionCreator<DecrementCounter>,
}

export const HelloWorldComponent = ({
  counter,
  inc,
  dec
}: StateProps & DispatchProps) => {
  const cn = new BEM('hello-world')
  return (
    <div className={cn.b()}>
      <button className={cn.e('btn')} onClick={() => inc()}>+</button>
      <span className={cn.e('counter', 'red')}>Counter: {counter}</span>
      <button onClick={() => dec()}>-</button>
    </div>
  )
}

export const mapStateToProps: MapStateToProps<StateProps, {}, State> = state => ({
  counter: state.helloWorld.get('counter', 0)
})

const mapDispatchToProps: MapDispatchToProps<DispatchProps, State> = {
  dec: Decrement,
  inc: Increment,
}

const connected = connect(mapStateToProps, mapDispatchToProps)(
  HelloWorldComponent
)

export default connected