//INIT
let initState = {
    initialized: false
}

//REDUCER
const appReducer = (state = initState, action) => {
    switch (action.type) {
        case 'app/INITIALIZED_SUCCESS':
            return {...state, initialized: true}
        default:
            return state
    }
}

export default appReducer