// Псевдо REDUX


// ACTION TYPE
import discoverReducer from "./discoverReducer";
import messagesReducer from "./messagesReducer";

let NEW_MESSAGE = 'NEW-MESSAGE';
let UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

// ACTION CREATOR
export const actionAddMessage = () => ({type: NEW_MESSAGE})
export const actionOnMessageChange = (text) => ({type: UPDATE_NEW_MESSAGE, newText: text})


let store = {
    _state: {
        Discover: {
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
            ]
        },
        Messages: {
            message: [
                {id: 1, name: 'Pasha', time: '10:45', message: 'Hello world'},
                {id: 2, name: 'Artem', time: '10:42', message: 'Hi'},
                {id: 3, name: 'Sveta', time: '10:32', message: 'How are u?'},
                {id: 4, name: 'Katya', time: '11:21', message: 'Thx'},
                {id: 5, name: 'Vitalik', time: '11:19', message: 'BB'}
            ],
            correspondence: [
                {id: 1, time: '10:45', message: 'Hello world'},
                {id: 2, time: '10:45', message: 'BRUH'},
                {id: 3, time: '10:45', message: 'Hi'},
                {id: 4, time: '10:45', message: 'thx'}
            ],
            newMessageText: ''
        }
    },
    _callSubscriber() {
        console.log("State changed")
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer //Паттерн Observer
    },
    dispatch(action) {
        // discoverReducer(this._state.Discover, action)
        messagesReducer(this._state.Messages, action)

        this._callSubscriber(this._state)
    }
}

export default store
window.store = store

//Store - OOP