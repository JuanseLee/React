import React from "react";
import { useGlobalStatesContext } from "./utils/global.context";
import { Link } from "react-router-dom";
import { links } from "./utils/links";
import DarkModeButton from "./DarkModeButton/DarkModeButton";

const Navbar = () => {
  const { theme, dispatchTheme } = useGlobalStatesContext();
  const { home, contact, favs, dentista } = links;

  const handleTheme = () => {
    dispatchTheme({ type: theme.color === "light" ? "SET_DARK" : "SET_LIGHT" });
  };

  return (
    <nav className={theme.color}>
      <Link to={home.path}>{home.name}</Link>
      <Link to={contact.path}>{contact.name}</Link>
      <Link to={favs.path}>{favs.name}</Link>
      {/* <button onClick={handleTheme}>Change theme</button> */}
      <DarkModeButton onClick={handleTheme} />
    </nav>
  );
};

export default Navbar;
