import {getAuthUserData} from "./authThunks";
import {AppActionsType, initializedSuccess} from "../Actions/appActionCreators";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../redux-store";
import {UserActionsType} from "../Actions/userActionCreators";

type ThunkType = ThunkAction<void, AppStateType, unknown, AppActionsType>

export const initializeApp = (): ThunkType => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}
