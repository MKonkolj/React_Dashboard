import React, { useState, useContext } from 'react';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [addModalShow, setAddModalShow] = useState(true);

  return (
    <AppContext.Provider value={{ addModalShow, setAddModalShow }}>
      {children}
    </AppContext.Provider>
  );
};
const useGlobal = () => {
  return useContext(AppContext);
};
export { useGlobal, AppProvider };
