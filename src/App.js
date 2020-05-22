import React from "react";
import Calculator from "./components/Calculator";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Calculator initialValue="123"></Calculator>
    </div>
  );
}

export default App;
