import React from "react";
import css from "./User.module.css"
import * as axios from 'axios'

// class User extends React.Component{
//     componentDidMount() {
//         debugger
//         if (this.props.state.users.length === 0) {
//             axios.get('https://jsonplaceholder.typicode.com/users')
//                 .then(response => {
//                     this.props.setUsers(response.data)
//                 })
//         }
//     }
//     render() {
//         return <div className={css.userDetail}>
//             <div className={css.header}>
//                 <button className={css.btn}>+ Follow</button>
//                 <div className={css.logo}></div>
//                 <button className={css.btn}>+ Message</button>
//             </div>
//             {/*<p className={css.name}>{this.props.users.name}</p>*/}
//             <p>some info... and links</p>
//
//             <div className={css.management}>
//                 <button className={css.btn}>Создать пост</button>
//                 <button className={css.btn}>Удалить пост</button>
//
//             </div>
//         </div>
//     }
// }
const User = (props) => {
    debugger
    return (
        <div className={css.userDetail}>
            <div className={css.header}>
                <button className={css.btn}>+ Follow</button>
                <div className={css.logo}></div>
                <button className={css.btn}>+ Message</button>
            </div>
            <p className={css.name}>{props.user.name}</p>
            <p>some info... and links</p>

            <div className={css.management}>
                <button className={css.btn}>Создать пост</button>
                <button className={css.btn}>Удалить пост</button>

            </div>
        </div>

    )
}

export default User