import React from "react";
import { useGlobalStatesContext } from "./utils/global.context";

const Footer = () => {
  const { theme } = useGlobalStatesContext();
  return (
    <footer className={theme.color}>
      <p>Powered by</p>
      <img src="../images/DH.png" alt="DH-logo" />
    </footer>
  );
};

export default Footer;
