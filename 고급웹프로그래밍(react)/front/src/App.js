import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Main from "./Component/Main";
function App() {
  const sendRequest = async () => {
    const response = await axios.get("http://localhost:5000");
    console.log(response);
    console.log(response.data);
  };

  useEffect(() => {
    sendRequest();
  });

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
