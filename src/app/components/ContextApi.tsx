import { createContext, useState, useContext } from "react";

const UseContext = createContext();

function ContexApi() {
    const [user, setUser ] = useState(null);

  return (
    <UseContext.Provider value={{ user, setUser }}>
        {children}
    </UseContext.Provider>
  );
}

export default ContexApi;
