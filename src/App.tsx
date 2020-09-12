import React, { Component, ComponentType, FC } from 'react'
import './App.css'
import 'normalize.css'
import Footer from './components/Footer/Footer'
import {
    BrowserRouter,
    Redirect,
    Route,
    Switch,
    withRouter,
} from 'react-router-dom'
import Settings from './components/Content/Settings/Settings'
import HeaderContainer from './components/Header/HeaderContainer'
import { connect, Provider } from 'react-redux'
import { compose } from 'redux'
import Preloader from './components/Common/Preloader/Preloader'
import store, { AppStateType } from './Redux/redux-store'
import ProfileContainer from './components/Content/Profile/ProfileContainer'
import { withSuspense } from './components/Content/Hoc/withSuspense'
import { initializeApp } from './Redux/Thunks/appThunks'
import { FollowersPage } from './components/Content/Followers/FollowersContainer'
import { LoginPage } from './components/Content/Login/Login'

// Lazy loading
const Discover = React.lazy(
    () => import('./components/Content/Discover/Discover')
)
const MessagesContainer = React.lazy(
    () => import('./components/Content/Messages/MessagesContainer')
)

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: () => void
}

const SuspendedMessages = withSuspense(MessagesContainer)
const SuspendedDiscover = withSuspense(Discover)

class App extends Component<MapPropsType & DispatchPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer />
                <div className="app-content">
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => <Redirect to={'/Profile'} />}
                        />
                        <Route
                            path="/Discover"
                            render={() => <SuspendedDiscover />}
                        />
                        <Route
                            path="/Profile/:userId?"
                            render={() => <ProfileContainer />}
                        />
                        <Route
                            path="/Followers"
                            render={() => <FollowersPage />}
                        />
                        <Route
                            path="/Messages"
                            render={() => <SuspendedMessages />}
                        />
                        <Route path="/login" render={() => <LoginPage />} />
                        <Route path="/Settings" render={() => <Settings />} />
                        <Route
                            path="*"
                            render={() => <div>ERROR 404 NOT FOUND</div>}
                        />
                    </Switch>
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized,
})
let AppComponent = compose<ComponentType>(
    withRouter,
    connect(mapStateToProps, { initializeApp })
)(App)

let MainApp: FC = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppComponent />
            </Provider>
        </BrowserRouter>
    )
}

export default MainApp
