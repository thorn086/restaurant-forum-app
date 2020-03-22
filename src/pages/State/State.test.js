import React from 'react';
import State from './State';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('all other components render properly', () => {
    const state = shallow(<State />);
  
    it('renders properly', () => {
        expect(state).toMatchSnapshot();
    });

});