import UserProfile from './components/UserProfile';
import Welcome from './components/Welcome';
import NameList from './components/NameList';
import 'boostrap/dist/css/boostrap.min.css'

function App() {
  const userData = { name: "hieutltde180438@fpt.edu.vn", age: 21};
  const nameList = ["hieutltde180438@fpt.edu.vn", "test@gmail.comcom"];
  return (
    <>
      <Welcome name = "hieutltde180438@fpt.edu.vn"  />
      <UserProfile user = {userData} />
      <NameList names = {nameList} />
    </>

  );
}

export default App;
