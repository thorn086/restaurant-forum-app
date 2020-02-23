import React from 'react'
import SignUp from './SignUp'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('all other components render properly', () => {
    const signUp = shallow(<SignUp />)
  
    it('renders properly', () => {
        expect(signUp).toMatchSnapshot()
    })
})
describe('submit button',()=>{
    it('has a submit button',()=>{
        const signUp = shallow(<SignUp />)
    expect(signUp.find('.submit').text()).toEqual('Sign Up')
})
})