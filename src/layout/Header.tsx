import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <AppBar position="fixed" className={styles.header}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          My Application
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
