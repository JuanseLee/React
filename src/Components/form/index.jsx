import React, { useState } from "react";
import { Input } from "./input";


export const Form = ({ onSubmit, title }) => {
    const [lastname, setLastname] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleChange = (e) => {
     

        setLastname(e.target.value);
        console.log("handleChange", e.target.value);
    }

    const handleChangeName = (e) => {
        setName(e.target.value);
        console.log("handleChangeName", e.target.value);

    };

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
        console.log("handleChangeEmail", e.target.value);

    };

    const handlerSubmit = (e) => {
    
        e.preventDefault();

        const data = {
            name, lastname, email

        }

        onSubmit(data);
    }
    return (
        <form onSubmit={handlerSubmit}>
            <h1 >{title}</h1>
            <p>Por favor ayudanos con la siguiente encuesta</p>
            <input
                id="lastname"
                name="lastname"
                value={lastname}
                onChange={handleChange}
                placeholder="Ingrese Apellido"
                type="text"
                background-color="red" />

            <br />
            <input id="name"
                name="name"
                value={name}
                onChange={handleChangeName}
                placeholder="Ingrese Nombre"
                type="text" />
            <br />
            <input id="email"
                name="email"
                value={email}
                onChange={handleChangeEmail}
                placeholder="Ingrese Email"
                type="email" /> <br /> <br />
            <input id="button" type="submit" />
        </form>

    );
}