import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/useraccounts')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      {users.map(user => (
        <div key={user.id} style={{ margin: '10px 0', border: '1px solid #ccc', padding: '10px' }}>
          <img 
            src={`http://localhost:3000${user.avatar}`} 
            alt={user.username}
            style={{ width: '50px', height: '50px', borderRadius: '50%' }}
          />
          <h3>{user.username}</h3>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default UserList;