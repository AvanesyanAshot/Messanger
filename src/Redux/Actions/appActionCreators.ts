import {InferActionsType} from '../redux-store';

export type AppActionsType = InferActionsType<typeof appActions>

export const appActions = {
    initializedSuccess: () => ({type: 'app/INITIALIZED_SUCCESS'} as const)
}

