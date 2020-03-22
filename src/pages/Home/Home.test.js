import React from 'react';
import Home from './Home';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe(' render properly', () => {
    const home = shallow(<Home/>);
    it('renders properly', () => {
        expect(home).toMatchSnapshot();
    });
    it('contains a NavBar component', () => {
        expect(home.find('NavBar').exists()).toBe(true);
    });

})