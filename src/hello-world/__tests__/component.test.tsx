import * as React from 'react'
import { shallow, configure } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'

import { HelloWorldComponent, mapStateToProps } from '../'
configure({ adapter: new Adapter() })

describe('HelloWorldComponent', () => {
  let mockInc = jest.fn()
  beforeEach(() => {
    mockInc = jest.fn()
  })

  it('should match the snapshot', () => {
    const wrapper = shallow(<HelloWorldComponent counter={0} inc={mockInc} />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should call increment when button is clicked', () => {
    const wrapper = shallow(<HelloWorldComponent counter={0} inc={mockInc} />)
    wrapper.find('button').simulate('click', () => {
      return
    })
    expect(mockInc).toHaveBeenCalled()
  })
})
