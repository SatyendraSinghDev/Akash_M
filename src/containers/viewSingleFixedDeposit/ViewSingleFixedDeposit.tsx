import React from "react";
import { Box, Card, Typography, useMediaQuery, useTheme } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import ViewSingleFixedDepositCard from "../viewSingleFixedDepositCard/ViewSingleFixedDepositCard";
import AddNoimneeCard from "../addNomineeCard/AddNomineeCard";
import styles from "./ViewSingleFixedDeposit.module.css";

const ViewSingleFixedDeposit: React.FC = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Card className={styles.mainCard}>
      <Box className={styles.container}>
        <Box className={styles.titleContainer}>
          <WestIcon className={styles.titleIcon} />
          <Typography variant="h5" className={styles.titleText}>
            Fixed Deposits Details
          </Typography>
        </Box>

        <Box className={styles.contentContainer}>
          <ViewSingleFixedDepositCard />

          <AddNoimneeCard />
        </Box>
      </Box>
    </Card>
  );
};

export default ViewSingleFixedDeposit;
