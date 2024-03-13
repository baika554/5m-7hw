import React from 'react';
import { useSelector } from 'react-redux';
import './UserDetails.css'; 

const UserDetails = () => {
  const user = useSelector(state => state.user);

  return (
    <div className="user-details">
      <h2>User Details</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Birth Date:</strong> {user.birthDate}</p>
      <p><strong>Gender:</strong> {user.gender}</p>
    </div>
  );
};

export default UserDetails;
