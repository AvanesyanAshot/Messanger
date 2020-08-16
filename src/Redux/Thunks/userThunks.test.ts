import {follow, unfollow} from './userThunks';
import {DefaultResponseType, ResultCodeEnum} from '../../DAL/api';
import {usersAPI} from '../../DAL/users-api';
import {userActions} from '../Actions/userActionCreators';

// Ставим заглушку на userAPI
jest.mock('../../DAL/users-api')
const userAPIMock = usersAPI as jest.Mocked<typeof usersAPI>

const dispatchMock = jest.fn()
const getStateMock = jest.fn()

beforeEach(() => {
    dispatchMock.mockClear()
    getStateMock.mockClear()
    userAPIMock.follow.mockClear()
    userAPIMock.unfollow.mockClear()
})

const result: DefaultResponseType = {
    resultCode: ResultCodeEnum.Success,
    messages: [],
    data: {}
}

// Иммитируем ответ сервера
userAPIMock.follow.mockReturnValue(Promise.resolve(result))
userAPIMock.unfollow.mockReturnValue(Promise.resolve(result))

test('Success follow thunk', async () => {
    const thunk = follow(0)
    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, userActions.toggleIsFollowingInProgress(true, 0))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, userActions.followSuccess(0))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, userActions.toggleIsFollowingInProgress(false, 0))
})

test('Success unfollow thunk', async () => {
    const thunk = unfollow(0)
    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, userActions.toggleIsFollowingInProgress(true, 0))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, userActions.unfollowSuccess(0))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, userActions.toggleIsFollowingInProgress(false, 0))
})