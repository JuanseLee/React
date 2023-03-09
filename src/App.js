import React, { useState } from "react";
import "./App.css";
import { Form } from "./Components/form";

function App() {
  const [info, setInfo] = useState({});
  const [errorMessage, setErrorMessage] = useState(false);
  const onSubmit = (data) => {
  
    console.log("data", data);
    if 
      (data.lastname.trim().lenght < 3  ||
      data.name.length < 6
      ) {
        setErrorMessage(true);
    } else {
      setInfo(data);
    }
  };
  return (
    <div className="App">
      <Form onSubmit={onSubmit} title="Encuesta DH" />
      {info  &&(
        <div className="card">
          <br />
          <span>Nombre :{info.name}</span>
          <br /> <br />
          <span>Apellido :{info.lastname}</span>
          <br /> <br />
          <span>Email :{info.email}</span>
        </div>
      )}
      {errorMessage && (
        <span>"Por favor chequea que la informacion sea correcta"</span>
      )}
    </div>
  );
}

export default App;
