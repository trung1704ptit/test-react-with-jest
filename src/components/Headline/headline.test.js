import React from "react";
import { shallow } from 'enzyme';
import Headline from './index';
import { findByTestAttr, checkProps } from '../../utils';

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

    describe('Checking prop types', () => {
        it('It should not thow a warning', () => {
            const expectedProps = {
                header: 'Test Header',
                desc: 'Test Desc',
                tempArr: [{
                    firstName: 'Test FirstName',
                    lastName: 'Test LastName',
                    email: 'test@gmail.com',
                    age: 28,
                    onlineStatus: true
                }]
            }

            const propsErr = checkProps(Headline, expectedProps)
            expect(propsErr).toBeUndefined()
        })
    })
})