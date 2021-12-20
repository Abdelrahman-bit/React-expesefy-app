import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../../components/HomePage';

test('shold render the HomePage component', () =>{
    const wrapper = shallow(<HomePage />);
    expect(wrapper).toMatchSnapshot();
})