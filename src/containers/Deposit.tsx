import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import Typography from "@mui/material/Typography";
import ViewSingleFixedDeposit from "./viewSingleFixedDeposit/ViewSingleFixedDeposit";

const Deposit: React.FC = () => {
  return (
    <div>
      <Breadcrumbs />
      {/* <Typography variant="h4" gutterBottom>
        Deposit
      </Typography>
      <Typography variant="body1">Welcome to the Deposit page.</Typography> */}
      <ViewSingleFixedDeposit />
    </div>
  );
};

export default Deposit;
