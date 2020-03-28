import React, { useEffect } from "react";
import { postData, readCookie } from "../helpers/utils";

export const AppContext = React.createContext({
  users: [],
  setUsers: null,
  loginError: null,
  setLoginError: null,
  isLoggedIn: false,
  setIsLoggegIn: null,
  handleLogin: null,
  isLoading: false,
  setIsLoading: null,
  token: null,
  setToken: null,
  fetchUsers: null
});

export const AppProvider = props => {
  const [isLoggedIn, setIsLoggegIn] = React.useState(false);
  const [users, setUsers] = React.useState([]);
  const [loginError, setLoginError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [token, setToken] = React.useState(null);

  useEffect(() => {
    setIsLoading(true);
    const token = readCookie("token");
    if (token) {
      setIsLoggegIn(true);
      setToken(token);
    }
    setIsLoading(false);
  }, []);

  const handleLogin = async loginData => {
    try {
      const response = await postData("POST", process.env.REACT_APP_LOGIN_URL, {
        accountId: loginData.accountId,
        pswd: loginData.password
      });
      return response;
    } catch (error) {
      console.error(error);
      setLoginError(error);
    }
  };

  const fetchUsers = async token => {
    try {
      const response = await postData(
        "GET",
        process.env.REACT_APP_USER_URL,
        {},
        token
      );
      return response;
    } catch (error) {
      console.error(error);
      setLoginError(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        setIsLoggegIn,
        users,
        setUsers,
        loginError,
        setLoginError,
        handleLogin,
        fetchUsers,
        isLoading,
        setIsLoading,
        token,
        setToken
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
