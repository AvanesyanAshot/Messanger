import React, {Suspense} from 'react';
import './App.css';
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route, withRouter} from 'react-router-dom'
import Settings from "./components/Content/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/AppReducer";
import Preloader from "./components/Common/Preloader/Preloader";
import store from "./Redux/redux-store";
import ProfileContainer from "./components/Content/Profile/ProfileContainer";
import FollowersContainer from "./components/Content/Followers/FollowersContainer";
import {withSuspence} from "./components/Content/Hoc/withSuspence";

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
                    <Route path='/Discover' render={withSuspence(DiscoverContainer)}/>
                    <Route path='/Profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/Followers' render={() => <FollowersContainer/>}/>
                    <Route path='/Messages' render={withSuspence(MessagesContainer)}/>
                    <Route path='/login' render={withSuspence(Login)}/>
                    <Route path='/Settings' render={() => <Settings/>}/>
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

let MainApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppComponent/>
        </Provider>
    </BrowserRouter>
}

export default MainApp