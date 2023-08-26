// contexts/GeneralContext.js
import { createContext, useContext, useState } from 'react';

const GeneralContext = createContext();

export const GeneralProvider = ({ children }) => {
  const [state1, setState1] = useState(initialValue1);
  const [state2, setState2] = useState(initialValue2);
  // Add more states here

  const values = {
    state1,
    setState1,
    state2,
    setState2,
    // Add more states and setters here
  };

  return (
    <GeneralContext.Provider value={values}>
      {children}
    </GeneralContext.Provider>
  );
};

export const useGeneralContext = () => {
  return useContext(GeneralContext);
};
