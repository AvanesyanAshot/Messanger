let initState = {
    users: [
        {id: 1, firstName: 'Misha', lastName: 'Ivanov', age: 21, location: {city: 'Moscow', county: 'Russia'}},
        {id: 2, firstName: 'Pasha', lastName: 'Pupcov', age: 20, location: {city: 'Moscow', county: 'Russia'}},
        {id: 3, firstName: 'Vasia', lastName: 'Tarnaiken', age: 19, location: {city: 'Moscow', county: 'Russia'}},
    ]
}

const usersReducer = (state = initState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default usersReducer