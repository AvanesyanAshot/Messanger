// import React from "react";
// import css from "./User.module.css"
// import * as axios from "axios";
//
//
// class User extends React.Component {
//     constructor(props) {
//         super(props);
//         debugger
//         axios.get('https://jsonplaceholder.typicode.com/users')
//             .then(response => {
//                 this.props.setUsers(response.data)
//             })
//     }
//
//     render() {
//         return <div>
//             {
//                 this.props.users.map( u =>  <div className={css.card}>
//                     <div className={css.userBlock}>
//                         <img className={css.avatar} src="#" alt="#"/>
//                         <h3 className={css.userName}>{u.name}</h3>
//                         <span className={css.country}>{u.address.city}</span>
//                         <div className={css.infoBlock}>
//                             <span>12like</span>
//                             <span>15views</span>
//                         </div>
//                         <button className={css.follow}>follow</button>
//                     </div>
//                 </div>)
//             }
//         </div>
//     }
// }
//
// export default User