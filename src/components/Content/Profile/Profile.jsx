import React from "react";
import css from "./Profile.module.css"
import User from "./Contents/User/User";
import * as axios from "axios";


// TODO userDetail сделать отдельной компонентой
// TODO Реализовать отрисовку по условию
// TODO сделать свой REST API


const Profile = (props) => {
    // debugger
    if (props.state.users.length === 0) {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                // debugger
                props.setUsers(response.data)
            })
    }
    return (
        <div className={css.section}>
            <User user={props.state.users[4]} setUsers={props.setUsers}/>
            <div className={css.posts}>
                <div className={css.nav}>
                    <a href='#' className={css.link}>Projects</a>
                    <a href='#' className={css.link}>Collections</a>
                    <a href='#' className={css.link}>Followers</a>
                    <a href='#' className={css.link}>Following</a>
                </div>
                <div className={css.content}>
                    some info
                </div>
            </div>

        </div>

    )
}

export default Profile