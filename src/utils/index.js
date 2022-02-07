import checkPropTypes from "check-prop-types";

export const findByTestAttr = async (component, attr) => {
    const wrapper = await component.find(`[data-test='${attr}']`) 
    return wrapper
}

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name)
    return propsErr
}