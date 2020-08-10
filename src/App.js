import React from 'react';
import './App.css';
import 'normalize.css'
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom'
import Settings from "./components/Content/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import Preloader from "./components/Common/Preloader/Preloader";
import store from "./Redux/redux-store";
import ProfileContainer from "./components/Content/Profile/ProfileContainer";
import FollowersContainer from "./components/Content/Followers/FollowersContainer";
import {withSuspense} from "./components/Content/Hoc/withSuspense";
import {initializeApp} from "./Redux/Thunks/appThunks";

// Lazy loading
const DiscoverContainer = React.lazy(() => import('./components/Content/Discover/DiscoverContainer'));
const MessagesContainer = React.lazy(() => import('./components/Content/Messages/MessagesContainer'));
const Login = React.lazy(() => import('./components/Content/Login/Login'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <div className='app-content'>
                    <Switch>
                        <Route exact path='/' render={() => <Redirect to={'/Profile'}/>}/>
                        <Route path='/Discover' render={withSuspense(DiscoverContainer)}/>
                        <Route path='/Profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/Followers' render={() => <FollowersContainer/>}/>
                        <Route path='/Messages' render={withSuspense(MessagesContainer)}/>
                        <Route path='/login' render={withSuspense(Login)}/>
                        <Route path='/Settings' render={() => <Settings/>}/>
                        <Route path='*' render={() => <div>ERROR 404 NOT FOUND</div>}/>
                    </Switch>
                </div>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
let AppComponent = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)

let MainApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppComponent/>
        </Provider>
    </BrowserRouter>
}

export default MainApp