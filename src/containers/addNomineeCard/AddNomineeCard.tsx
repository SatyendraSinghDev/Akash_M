import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import styles from "./addNomineeCard.module.css";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import AddNomineeModal from "../addNomineeModal/AddNomineeModal";

const AddNoimneeCard: React.FC = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      (
      <Box className={styles.cardContainer}>
        <Box className={styles.button}>
          <Box
            component="img"
            src="./single-fd-view/add-nominee-icon.svg"
            alt="Nominee Image"
            className={styles.buttonIconStart}
          />

          <Typography
            sx={{ fontWeight: "400", textTransform: "none", fontSize: "14px" }}
          >
            Want to add a nominee?
          </Typography>
          <Box>
            <Button
              onClick={() => setOpen(true)}
              className={styles.addButton}
              sx={{ textTransform: "none" }}
            >
              Add
            </Button>
          </Box>
        </Box>

        <Box className={styles.imageContainer}>
          <Box
            component="img"
            src="./single-fd-view/protect-hand.svg"
            alt="protect-hand"
            className={styles.protectHand}
          />
          <Box
            component="img"
            src="./single-fd-view/protect-hand-wrapper.svg"
            alt="protect-hand-wrapper"
            className={styles.image}
          />
          <Box className={styles.overlay}>
            <Typography variant="h6" className={styles.overlayTitle}>
              Protect Yourself from Insufficient balance
            </Typography>
            <Typography variant="body1" className={styles.overlayText}>
              In case of insufficient funds during a transaction, funds will be
              transferred from this FD to your linked account.
            </Typography>
            <Button
              variant="outlined"
              className={styles.linkButton}
              size="medium"
            >
              Link to Account
            </Button>
          </Box>
        </Box>
      </Box>
      );
      <AddNomineeModal open={open} handleClose={handleClose} />
    </>
  );
};

export default AddNoimneeCard;
