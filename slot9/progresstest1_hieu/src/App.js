import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Banner from './components/Banner';
import StudentList from './components/StudentList';
import Footer from './components/Footer';

function App() {
  const students = [
    { id: "DE160182", name: "Nguyễn Hữu Quốc Khánh", location: "DaNang", image: "image/student1.png" },
    { id: "DE160377", name: "Choy Vĩnh Thiện", location: "QuangNam", image: "image/student2.png" },
    { id: "DE160547", name: "Đỗ Nguyễn Phúc", location: "QuangNam", image: "image/student4.png" },
    { id: "DE170049", name: "Lê Hoàng Minh", location: "DaNang", image: "image/student3.png" },
  ];
  return (
    <>
      <Header />
      <Banner />
      <StudentList students = { students } />
      <Footer />
    </>
  );
}

export default App;
