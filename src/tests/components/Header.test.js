import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test('should render the header components correctly', () =>{
    const wrapper = shallow( <Header /> );
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.find('h1').text()).toBe('Expencive');
    // const renderer = new ReactShallowRenderer();
    // renderer.render( <Header /> );
    // expect( renderer.getRenderOutput()).toMatchSnapshot();
})