import React from "react";
import css from "./Profile.module.css"
import User from "./Contents/User/User";
import * as axios from "axios";

// TODO Реализовать отрисовку по условию
// TODO сделать свой REST API

class Profile extends React.Component {
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                this.props.setUsers(response.data)
            })
    }

    render() {
        return <div className={css.section}>

            <User user={this.props.state.users[0]}/>

            <div className={css.posts}>
                <div className={css.nav}>
                    <button className={css.link}>Projects</button>
                    <button className={css.link}>Collections</button>
                    <button className={css.link}>Followers</button>
                    <button className={css.link}>Following</button>
                </div>
                <div className={css.content}>
                    some info
                </div>

            </div>
        </div>
    }
}

export default Profile