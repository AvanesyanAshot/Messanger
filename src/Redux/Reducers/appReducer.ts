//Type
type InitStateType = {
    initialized: boolean

}

export const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS'

//INIT
let initState: InitStateType = {
    initialized: false
}

//REDUCER
const appReducer = (state = initState, action: any):InitStateType  => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {...state, initialized: true}
        default:
            return state
    }
}

export default appReducer