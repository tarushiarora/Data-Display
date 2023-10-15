import "./App.css";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import UserData from "./components/UserData";

function App() {
  return (
    <div className="bg-dark container-fluid">
      <UserData />
    </div>
  );
}

export default App;