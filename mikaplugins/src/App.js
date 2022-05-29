import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ThemeProvider } from './components/theme';
import axiosInstance from "./apis/axios-instance";

export default function App(props) {
  const { pathname, hash } = useLocation();

  // scroll to a certain part of the page
  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === "") {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) element.scrollIntoView();
      }, 0);
    }

  }, [pathname, hash]);

  // get plugins list
  useEffect(() => {
    axiosInstance.get("/public/plugins.json")
    .then(response => {
      localStorage.setItem("plugins", JSON.stringify(response.data));
    });
  }, []);

  return (
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  );
}