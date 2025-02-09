import React from "react";

import { IoMoonOutline } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { useAppContext } from "../context/AppContext";

import Button from "./Button";
import Card from "./Card";

import classes from "./Header.module.css";

export default function Header() {
  const { theme, toggleTheme } = useAppContext();

  const activeTheme = theme === "light" ? <IoMoonOutline /> : <IoMoon />;

  return (
    <header className={classes.header}>
      <h1>Where in the world?</h1>
      <Card className={classes["theme-group"]}>
        <Button className={classes["theme-btn"]} onClick={toggleTheme}>
          {activeTheme}
        </Button>
        <span>Dark Mode</span>
      </Card>
    </header>
  );
}
