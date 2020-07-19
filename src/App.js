import React from 'react';
import './App.css';
import Footer from "./components/Footer/Footer";
import {Route, withRouter} from 'react-router-dom'
import Settings from "./components/Content/Settings/Settings";
import MessagesContainer from "./components/Content/Messages/MessagesContainer";
import DiscoverContainer from "./components/Content/Discover/DiscoverContainer";
import ProfileContainer from "./components/Content/Profile/ProfileContainer";
import FollowersContainer from "./components/Content/Followers/FollowersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Content/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/AppReducer";
import Preloader from "./components/Common/Preloader/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized){
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <div className='app-content'>
                    <Route path='/Discover'
                           render={() => <DiscoverContainer/>}></Route>
                    <Route path='/Profile/:userId?'
                           render={() => <ProfileContainer/>}></Route>
                    <Route path='/Followers'
                           render={() => <FollowersContainer/>}></Route>
                    <Route path='/Messages'
                           render={() => <MessagesContainer/>}></Route>
                    <Route path='/login' render={() => <Login/>}></Route>
                    <Route path='/Settings' render={() => <Settings/>}></Route>
                </div>
                <Footer/>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)