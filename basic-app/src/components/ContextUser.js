import React from 'react'

const UserContext = React.createContext();
const UserContextProvider = UserContext.Provider;
const UserContextConsumer = UserContext.Consumer;

const LoginContext = React.createContext();
const LoginContextProvider = LoginContext.Provider;
const LoginContextConsumer = LoginContext.Consumer;

export {UserContextConsumer,UserContextProvider,LoginContextProvider,LoginContextConsumer}