import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Content/Profile/Profile";
import {Route} from 'react-router-dom'
import Discover from "./components/Content/Discover/Discover";
import Settings from "./components/Content/Settings/Settings";
import MessagesContainer from "./components/Content/Messages/MessagesContainer";
import DiscoverContainer from "./components/Content/Discover/DiscoverContainer";
import ProfileContainer from "./components/Content/Profile/ProfileContainer";

// TODO сделать блок Discover
// TODO сделать блок Profile
// TODO сделать блок Messages
// TODO сделать блок Settings

function App(props) {
    return (
        <div className="app-wrapper">
            <Header/>
            <div className='app-content'>
                <Route path='/Discover' render={() => <DiscoverContainer discover={props.state}
                                                                         dispatch={props.dispatch}/>}></Route>
                <Route path='/Profile' render={() => <ProfileContainer profile={props.state}
                                                                       dispatch={props.dispatch}/>}></Route>
                <Route path='/Messages' render={() => <MessagesContainer messages={props.state}
                                                                         dispatch={props.dispatch}/>}></Route>
                <Route path='/Settings' render={() => <Settings/>}></Route>
            </div>
            <Footer/>
        </div>
    );
}

export default App;