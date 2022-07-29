import { createContext, useState, useEffect } from "react";

export const UserDataContext = createContext({});

const userCacheStorage = JSON.parse(localStorage.getItem("userCache")) || {};

export const UserDataContextProvider = ({ children }) => {
  const [userCache, setUserCache] = useState(userCacheStorage);

  useEffect(() => {
    localStorage.setItem("userCache", JSON.stringify(userCache));
  }, [userCache]);

  return (
    <UserDataContext.Provider value={{ userCache, setUserCache }}>
      {children}
    </UserDataContext.Provider>
  );
};
