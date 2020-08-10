import {MessagesActionsType} from "../Actions/messagesActionCreators";

// Type
type messageType = {
    id: number
    name: string
    time: string
    message: string
}
type correspondenceType = {
    id: number
    time: string
    message: string
}
type InitialStateType = typeof initialState

// INIT
let initialState = {
    message: [
        {id: 1, name: 'Pasha', time: '10:45', message: 'Hello world'},
        {id: 2, name: 'Artem', time: '10:42', message: 'Hi'},
        {id: 3, name: 'Sveta', time: '10:32', message: 'How are u?'},
        {id: 4, name: 'Katya', time: '11:21', message: 'Thx'},
        {id: 5, name: 'Vitalik', time: '11:19', message: 'BB'}
    ] as Array<messageType>,
    correspondence: [
        {id: 1, time: '10:45', message: 'Hello world'},
        {id: 2, time: '10:45', message: 'BRUH'},
        {id: 3, time: '10:45', message: 'Hi'},
        {id: 4, time: '10:45', message: 'thx'}
    ] as Array<correspondenceType>
}

// REDUCER
const messagesReducer = (state = initialState, action: MessagesActionsType): InitialStateType => {
    switch (action.type) {
        case "messages/NEW_MESSAGE":
            return {
                ...state,
                correspondence: [...state.correspondence, {
                    id: 5,
                    time: new Date().toString(),
                    message: action.message
                }],
            }
        default:
            return state
    }
}

export default messagesReducer