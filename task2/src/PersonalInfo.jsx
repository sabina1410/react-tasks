import React, { Component } from 'react';

class PersonalInfo extends Component {
  render() {
    return (
      <div className="profile-section">
        <strong>Age:</strong> {this.props.age} <br />
        <strong>Gender:</strong> {this.props.gender}
      </div>
    );
  }
}

export default PersonalInfo;