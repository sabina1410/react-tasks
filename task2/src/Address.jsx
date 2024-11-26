import React, { Component } from 'react';

class Address extends Component {
  render() {
    return (
      <div className="profile-section">
        <strong>Address:</strong> {this.props.address}
      </div>
    );
  }
}

export default Address;