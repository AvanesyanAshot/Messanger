import {InferActionsType} from '../redux-store';

export type MessagesActionsType = InferActionsType<typeof messagesActions>

export const messagesActions = {
    addMessage: (message: string) => ({type: 'messages/NEW_MESSAGE', message} as const)
}
