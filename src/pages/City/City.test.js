import React from 'react';
import City from './City_page';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('City', () => {
    const city = shallow(<City />);
  
    it('renders properly', () => {
        expect(city).toMatchSnapshot();
    });
});