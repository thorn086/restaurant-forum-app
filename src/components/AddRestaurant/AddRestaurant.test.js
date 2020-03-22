import React from 'react';
import AddRestaurant from './AddRestaurant';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('AddRestaurant', () => {
    const addRestaurant= shallow(<AddRestaurant/>);
  
    it('renders properly', () => {
        expect(addRestaurant).toMatchSnapshot();
    });
});