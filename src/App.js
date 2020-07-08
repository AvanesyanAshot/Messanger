import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Route} from 'react-router-dom'
import Settings from "./components/Content/Settings/Settings";
import MessagesContainer from "./components/Content/Messages/MessagesContainer";
import DiscoverContainer from "./components/Content/Discover/DiscoverContainer";
import ProfileContainer from "./components/Content/Profile/ProfileContainer";
import FollowersContainer from "./components/Content/Followers/FollowersContainer";

// TODO сделать блок Discover
// TODO сделать блок Profile
// TODO сделать блок Messages
// TODO сделать блок Settings
// TODO сделать классовые компоненты discover, profile, followers, messages

function App(props) {
    return (
        <div className="app-wrapper">
            <Header/>
            <div className='app-content'>
                <Route path='/Discover'
                       render={() => <DiscoverContainer discover={props.state} dispatch={props.dispatch}/>}></Route>
                <Route path='/Profile'
                       render={() => <ProfileContainer profile={props.state} dispatch={props.dispatch}/>}></Route>
                <Route path='/Followers'
                       render={() => <FollowersContainer users={props.state} dispatch={props.dispatch}/>}></Route>
                <Route path='/Messages'
                       render={() => <MessagesContainer messages={props.state} dispatch={props.dispatch}/>}></Route>
                <Route path='/Settings' render={() => <Settings/>}></Route>
            </div>
            <Footer/>
        </div>
    );
}

export default App;