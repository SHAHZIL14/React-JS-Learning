import UserContext from "./UserContext";
import {  useState } from "react";
function UserContextProvider({ children }) {
  let [user,setUser] = useState({});
  return (
    <>
    <UserContext.Provider value={{user,setUser}}>
    {children}
    </UserContext.Provider>
    </>
  );
}

export default UserContextProvider;
