import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import UserProfile from "./components/UserProfile";
import UserProfile2 from "./components/UserProfile2";
import MyForm from "./components/MyForm";
import FormWithValidation from "./components/FormWithValidation";

const App = () => {
  const handleFormSubmit = (formData) => {
    console.log("Dữ liệu đã gửi:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div style={{ marginLeft: "220px", padding: "20px" }}>
          <Routes>
            <Route
              path="/user-profile"
              element={
                <>
                  <h1>UserProfile</h1>
                  <UserProfile name="Nguyễn Văn A" age={25} />
                  <UserProfile name="" age={25} />
                  <UserProfile name="Nguyễn Văn B" age="twenty five" />
                </>
              }
            />
            <Route
              path="/user-profile2"
              element={
                <>
                  <h1>UserProfile2</h1>
                  <UserProfile2 onSubmit={handleFormSubmit} />
                </>
              }
            />
            <Route
              path="/my-form"
              element={
                <>
                  <h1>MyForm</h1>
                  <MyForm title="Form Đơn Giản" onSubmit={handleFormSubmit} />
                </>
              }
            />
            <Route
              path="/form-validation"
              element={
                <>
                  <h1>FormWithValidation</h1>
                  <FormWithValidation title="Đăng Ký Người Dùng" onSubmit={handleFormSubmit} />
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  <h1>UserProfile</h1>
                  <UserProfile name="Nguyễn Văn A" age={25} />
                  <UserProfile name="" age="19" />
                  <UserProfile name="Nguyễn Văn B" age="twenty five" />
                  <UserProfile name="Nguyễn Văn C" age="" />
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;