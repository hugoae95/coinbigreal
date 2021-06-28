import React from 'react';
import { mount } from 'enzyme';
import Header from '../../components/Header';

describe('Header' , () => {
    test('Render component' , () => {
        const header = mount(<Header />);
        expect(header.length).toEqual(1);
    });
})