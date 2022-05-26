import './mc-base.css'
import React, { useContext, useState, useEffect } from 'react';
import MCNavbar from './mc-navbar';
import MCFooter from './mc-footer';
import ErrorPopup from "../../error-popup";
import * as Sentry from "@sentry/react";
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '../../theme';

export default function MCBase(props) {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [sticky, setSticky] = useState("sticky-top");

  useEffect(() => {
    const stickNavbar = () => {
      window.scrollY > 130 ? setSticky("fixed-top") : setSticky("sticky-top");
    };

    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  return (
    <div className={darkMode ? "text-white" : "text-dark"}>
      <div style={{"min-height":"80vh"}}>
        <style>{darkMode ? "body { background-color: rgb(36, 40, 45); }" : "body { background-color: rgba(0, 0, 0, 0); }"}</style>
        <h1 className={darkMode ? "dark-title" : "light-title"}>Mika's Minecraft</h1>
        <MCNavbar stick={sticky}/>
        <div style={sticky === "sticky-top" ? {"padding-top":"1.5%", "padding-bottom":"2%"} : {"padding-top":"5%", "padding-bottom":"2%"}}>
          <Sentry.ErrorBoundary fallback={<ErrorPopup />}>
            <Outlet />
          </Sentry.ErrorBoundary>
        </div>
      </div>
      <MCFooter />
    </div>
  );
}