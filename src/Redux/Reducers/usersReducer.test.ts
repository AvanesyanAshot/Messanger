import usersReducer, { InitialStateType } from './usersReducer'
import { userActions } from '../Actions/userActionCreators'

let state: InitialStateType
// Переопределяет state на default state после каждого теста
beforeEach(() => {
    state = {
        users: [
            {
                id: 0,
                name: 'Test0',
                photos: { small: null, large: null },
                followed: false,
                status: 'Unit test0',
            },
            {
                id: 1,
                name: 'Test1',
                photos: { small: null, large: null },
                followed: true,
                status: 'Unit test1',
            },
            {
                id: 2,
                name: 'Test2',
                photos: { small: null, large: null },
                followed: true,
                status: 'Unit test2',
            },
            {
                id: 3,
                name: 'Test3',
                photos: { small: null, large: null },
                followed: false,
                status: 'Unit test3',
            },
        ],
        pageSize: 10,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [],
    }
})
test('Unfollow success', () => {
    const newState = usersReducer(state, userActions.unfollowSuccess(2))

    expect(newState.users[1].followed).toBeTruthy()
    expect(newState.users[2].followed).toBeFalsy()
})
