import React from 'react'
import Title from './Title'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('Title', () => {
    const title = shallow(<Title />)
  
    it('renders properly', () => {
        expect(title).toMatchSnapshot()
    })

})