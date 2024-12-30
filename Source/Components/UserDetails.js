import React from 'react';

const UserDetails = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded p-6">
      <h2 className="text-2xl font-semibold mb-4">Hello {user.username}</h2>
      <div className="text-lg">
        <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
        <p><strong>Email:</strong> {user.emailId}</p>
        <p><strong>Birth Date:</strong> {new Date(user.birthDate).toLocaleDateString()}</p>
        <p><strong>Country:</strong> {user.country}</p>
        <p><strong>Artist:</strong> {user.artist ? 'Yes' : 'No'}</p>
      </div>
    </div>
  );
};

export default UserDetails;
