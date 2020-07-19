import React from "react";

class UserStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
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
        this.props.updateUserStatus(this.state.status)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    onStatusChange(e) {
        this.setState({
            status: e.currentTarget.value
        })
    }
    render() {
        return (
            <div>
                {this.state.editMode === false
                    ?<div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status || 'Нет статуса'}</span>
                     </div>
                    :<div>
                        <input onChange={this.onStatusChange.bind(this)} autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.state.status}></input>
                    </div>
                }


            </div>
        )
    }
}

export default UserStatus