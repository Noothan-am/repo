import { createContext, useContext, useState } from "react";
import { datas } from '../data/data'

const AppContext = createContext();

const AppProvider = ({ children }) => {
     const [payload, setPayload] = useState(datas);
     const [isShow, setShow] = useState(false);
     const [key, setKey] = useState(null);
     const [count, setCount] = useState(3);
     return (
          <AppContext.Provider value={
               {
                    payload,
                    setPayload,
                    isShow,
                    setShow,
                    setKey,
                    key,
                    count,
                    setCount
               }
          }>
               {children}
          </AppContext.Provider>
     )
}

export const useGlobalContext = () => {
     return useContext(AppContext);
}

export { AppContext, AppProvider };
