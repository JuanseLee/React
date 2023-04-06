import { createContext, useContext, useReducer, useState } from "react";

const initialThemeState = { color: "light" };
const initialdentistsState = [];

const GlobalStates = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case "SET_LIGHT":
      return { ...state, color: "light" };
    case "SET_DARK":
      return { ...state, color: "dark" };
    default:
      return state;
  }
};
const GlobalStateProvider = ({ children }) => {
  const [dentists, setdentists] = useState(initialdentistsState);
  const [theme, dispatchTheme] = useReducer(themeReducer, initialThemeState);

  const value = {
    dentists,
    setdentists,
    theme,
    dispatchTheme,
  };

  return (
    <GlobalStates.Provider value={value}>
      {children}
    </GlobalStates.Provider>
  );
};

export default GlobalStateProvider;
export const useGlobalStatesContext = () => useContext(GlobalStates);
