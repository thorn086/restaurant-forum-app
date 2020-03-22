import React from 'react';
import CityDis from './CityDis';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('CityDis', () => {
    const cityDis = shallow(<CityDis/>);
  
    it('renders properly', () => {
        expect(cityDis).toMatchSnapshot();
    });
});