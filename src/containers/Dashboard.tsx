import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import Typography from "@mui/material/Typography";

const Dashboard: React.FC = () => {
  return (
    <div>
      <Breadcrumbs />
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="body1">Welcome to the Dashboard page.</Typography>
    </div>
  );
};

export default Dashboard;
