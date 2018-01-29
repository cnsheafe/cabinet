import * as React from 'react'
import { shallow, configure, ShallowWrapper } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'

import {
  HelloWorldComponent,
  mapStateToProps,
  StateProps,
  DispatchProps
} from '../'
import { State } from 'store'
import { createHelloWorldRecord as createRecord } from '../reducer'
configure({ adapter: new Adapter() })

describe('HelloWorld', () => {
  let incFn = jest.fn()
  let decFn = jest.fn()
  let props: StateProps & DispatchProps
  let wrapper: ShallowWrapper<any, any>

  beforeEach(() => {
    incFn = jest.fn()
    decFn = jest.fn()
    props = {
      counter: 0,
      inc: incFn,
      dec: decFn
    }
    wrapper = shallow(<HelloWorldComponent {...props} />)
  })

  describe('<HelloWorldComponent />', () => {
    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
    it('should call increment when increment button is clicked', () => {
      wrapper
        .find('button')
        .first()
        .simulate('click', () => {
          return
        })
      expect(incFn).toHaveBeenCalled()
    })
    it('should call decrement when decrement button is clicked', () => {
      wrapper
        .find('button')
        .last()
        .simulate('click', () => {
          return
        })
      expect(decFn).toHaveBeenCalled()
    })
  })

  describe('mapStateToProps', () => {
    let state: State
    beforeEach(() => {
      state = {
        helloWorld: createRecord()
      }
    })

    it('should map count from state', () => {
      const mockProps = mapStateToProps(state, {})
      expect(mockProps.counter).toBe(0)
    })
  })
})
