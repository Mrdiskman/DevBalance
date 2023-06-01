import { createContext, useState } from "react";

export const Contexts = createContext({});

const ContextsProvider = ({ children }) => {

    const [listTransactions, setListTransactions] = useState([])

    const totalBalance = listTransactions?.reduce(
      (acc, prev) =>
        prev.type === "In" ? acc + prev.value : acc - prev.value,
      0 
    );
  
    function setId() {
      const min = 1;
      const max = 99999;
      return Math.floor(Math.random() * (max - min)) + min;
    }

  return (
    <Contexts.Provider
      value={{
        totalBalance,
        listTransactions, 
        setId,
        setListTransactions
      }}
    >
      {children}
    </Contexts.Provider>
  );
};

export default ContextsProvider;