import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Content/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom'
import Discover from "./components/Content/Discover/Discover";
import Settings from "./components/Content/Settings/Settings";
import Messages from "./components/Content/Messages/Messages";

// TODO сделать блок Discover
// TODO сделать блок Profile
// TODO сделать блок Messages
// TODO сделать блок Settings
// TODO сделать state (redux)

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <div className='app-content'>
                    <Route path='/Discover' component={Discover}></Route>
                    <Route path='/Profile' component={Profile}></Route>
                    <Route path='/Messages' component={Messages}></Route>
                    <Route path='/Settings' component={Settings}></Route>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;