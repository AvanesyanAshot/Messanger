// Псевдо REDUX

import {rerenderEntireTree} from "../render";

let state = {
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
}

export let addMessage = () => {
    let newMessage = {
        id: 6,
        name: 'Kolya',
        time: '11:53',
        message: state.Messages.newMessageText
    }
    state.Messages.message.push(newMessage)
    state.Messages.newMessageText = ''
    rerenderEntireTree(state)
}

export let updateNewMessage = (newText) => {
    state.Messages.newMessageText = newText
    rerenderEntireTree(state)
}

window.state = state

export default state
