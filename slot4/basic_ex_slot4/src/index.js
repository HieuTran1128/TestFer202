import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import NamePerson from "./components/NamePerson";
import Person from "./components/Person"
import PersonList from "./components/PersonList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <NamePerson />
    <Person/>
    <PersonList/>
  </React.StrictMode>
);

reportWebVitals();
