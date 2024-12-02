import React from 'react';

function Employees({ members, filter }) {
 
  const filteredMembers = members.filter((member) => {
    if (filter === 'alive') return member.alive === true;
    if (filter === 'dead') return member.alive === false;
    return true;
  });

  return (
    <ul>
      {filteredMembers.map((member) => (
        <li key={member.id} style={{ marginBottom: '10px' }}>
          <strong>{member.name}</strong> - {member.alive ? 'Yaşayır' : 'Ölüb'}
        </li>
      ))}
    </ul>
  );
}

export default Employees;
