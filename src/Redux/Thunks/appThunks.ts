import {getAuthUserData} from "./authThunks";
import {appActions, AppActionsType} from "../Actions/appActionCreators";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../redux-store";

type ThunkType = ThunkAction<void, AppStateType, unknown, AppActionsType>

export const initializeApp = (): ThunkType => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(appActions.initializedSuccess())
        })
}
