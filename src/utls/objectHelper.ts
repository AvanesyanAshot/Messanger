export const updateObjectInArray = (items: any, itemId: any, objPropName: any, newObjProp: any) => {
    return items.map((u: any) => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProp}
        }
        return u
    })
}