import React from 'react';
import AddCity from './AddCity';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('AddCity', () => {
    const addCity = shallow(<AddCity/>);
  
    it('renders properly', () => {
        expect(addCity).toMatchSnapshot();
    });
});