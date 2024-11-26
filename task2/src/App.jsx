import React, { Component } from 'react';
import Email from './Email';
import Name from './Name';
import Address from './Address';
import PersonalInfo from './PersonalInfo';

class Profile extends Component {
  render() {
    const { user } = this.props; 

    return (
      <div className="profile-container">
        <h2>User Profile</h2>
        <Name name={user.name} />
        <Email email={user.email} />
        <Address address={user.address} />
        <PersonalInfo age={user.age} 
        gender={user.gender} />
      </div>
    );
  }
}

export default Profile;
