// INIT
type discoverItemType = {
    id: number
    name: string
}
let initialState = {
    discoverData: [
        {id: 1, name: 'Pasha'},
        {id: 2, name: 'Kolya'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Ahmed'},
        {id: 5, name: 'Razmik'},
        {id: 6, name: 'Gevorg'},
        {id: 7, name: 'Artem'},
        {id: 8, name: 'Vitalik'},
        {id: 9, name: 'Grey'}
    ] as Array<discoverItemType>
}
export type InitialStateType = typeof initialState

// REDUCER
const discoverReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        default:
            return state
    }
}

export default discoverReducer