import React from "react";
import { Link as RouterLink } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import styles from "./Sidebar.module.css";

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>My Logo</div>
      <List>
        <ListItem button component={RouterLink} to="/dashboard">
          <ListItemIcon>
            <DashboardIcon style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" className={styles.text} />
        </ListItem>
        <ListItem button component={RouterLink} to="/deposit">
          <ListItemIcon>
            <AccountBalanceIcon style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Deposit" className={styles.text} />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
