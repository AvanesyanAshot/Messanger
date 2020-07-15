import React from "react";
import css from "./User.module.css"

class UserStatus extends React.Component {
    state = {
        editMode: false
    }
    activateEditMode() {
        this.setState({ // setState асинхронен!!!
            editMode: true
        })
    }
    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }
    render() {
        return (
            <div>
                {this.state.editMode === false
                    ?<div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>status:{this.props.status}</span>
                     </div>
                    :<div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}></input>
                    </div>
                }


            </div>
        )
    }
}

export default UserStatus