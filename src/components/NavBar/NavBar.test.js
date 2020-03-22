import React from 'react';
import NavBar from './NavBar';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('NavBar', () => {
    const navbar = shallow(<NavBar/>);
  
    it('renders properly', () => {
        expect(navbar).toMatchSnapshot();
    });
});