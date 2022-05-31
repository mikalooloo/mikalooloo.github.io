import './mc-base.css'
import React, { useContext, useState, useEffect } from 'react';
import MCNavbar from './mc-navbar';
import MCFooter from './mc-footer';
import ErrorPopup from "../../error-popup";
import * as Sentry from "@sentry/react";
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '../../theme';
import axiosInstance from "../../../apis/axios-instance";

export default function MCBase(props) {
  // get theme
  const theme = useContext(ThemeContext);
  const darkMode = theme.darkMode;

  // have the navbar stick to the top when scrolled down, and in its regular position when not
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

  // get plugins list
  const [plugins, setPlugins] = useState();

  useEffect(() => {
    axiosInstance.get("/public/plugins.json")
      .then(response => {
        setPlugins(response.data);
      });
  }, []);

  return (
    <div className={darkMode ? "text-white" : "text-dark"}>
      <div style={{ "minHeight": "80vh" }}>
        <style>{darkMode ? "body { background-color: rgb(36, 40, 45); }" : "body { background-color: rgba(0, 0, 0, 0); }"}</style>
        <h1 className={darkMode ? "dark-title" : "light-title"}>Mika's Minecraft</h1>
        <MCNavbar stick={sticky} />
        <main style={sticky === "sticky-top" ? { "paddingTop": "1.5%", "paddingBottom": "2%" } : { "paddingTop": "5%", "paddingBottom": "2%" }}>
          <Sentry.ErrorBoundary fallback={<ErrorPopup />}>
            <Outlet context={[plugins]} />
          </Sentry.ErrorBoundary>
        </main>
      </div>
      <MCFooter />
    </div>
  );
}