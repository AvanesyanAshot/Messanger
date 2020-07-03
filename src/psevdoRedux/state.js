// Псевдо REDUX


// ACTION TYPE
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
        debugger
        switch (action.type) {
            case NEW_MESSAGE:
                let newMessage = {
                    id: 6,
                    name: 'Qe',
                    time: '11:53',
                    message: this._state.Messages.newMessageText
                }
                this._state.Messages.message.push(newMessage)
                this._state.Messages.newMessageText = ''
                this._callSubscriber(this._state)
                break
            case UPDATE_NEW_MESSAGE:
                this._state.Messages.newMessageText = action.newText
                this._callSubscriber(this._state)
                break

        }
    }
}

export default store
window.store = store

//Store - OOP