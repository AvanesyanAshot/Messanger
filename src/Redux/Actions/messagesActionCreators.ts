import { NEW_MESSAGE } from "../Reducers/messagesReducer";

export type MessagesActionsType = AddMessageType

type AddMessageType = {
    type: typeof NEW_MESSAGE
    message: string
}
export const addMessage = (message: string): AddMessageType => ({type: NEW_MESSAGE, message})
