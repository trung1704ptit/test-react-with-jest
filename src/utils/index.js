import checkPropTypes from "check-prop-types";
import { applyMiddleware, createStore } from 'redux';
import RootReducer from '../reducers';
import { middlewares } from '../createStore'

export const findByTestAttr = async (component, attr) => {
    const wrapper = await component.find(`[data-test='${attr}']`) 
    return wrapper
}

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name)
    return propsErr
}

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
    return createStoreWithMiddleware(RootReducer, initialState)
}