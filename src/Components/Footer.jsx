import React from "react";
import { useGlobalStatesContext } from "./utils/global.context";
import { faFacebook, faTiktok, faInstagram, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  const { theme } = useGlobalStatesContext();
  return (

    <footer className={theme.color}>
      <p>Powered by</p>
      <img src="../images/DH.png" alt="DH-logo" />

      <span className="icon">
        <a href="https://www.youtube.com/channel/UCKkPOtW8gQPgIUaxF4Og7PA/" target="blank"><FontAwesomeIcon icon={faYoutube} /></a>
        <a href="https://www.facebook.com/digitalhouseschool/?locale=es_LA/" target="blank"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="https://www.tiktok.com/foryou/" target="blank"><FontAwesomeIcon icon={faTiktok} /></a>
        <a href="https://www.instagram.com/_digitalhouse/" target="blank"><FontAwesomeIcon icon={faInstagram} /></a>
      </span>
    </footer>
  );
};

export default Footer;
