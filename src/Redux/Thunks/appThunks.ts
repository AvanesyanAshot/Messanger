import {getAuthUserData} from "./authThunks";
import {appActions, AppActionsType} from "../Actions/appActionCreators";
import {ThunkAction} from "redux-thunk";
import {AppStateType, BaseThunkType} from "../redux-store";

type ThunkType = BaseThunkType<AppActionsType, void>

export const initializeApp = (): ThunkType => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(appActions.initializedSuccess())
        })
}
