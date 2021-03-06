import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ThemeProvider } from './components/theme';
import { ParallaxProvider } from "react-scroll-parallax";

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
        if (element) {
          element.focus(); // for keyboard accessibility
          element.scrollIntoView();
        }
      }, 0);
    }

  }, [pathname, hash]);

  return (
    <ThemeProvider>
      <ParallaxProvider>
        <Outlet />
      </ParallaxProvider>
    </ThemeProvider>
  );
}