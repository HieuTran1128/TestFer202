import React from 'react';
import PostList from './components/PostList';
import UserList from './components/UserList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Demo JSON Server</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div>
          <h2>Posts</h2>
          <PostList />
        </div>
        <div>
          <h2>User Accounts</h2>
          <UserList />
        </div>
      </div>
    </div>
  );
}

export default App;