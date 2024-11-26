import { Component } from "react";

class Email extends Component {
    render() {
        return (
            <div className="profile-section">
                <strong>Email:</strong> {this.props.email}
            </div>
        )
    }
}

export default Email