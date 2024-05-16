import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Breadcrumbs as MUIBreadcrumbs, Link, Typography } from "@mui/material";
import styles from "./Breadcrumbs.module.css";

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <MUIBreadcrumbs aria-label="breadcrumb" className={styles.breadcrumbs}>
      <Link component={RouterLink} to="/" color="inherit">
        Home
      </Link>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return last ? (
          <Typography color="textPrimary" key={to}>
            {value}
          </Typography>
        ) : (
          <Link component={RouterLink} to={to} color="inherit" key={to}>
            {value}
          </Link>
        );
      })}
    </MUIBreadcrumbs>
  );
};

export default Breadcrumbs;
