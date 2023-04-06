import React from "react";
import Form from "../Components/Form";
import { useGlobalStatesContext } from "../Components/utils/global.context";

const Contact = () => {
  const { theme } = useGlobalStatesContext();

  return (
    <div className={theme.color}>
      <h1>Want to know more?</h1>
      <p className="centered-questions">Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;
