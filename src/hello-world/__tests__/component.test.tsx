import * as React from 'react'
import { shallow, configure } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'

import { HelloWorldComponent, mapStateToProps } from '../'
import { State } from 'store'
import { createHelloWorldRecord as createRecord } from '../reducer'
configure({ adapter: new Adapter() })

describe('HelloWorld', () => {
  let mockInc = jest.fn()
  let decInc = jest.fn()
  beforeEach(() => {
    mockInc = jest.fn()
    decInc = jest.fn()
  })

  describe('<HelloWorldComponent />', () => {
    it('should match the snapshot', () => {
      const wrapper = shallow(
        <HelloWorldComponent 
          counter={0} 
          inc={mockInc} 
          dec={decInc}
        />)
      expect(wrapper).toMatchSnapshot()
    })
    it('should call increment when button is clicked', () => {
      const wrapper = shallow(
        <HelloWorldComponent 
          counter={0}
          inc={mockInc}
          dec={decInc}
        />
      )
      wrapper.find('button').first().simulate('click', () => {
        return
      })
      expect(mockInc).toHaveBeenCalled()
    })
  })

  describe('mapStateToProps', () => {
    let state: State
    beforeEach(() => {
      state = {
        helloWorld: createRecord()
      }
    });
    
    it('should map count from state', () => {
      const props = mapStateToProps(state, {})
      expect(props.counter).toBe(0)
    })
  })
})
