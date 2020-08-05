import {INITIALIZED_SUCCESS} from "../Reducers/appReducer";

export type AppActionsType = initializedSuccessActionType

type initializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}
export const initializedSuccess = (): initializedSuccessActionType => ({type: INITIALIZED_SUCCESS})

