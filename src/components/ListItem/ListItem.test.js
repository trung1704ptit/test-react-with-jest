import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../utils'
import ListItem from './index';

describe('ListItem Component', () => {
    describe('Checking PropTypes', () => {
        it('Should Not throw a warning', () => {
            const expectedProps = {
                title: 'Example title',
                desc: 'Some text'
            }
            const propsError = checkProps(ListItem, expectedProps)
            expect(propsError).toBeUndefined()
        })
    })

    describe('Component Renders', () => {
        let wrapper
        beforeEach(() => {
            const props = {
                title: 'Example title',
                desc: 'Some text'
            }
            wrapper = shallow(<ListItem {...props} />)
        })

        it('Should render without errors', async () => {
            const component = await findByTestAttr(wrapper, 'listItemComponent')
            expect(component.length).toBe(1)
        })

        it ('Should render a title', () => {
            const title = findByTestAttr(wrapper, 'listItemTitleComponent')
            expect(title.length).toBe(1)
        })

        it ('Should render a desc', () => {
            const desc = findByTestAttr(wrapper, 'listItemDescComponent')
            expect(desc.length).toBe(1)
        })


        describe('Should NOT render', () => {
            let wrapper
            beforeEach(() => {
                const props = {
                    desc: 'Some text'
                }
                wrapper = shallow(<ListItem {...props} />)
            })

            it('Component is not rendered', () => {
                const component = findByTestAttr(wrapper, 'listItemComponent')
                expect(component.length).toBe(1)

            })
    
        })
    })
})