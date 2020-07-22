export const updateObjectInArray = (items, itemId, objPropName, newObjProp) => {
    items.map(u => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProp}
        }
        return u
    })
}