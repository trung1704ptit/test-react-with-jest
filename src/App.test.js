import App from './App'
import { shallow } from 'enzyme'
import { findByTestAttr, testStore } from './utils'

const setUp = (initialState={}) => {
    const store = testStore(initialState)
    const wrapper = shallow(<App store={store} />).childAt(0).dive()
    return wrapper
}

describe('App Component', () => {
    let wrapper

    beforeEach(() => {
        const initialState = {
            posts: [{
                title: 'Example title',
                body: 'Some text',
            },
            {
                title: 'Example title2',
                body: 'Some text2',
            },
            {
                title: 'Example title3',
                body: 'Some text3',
            }]
        }
        wrapper = setUp(initialState)
    })

    it('Should render without errors', async () => {
        const component = await findByTestAttr(wrapper, 'appComponent')
        expect(component.length).toBe(1)
    })
})