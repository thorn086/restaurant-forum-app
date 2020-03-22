import React from 'react';
import EditRestaurant from './updateRestInfo';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('updateRestInfo', () => {
    const updateRestInfo = shallow(<EditRestaurant />);
  
    it('renders properly', () => {
        expect(updateRestInfo).toMatchSnapshot();
    });
});