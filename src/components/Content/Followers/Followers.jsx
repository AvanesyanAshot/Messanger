import React from "react";
import * as axios from 'axios'
import css from './User.module.css'
import avatar from '../../../assets/img/avatar.png'


// TODO перекинуть этот блок в profile
class UserBlock extends React.Component {
    constructor(props) {
        alert('Конструктор')
        super(props);

    }
    componentDidMount() {
        alert('didMount')
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                this.props.setUsers(response.data)
            })
        console.log(this.props)

    }

    render() {
        return <div className={css.wrapper}>
            {
                this.props.state.users.map(u => <div key={u.id} className={css.card}>
                    <div className={css.userBlock}>
                        <img className={css.avatar} src={avatar} alt="#"/>
                        <h3 className={css.userName}>{u.name}</h3>
                        <span className={css.country}>{u.address.city}</span>
                        <div className={css.infoBlock}>
                            <span>12 likes</span>
                            <span>15 views</span>
                        </div>
                        <button className={css.follow}>follow</button>
                    </div>
                </div>)
            }
        </div>
    }
}

export default UserBlock