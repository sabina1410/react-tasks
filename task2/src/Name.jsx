import { Component } from 'react';

class Name extends Component {
  render() {
    return (
      <div className="profile-section">
        <strong>Name:</strong> {this.props.name}
      </div>
    );
  }
}

export default Name;