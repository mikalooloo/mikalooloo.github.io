import './mc-home.css'
import React, { useContext } from 'react';
import MCNavbar from './mc-navbar';
import MCFooter from './mc-footer';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '../theme';

export default function MCHome(props) {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={darkMode ? "bg-dark text-white" : "bg-light"}>
      <h1 className={darkMode ? "dark-title" : "light-title"}>Mika's Minecraft</h1>
      <style>{darkMode ? 'body { background-color: rgb(50, 55, 65); }' : 'body { background-color: rgba(0, 0, 0, 0); }'}</style>
      <MCNavbar />
      <Outlet />
      <MCFooter />
    </div>
  );
}