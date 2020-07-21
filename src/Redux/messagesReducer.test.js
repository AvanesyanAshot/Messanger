import React from 'react';
import messagesReducer, {addMessage} from './messagesReducer'

test('length of correspondence should be incremented', () => {
    // 1. test data
    let action = addMessage('easy test')
    let state = {
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
    let action = addMessage(someMessage)
    let state = {
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
