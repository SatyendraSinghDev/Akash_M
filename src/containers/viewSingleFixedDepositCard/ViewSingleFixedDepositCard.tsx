// ViewSingleFixedDepositCard.tsx
import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Chip,
  useMediaQuery,
  useTheme,
  Grid,
  Snackbar,
  SnackbarContent,
} from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // Importing the icon
import ArticleIcon from "@mui/icons-material/Article";
import styles from "./ViewSingleFixedDepositCard.module.css";
// import Image from "next/image";
// import CloseFDModal from "../closeFdModal/CloseFDModal";
// import MaturityInstructionsModal from "../maturityInstructionModal/MaturityInstructionsModal";

const ViewSingleFixedDepositCard: React.FC = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [open, setOpen] = useState(false);
  const [openMaturityInstructions, setOpenMaturityInstructions] =
    useState(false);
  const [successMaturityInstructionsRes, setSuccessMaturityInstructionsRes] =
    useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseMaturityInstructions = () => {
    setOpenMaturityInstructions(false);
  };

  const handleMaturityInstructionsStatus = (status: boolean) => {
    setSuccessMaturityInstructionsRes(status);
  };

  const handleSnackbarClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setSuccessMaturityInstructionsRes(false);
  };

  return (
    <>
      <Snackbar
        open={successMaturityInstructionsRes}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <SnackbarContent
          sx={{
            backgroundColor: "#F2FCF6",
            border: `1px solid #0E8345`,
            borderRadius: "8px",
            color: "#000000",
          }}
          message={
            <Box style={{ display: "flex", alignItems: "center" }}>
              <CheckCircleIcon
                style={{
                  marginRight: "16px",
                  color: "green",
                  fontSize: "16px",
                }}
              />
              Maturity Instruction Updated
            </Box>
          }
        />
      </Snackbar>

      <Card className={styles.card}>
        <Box className={styles.header}>
          <Box>
            <Typography component="div" color="text.secondary">
              Fixed Deposit Account Number
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography className={styles.text} component="span">
                1238 9655 3777
              </Typography>
              <Chip
                label="NRE"
                size="small"
                sx={{
                  backgroundColor: "#E2F4FF",
                  color: "#0D68BC",
                  "&:hover": {
                    backgroundColor: "#87CEEB",
                  },
                  border: "1px solid #4682B4",
                }}
              />
            </Box>
          </Box>
          <Box>
            <Typography variant="body2" component="div" color="text.secondary">
              Current FD value
            </Typography>
            <Typography
              className={styles.text}
              variant="h6"
              component="span"
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              ₹456789
            </Typography>
          </Box>
        </Box>

        <CardContent
          className={styles.content}
          sx={{ borderBottom: "2px solid red" }}
        >
          <Grid container spacing={2}>
            {" "}
            {/* Use Grid container */}
            {/* First Section */}
            <Grid item xs={12} sm={4}>
              {" "}
              {/* Each section takes up 4 columns on small screens and 12 columns on extra small screens */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "20px",
                }}
              >
                <Typography
                  variant="body2"
                  component="div"
                  color="text.secondary"
                  fontWeight="500"
                >
                  Principal Amount
                </Typography>
                <Typography variant="body1" component="div" fontWeight="600">
                  ₹10,000
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "20px",
                }}
              >
                <Typography
                  variant="body2"
                  component="div"
                  color="text.secondary"
                  fontWeight="500"
                >
                  Interest Rate
                </Typography>
                <Typography variant="body1" component="div" fontWeight="600">
                  7.75%
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "20px",
                }}
              >
                <Typography
                  variant="body2"
                  component="div"
                  color="text.secondary"
                  fontWeight="500"
                >
                  Maturity Instruction
                </Typography>
                <Typography variant="body1" component="div" fontWeight="600">
                  Credit Principal and interest
                </Typography>
              </Box>
            </Grid>
            {/* Second Section */}
            <Grid item xs={12} sm={4}>
              {" "}
              {/* Each section takes up 4 columns on small screens and 12 columns on extra small screens */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "20px",
                }}
              >
                <Typography
                  variant="body2"
                  component="div"
                  color="text.secondary"
                  fontWeight="500"
                >
                  Maturity Amount
                </Typography>
                <Typography variant="body1" component="div" fontWeight="600">
                  ₹10,490
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "20px",
                }}
              >
                <Typography
                  variant="body2"
                  component="div"
                  color="text.secondary"
                  fontWeight="500"
                >
                  FD Renewal Date
                </Typography>
                <Typography variant="body1" component="div" fontWeight="600">
                  09/20/2023
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "20px",
                }}
              >
                <Typography
                  variant="body2"
                  component="div"
                  color="text.secondary"
                  fontWeight="500"
                >
                  Redemption Account
                </Typography>
                <Typography variant="body1" component="div" fontWeight="600">
                  ICIC234810342
                </Typography>
              </Box>
            </Grid>
            {/* Third Section */}
            <Grid item xs={12} sm={4}>
              {" "}
              {/* Each section takes up 4 columns on small screens and 12 columns on extra small screens */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "20px",
                }}
              >
                <Typography
                  variant="body2"
                  component="div"
                  color="text.secondary"
                  fontWeight="500"
                >
                  Interest Payout
                </Typography>
                <Typography variant="body1" component="div" fontWeight="600">
                  Quarterly
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "20px",
                }}
              >
                <Typography
                  variant="body2"
                  component="div"
                  color="text.secondary"
                  fontWeight="500"
                >
                  Currency
                </Typography>
                <Typography variant="body1" component="div" fontWeight="600">
                  INR
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>

        <CardActions className={styles.cardFooter}>
          <Box className={styles.buttonContainer}>
            <Box className={styles.buttonRow}>
              <Button
                variant="outlined"
                className={styles.button}
                sx={{
                  "& .MuiButton-endIcon": {
                    marginLeft: "auto",
                  },
                  "& .MuiButton-startIcon": {
                    color: "red", // Changing arrow icon color to red
                  },
                }}
                startIcon={
                  <Box component="img"
                    width={24}
                    height={24}
                    src="./single-fd-view/download-fd-advice.svg"
                    alt="img"
                  />
                }
                endIcon={<ArrowForwardIosIcon />}
              >
                <Typography
                  sx={{
                    textTransform: "none",
                    fontSize: "12px",
                    fontWeight: 600,
                    lineHeight: "18px",
                  }}
                >
                  Download FD Advice
                </Typography>
              </Button>

              <Button
                variant="outlined"
                className={styles.button}
                sx={{
                  "& .MuiButton-endIcon": {
                    marginLeft: "auto",
                  },
                  "& .MuiButton-startIcon": {
                    color: "red", // Changing arrow icon color to red
                  },
                }}
                startIcon={
                  <Box component="img"
                    width={24}
                    height={24}
                    src="./single-fd-view/view-fd-statement.svg"
                    alt="img"
                  />
                }
                endIcon={<ArrowForwardIosIcon />}
              >
                <Typography
                  sx={{
                    textTransform: "none",
                    fontSize: "12px",
                    fontWeight: 600,
                    lineHeight: "18px",
                  }}
                >
                  View FD Statement
                </Typography>
              </Button>
            </Box>
            <Box className={styles.buttonRow}>
              <Button
                onClick={() => setOpen(true)}
                variant="outlined"
                className={styles.button}
                sx={{
                  "& .MuiButton-endIcon": {
                    marginLeft: "auto",
                  },
                  "& .MuiButton-startIcon": {
                    color: "red", // Changing arrow icon color to red
                  },
                }}
                startIcon={
                  <Box component="img"
                    width={24}
                    height={24}
                    src="./single-fd-view/partial-premature-closure.svg"
                    alt="img"
                  />
                }
                endIcon={<ArrowForwardIosIcon />}
              >
                <Typography
                  sx={{
                    textTransform: "none",
                    fontSize: "12px",
                    fontWeight: 600,
                    lineHeight: "18px",
                  }}
                >
                  Partial/Premature Closure
                </Typography>
              </Button>
              <Button
                onClick={() => {
                  setSuccessMaturityInstructionsRes(false);
                  setOpenMaturityInstructions(true);
                }}
                variant="outlined"
                className={styles.button}
                sx={{
                  "& .MuiButton-endIcon": {
                    marginLeft: "auto",
                  },
                  "& .MuiButton-startIcon": {
                    color: "red", // Changing arrow icon color to red
                  },
                }}
                startIcon={
                  <Box component="img"
                    width={24}
                    height={24}
                    src="./single-fd-view/update-maturity-instruction.svg"
                    alt="img"
                  />
                }
                endIcon={<ArrowForwardIosIcon />}
              >
                <Typography
                  gutterBottom
                  sx={{
                    textTransform: "none",
                    fontSize: "12px",
                    fontWeight: 600,
                    lineHeight: "18px",
                  }}
                >
                  Update Maturity Instructions
                </Typography>
              </Button>
            </Box>
          </Box>
        </CardActions>
      </Card>

      {/* <CloseFDModal open={open} handleClose={handleClose} />

      <MaturityInstructionsModal
        open={openMaturityInstructions}
        handleClose={handleCloseMaturityInstructions}
        handleMaturityInstructionsStatus={handleMaturityInstructionsStatus}
      /> */}
    </>
  );
};

export default ViewSingleFixedDepositCard;
