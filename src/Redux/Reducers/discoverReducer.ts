// INIT
type discoverItemType = {
    id: number
    name: string
}
let initState = {
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

// REDUCER
const discoverReducer = (state = initState, action: any) => {
    switch (action.type) {
        default:
            return state
    }
}

export default discoverReducer