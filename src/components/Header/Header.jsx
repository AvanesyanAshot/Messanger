import React from 'react';
import '../../App.css'
import css from './Header.module.css'
import {NavLink} from "react-router-dom";

let Header = (props) => {
    return (
        <header className={css.header}>
            <div className={css.logo}>
                <h1>IDEA</h1>
            </div>
            <nav className={css.nav}>
                <nav className={css.nav}>
                    <NavLink className={css.link} activeClassName={css.activeLink} to='/Discover'>Discover</NavLink>
                    <NavLink className={css.link} activeClassName={css.activeLink} to='/Profile'>Profile</NavLink>
                    <NavLink className={css.link} activeClassName={css.activeLink} to='/Followers'>Followers</NavLink>
                    <NavLink className={css.link} activeClassName={css.activeLink} to='/Messages'>Messages</NavLink>
                    <NavLink className={css.link} activeClassName={css.activeLink} to='/Settings'>Settings</NavLink>
                </nav>
            </nav>
            <div>
                {props.isAuth
                    ? <div>
                        <button onClick={props.logout} className={css.login}>logout</button>
                    </div>
                    : <NavLink className={css.login} to='/Login'>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;