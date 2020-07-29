import {getAuthUserData} from "./authThunks";
import {initializedSuccess} from "../Actions/appActionCreators";

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}
