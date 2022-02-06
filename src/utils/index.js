export const findByTestAttr = async (component, attr) => {
    const wrapper = await component.find(`[data-test='${attr}']`) 
    return wrapper
}

