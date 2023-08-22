import React from "react";
import User from "./User";
//Create Context
// Put default value into createContext parameter
const UserContext = React.createContext('Default Value')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}
export default UserContext