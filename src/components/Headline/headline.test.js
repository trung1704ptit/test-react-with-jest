import React from "react";
import { shallow } from 'enzyme';
import Headline from './index';
import { findByTestAttr } from '../../utils';

const setUp = (props={}) => {
    const component = shallow(<Headline {...props} />)
    return component
}

describe('Headline Component', () => {
    describe('Have props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc:'Test Desc'
            }
            wrapper=setUp(props)
        })

        it('Should render without errors', async () => {
            const component = await findByTestAttr(wrapper, 'headlineComponent')
            expect(component.length).toBe(1)
        })

        it('Should render H1 tag', async () => {
            const h1 = await findByTestAttr(wrapper, 'header')
            expect(h1.length).toBe(1)
        })

        it('Should render a desc', async () => {
            const desc = await findByTestAttr(wrapper, 'desc')
            expect(desc.length).toBe(1)
        })

    })

    describe('Have No props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper=setUp();
        })

        it('Should not render', async () => {
            const component = await findByTestAttr(wrapper, 'headlineComponent')
            expect(component.length).toBe(0)
         })
    })
})