import React from 'react';
import StateDis from './StateDis';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('StateDis', () => {
    const stateDis = shallow(<StateDis/>);
  
    it('renders properly', () => {
        expect(stateDis).toMatchSnapshot();
    });
});