import './App.css';
import CountdownTimer from './components/CountdownTime';
import UserPosts from './components/UserPosts';
import WindowSize from './components/WindowSize';

function App() {
  return (
    <>
      <h2>User Post</h2>
      <UserPosts userId={1}/>

      <CountdownTimer initialValue={18} />

      <WindowSize />
    </>
  );
}

export default App;
