// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: localStorage.getItem('token'),
    isAuthenticated: !!localStorage.getItem('token'),
    loading: true,
    user: null
  });

  useEffect(() => {
    const fetchUser = async () => {
      if (authState.token) {
        // try {
        //   const config = {
        //     headers: {
        //       'Authorization': `${authState.token}`
        //     }
        //   };
        // //   const res = await axios.get('http://localhost:3000/api/auth/me', config);
        // //   setAuthState({
        // //     token: authState.token,
        // //     isAuthenticated: true,
        // //     loading: false,
        // //     user: res.data
        // //   });
        // // } catch (error) {
        // //   console.error('Error fetching user:', error.response ? error.response.data : error.message);
        // //   setAuthState({
        // //     token: null,
        // //     isAuthenticated: false,
        // //     loading: false,
        // //     user: null
        // //   });
        // }
      } else {
        setAuthState({
          token: null,
          isAuthenticated: false,
          loading: false,
          user: null
        });
      }
    };

    fetchUser();
  }, [authState.token]);

  const login = async (email, password) => {
    try {
      const res = await axios.post('http://localhost:3000/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      setAuthState({
        token: res.data.token,
        isAuthenticated: true,
        loading: false,
        user: res.data.id
      });
    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data : error.message);
      setAuthState({
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null
      });
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    window.location.reload();
    setAuthState({
      token: null,
      isAuthenticated: false,
      loading: false,
      user: null
    });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
