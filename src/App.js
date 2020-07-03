import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Content/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom'
import Discover from "./components/Content/Discover/Discover";
import Settings from "./components/Content/Settings/Settings";
import Messages from "./components/Content/Messages/Messages";
import state from "./psevdoRedux/state";

// TODO сделать блок Discover
// TODO сделать блок Profile
// TODO сделать блок Messages
// TODO сделать блок Settings
// TODO сделать state (redux)

function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <div className='app-content'>
                    <Route path='/Discover' render={() => <Discover discover={props.state.Discover}/>}></Route>
                    <Route path='/Profile' render={() => <Profile/>}></Route>
                    <Route path='/Messages' render={() => <Messages messages={props.state.Messages}
                                                                    newMessageText={props.newMessageTexts}
                                                                    dispatch={props.dispatch}

                    />}></Route>
                    <Route path='/Settings' render={() => <Settings/>}></Route>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;