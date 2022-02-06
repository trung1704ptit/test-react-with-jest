import React from "react";
import { shallow } from 'enzyme';
import Header from './index'
import { findByTestAttr } from '../../utils';

const setUp = (props={}) => {
    const component = shallow(<Header {...props} />)
    return component
}




describe('Header Component', () => {
    let component;

    beforeEach(() => {
        component = setUp()
    })

    it('Should render without errors', async () => {
        // const wrapper = component.find(`[data-test='headerComponent']`)
        const wrapper = await findByTestAttr(component, 'headerComponent')
        expect(wrapper.length).toBe(1)
    })

    it('Should render a logo', async () => {
        // const logo = component.find(`[data-test='logoIMG']`)
        const logo = await findByTestAttr(component, 'logoIMG')
        expect(logo.length).toBe(1)
    })
})