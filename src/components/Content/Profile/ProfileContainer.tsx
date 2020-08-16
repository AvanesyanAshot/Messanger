import React from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';
import {getUserProfile, getUserStatus, savePhoto,
    saveProfile, updateUserStatus} from '../../../Redux/Thunks/profileThunks';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../Hoc/withAuthRedirect';
import {compose} from 'redux';
import {getProfile, getStatus} from '../../../Redux/Selectors/profileSelectors';
import {getAuthId, getIsAuth} from '../../../Redux/Selectors/authSelectors';
import {AppStateType} from '../../../Redux/redux-store';
import {ProfileType} from '../../../types/types';

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => void
}
type PathParamsType = {
    userId: string
}

type PropsType = MapPropsType & DispatchPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<PropsType> {
    updateProfile() {
        let userId: number | null = +this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!this.props.authorizedUserId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId as number)
        this.props.getUserStatus(userId as number)
    }

    componentDidMount() {
        this.updateProfile()
    }

    componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.updateProfile()
        }
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}
                        status={this.props.status} updateUserStatus={this.props.updateUserStatus}
                        isOwner={!this.props.match.params.userId} savePhoto={this.props.savePhoto}
                        saveProfile={this.props.saveProfile}
        />
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        profile: getProfile(state) as ProfileType,
        status: getStatus(state),
        authorizedUserId: getAuthId(state),
        isAuth: getIsAuth(state)
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)


