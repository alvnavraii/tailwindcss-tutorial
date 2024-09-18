import { createContext, useState } from "react";
import PropTypes from "prop-types";

// Crear el contexto
export const GlobalContext = createContext();

// Proveedor del contexto
export const GlobalProvider = ({ children }) => {
  const [state, setState] = useState(null);

  // Función global
  const globalFunction = () => {
    console.log("Función global ejecutada");
  };

  PropTypes.GlobalProvider = {
    children: PropTypes.node.isRequired,
  };

  return (
    <GlobalContext.Provider value={{ state, setState, globalFunction }}>
      {children}
    </GlobalContext.Provider>
  );
};
