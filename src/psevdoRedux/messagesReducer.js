// ACTION TYPE
let NEW_MESSAGE = 'NEW-MESSAGE';
let UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

// ACTION CREATOR
export const actionAddMessage = () => ({type: NEW_MESSAGE})
export const actionOnMessageChange = (text) => ({type: UPDATE_NEW_MESSAGE, newText: text})

const messagesReducer = (state, action) => {
    switch (action.type) {
        case NEW_MESSAGE:
            let newMessage = {
                id: 5,
                time: new Date(),
                message: state.newMessageText
            }
            state.correspondence.push(newMessage)
            state.newMessageText = ''
            return state
        case UPDATE_NEW_MESSAGE:
            state.newMessageText = action.newText
            return state
        default:
            return state
    }
}

export default messagesReducer