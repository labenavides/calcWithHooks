import React from "react";
import logo from "./logo.svg";
import OperationProvider from "./components/OperationsProvider";
import "./App.css";

function App() {
  return (
    <div className="App">
      <OperationProvider></OperationProvider>
    </div>
  );
}

export default App;
