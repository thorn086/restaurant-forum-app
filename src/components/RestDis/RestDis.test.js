import React from 'react';
import RestDis from './RestDis';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('RestDis', () => {
    const restDis = shallow(<RestDis/>);
  
    it('renders properly', () => {
        expect(restDis).toMatchSnapshot();
    });
});