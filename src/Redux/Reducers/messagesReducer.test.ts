import messagesReducer from './messagesReducer'
import {messagesActions} from '../Actions/messagesActionCreators'

test('length of correspondence should be incremented', () => {
    // 1. test data
    let action = messagesActions.addMessage('easy test')
    let state = {
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
        ]
    }
    // 2. action
    let newState = messagesReducer(state, action)

    // 3. expectation
    expect(newState.correspondence.length).toBe(5)
});

test('new message should be added', () => {
    // 1. test data
    let someMessage = 'easy test'
    let action = messagesActions.addMessage(someMessage)
    let state = {
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
        ]
    }
    // 2. action
    let newState = messagesReducer(state, action)

    // 3. expectation
    expect(newState.correspondence[4].message).toBe(someMessage)
});
