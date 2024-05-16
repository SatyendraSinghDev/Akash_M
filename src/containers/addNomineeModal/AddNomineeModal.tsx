import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Typography,
  Dialog,
  IconButton,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  Grid,
} from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import { Close as CloseIcon } from "@mui/icons-material";
import styles from "./AddNominee.module.css";
// Add Custom styles
const numericInputStyle = {
  "& .MuiInputBase-root": {
    backgroundColor: "white", // White background
    border: "2px solid #000", // Complete outline
    borderRadius: "4px", // Rounded corners
  },
  "& .MuiFormLabel-root": {
    position: "absolute",
    top: "20px", // Fixed label position
    left: "12px", // Spacing from the left
    zIndex: 1, // Ensure label is above input
    backgroundColor: "white", // Match input background
    padding: "0 4px", // Adjust padding
  },
};

interface ModalProps {
  open: boolean;
  handleClose: () => void;
}

function AddNomineeModal({ open, handleClose }: ModalProps) {
  // State variables for nominee details
  const [existingNominee, setExistingNominee] = useState<boolean>(true);
  const [nomineeName, setNomineeName] = useState<string>(""); // Initialize with an empty string
  const [country, setCountry] = useState<string>("");
  const [office, setOffice] = useState<string>("");
  const [relationship, setRelationship] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [sameAsCommunicationAddress, setSameAsCommunicationAddress] =
    useState<boolean>(true);
  const [addressLine1, setAddressLine1] = useState<string>("");
  const [addressLine2, setAddressLine2] = useState<string>("");
  const [pincode, setPincode] = useState<string>("");
  const [timer, setTimer] = useState(30);
  const [isResendBtnDisabled, setIsResendBtnDisabled] = useState(true);
  const [isClickedClosedFDBtn, setIsClickedClosedFDBtn] =
    useState<boolean>(false);
  const [isOtpBtnDisabled, setIsOtpBtnDisabled] = useState(true);
  const [otp, setOTP] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      setIsResendBtnDisabled(false);
    }

    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { value } = event.target;
    if (!isNaN(Number(value)) && value.length <= 1) {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);
      if (index < otp.length - 1 && value) {
        inputRefs.current[index + 1]?.focus();
      }
      setIsOtpBtnDisabled(newOTP.some((val) => val === ""));
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>, // Adjusted type to HTMLDivElement
    index: number
  ) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      const newOTP = [...otp];
      newOTP[index - 1] = "";
      setOTP(newOTP);
      setIsOtpBtnDisabled(true);
      inputRefs.current[index - 1]?.focus();
    }
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleResendClick = () => {
    // Logic to resend OTP goes here
    // For demo purposes, let's reset the timer
    setTimer(30);
    setIsResendBtnDisabled(true);
  };

  const handleExistingNomineeChange = () => {
    setExistingNominee(true); // Always set existingNominee to true when selecting existing nominee option
    setNomineeName(""); // Clear new nominee details when switching to existing nominee
    setCountry("");
  };

  const handleNewNomineeChange = () => {
    setExistingNominee(false); // Always set existingNominee to false when selecting new nominee option
  };

  const handleNomineeDetailsChange = (
    event: React.ChangeEvent<HTMLInputElement | { value: unknown }>
  ) => {
    const target = event.target as HTMLInputElement;
    switch (target.name) {
      case "nomineeName":
        setNomineeName(target.value);
        break;
      case "country":
        setCountry(target.value);
        break;
      case "relationship":
        setRelationship(target.value);
        break;
      case "dob":
        setDob(target.value);
        break;
      case "mobileNumber":
        setMobileNumber(target.value);
        break;
      case "addressLine1":
        setAddressLine1(target.value);
        break;
      case "addressLine2":
        setAddressLine2(target.value);
        break;
      case "pincode":
        setPincode(target.value);
        break;
      default:
        break;
    }
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSameAsCommunicationAddress(event.target.checked);
    // Clear the additional address fields when the checkbox is checked
    if (event.target.checked) {
      setAddressLine1("");
      setAddressLine2("");
      setPincode("");
    }
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <Box style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          {/* Overlay */}
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              zIndex: 1300, // Ensure overlay is above the modal
            }}
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking on overlay
          />
          {/* Modal Content */}
          {/* Modal Container */}
          <div
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              height: "100%",
              width: "30%", // Adjust width as needed
              background: "#FFFFFF", // Semi-transparent background
              zIndex: 1300,
              overflowY: "auto", // Enable vertical scrolling if content overflows
            }}
          >
            {/* Modal Content */}

            {!isClickedClosedFDBtn && (
              <Box
                sx={{
                  position: "relative",
                  zIndex: 1301,
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "100vh",
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "20px 10px",
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          marginLeft: "10px",
                          fontWeight: 600,
                          fontSize: "1.2rem",
                        }}
                      >
                        Add nominee
                      </Typography>
                      <IconButton
                        onClick={handleClose}
                        sx={{
                          color: "black",
                          "& svg": {
                            fontSize: 14, // Adjust the font size as needed
                          },
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                    </Box>

                    <Box className={styles.AddNominee}>
                      <Box className={styles.existingNomineeBox}>
                        <div style={{ marginBottom: "1rem", display: "flex" }}>
                          <FormControl component="fieldset">
                            <RadioGroup
                              aria-label="nominee-type"
                              name="nomineeType"
                              value={existingNominee ? "existing" : "new"}
                              onChange={(e) =>
                                e.target.value === "existing"
                                  ? handleExistingNomineeChange()
                                  : handleNewNomineeChange()
                              }
                              row
                            >
                              <FormControlLabel
                                value="existing"
                                control={
                                  <Radio
                                    sx={{
                                      "&.Mui-checked": { color: "#D75A47" },
                                    }}
                                  />
                                }
                                label="Existing Nominee"
                              />
                              <FormControlLabel
                                value="new"
                                control={
                                  <Radio
                                    sx={{
                                      "&.Mui-checked": { color: "#D75A47" },
                                    }}
                                  />
                                }
                                label="New Nominee"
                              />
                            </RadioGroup>
                          </FormControl>
                        </div>
                        {existingNominee ? (
                          <Box sx={{ minWidth: 120 }}>
                            <InputLabel>
                              Select Nominee&nbsp;
                              <span
                                style={{
                                  color: relationship ? "inherit" : "red",
                                }}
                              >
                                *
                              </span>
                            </InputLabel>
                            <FormControl fullWidth>
                              <Box
                                sx={{
                                  fontSize: "14px",
                                  fontWeight: "400",
                                  marginBottom: "8px",
                                  lineHeight: "18px",
                                }}
                              >
                                {!existingNominee && (
                                  <span style={{ color: "red" }}>*</span>
                                )}
                              </Box>

                              <Select
                                style={{ borderRadius: "8px" }}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value=""
                                onChange={() => handleExistingNomineeChange()}
                                displayEmpty
                              >
                                <MenuItem value="" disabled>
                                  Select
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                              </Select>
                            </FormControl>
                          </Box>
                        ) : (
                          <div>
                            <InputLabel>
                              Name&nbsp;
                              <span
                                style={{
                                  color: nomineeName ? "inherit" : "red",
                                }}
                              >
                                *
                              </span>
                            </InputLabel>
                            <TextField
                              value={nomineeName}
                              onChange={handleNomineeDetailsChange}
                              name="nomineeName"
                              style={{ width: "100%", marginBottom: "1rem" }}
                            />
                            <Box>
                              <InputLabel>
                                Relationship&nbsp;
                                <span
                                  style={{
                                    color: relationship ? "inherit" : "red",
                                  }}
                                >
                                  *
                                </span>
                              </InputLabel>
                              <FormControl
                                fullWidth
                                style={{ width: "100%", marginBottom: "1rem" }}
                              >
                                <Select
                                  id="relationship"
                                  value={relationship}
                                  onChange={(event) => {
                                    // Call the function to update the state with the selected value
                                    setRelationship(
                                      event.target.value as string
                                    );
                                    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                                    !!event.target.value; // Toggle state based on whether a relationship is selected
                                  }}
                                  name="Select"
                                  displayEmpty
                                >
                                  <MenuItem
                                    style={{ color: "#8C8C8C" }}
                                    value=""
                                    disabled
                                  >
                                    Select Relationship
                                  </MenuItem>
                                  <MenuItem value="spouse">Spouse</MenuItem>
                                  <MenuItem value="child">Child</MenuItem>
                                  <MenuItem value="parent">Parent</MenuItem>
                                  <MenuItem value="sibling">Sibling</MenuItem>
                                  {/* Add more relationship options as needed */}
                                </Select>
                              </FormControl>
                            </Box>
                            <Box>
                              <InputLabel>
                                Date Of Birth&nbsp;
                                <span
                                  style={{
                                    color: nomineeName ? "inherit" : "red",
                                  }}
                                >
                                  *
                                </span>
                              </InputLabel>
                              <TextField
                                placeholder="Select Date of Birth"
                                value={dob}
                                onChange={handleNomineeDetailsChange}
                                name="dob"
                                InputLabelProps={{
                                  shrink: true,
                                }}
                                style={{ width: "100%", marginBottom: "1rem" }}
                              />
                            </Box>
                            <Box>
                              <InputLabel>
                                Mobile Number&nbsp;
                                <span
                                  style={{
                                    color: mobileNumber ? "inherit" : "red",
                                  }}
                                >
                                  *
                                </span>
                              </InputLabel>
                              <Box className={styles.countryCodeBox}>
                                <TextField
                                  value="+91"
                                  InputProps={{
                                    readOnly: true,
                                  }}
                                  className={styles.countryCode}
                                />
                                <TextField
                                  type="Number"
                                  placeholder="Enter Mobile Number"
                                  value={mobileNumber}
                                  onChange={handleNomineeDetailsChange}
                                  name="mobileNumber"
                                  className={styles.mobileNumberField}
                                />
                              </Box>
                            </Box>
                            <FormControlLabel
                              sx={{ marginBottom: "2rem" }}
                              control={
                                <Checkbox
                                  checked={sameAsCommunicationAddress}
                                  onChange={handleCheckboxChange}
                                  name="sameAsCommunicationAddress"
                                  color="primary"
                                />
                              }
                              label="Nominee address same as customer’s communication address"
                              style={{
                                color: sameAsCommunicationAddress
                                  ? ""
                                  : "#D75A47",
                              }}
                            />
                            {/* Additional address fields */}
                            {!sameAsCommunicationAddress && (
                              <div>
                                <TextField
                                  label="Address Line 1"
                                  value={addressLine1}
                                  onChange={handleNomineeDetailsChange}
                                  name="addressLine1"
                                  style={{
                                    width: "100%",
                                    marginBottom: "1rem",
                                  }}
                                />
                                <TextField
                                  label="Address Line 2 (Optional)"
                                  value={addressLine2}
                                  onChange={handleNomineeDetailsChange}
                                  name="addressLine2"
                                  style={{
                                    width: "100%",
                                    marginBottom: "1rem",
                                  }}
                                />
                                <TextField
                                  label="Pincode"
                                  value={pincode}
                                  onChange={handleNomineeDetailsChange}
                                  name="pincode"
                                  style={{ width: "100%" }}
                                />
                              </div>
                            )}
                          </div>
                        )}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            )}

            {isClickedClosedFDBtn && (
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "20px 10px",
                  }}
                >
                  <IconButton
                    onClick={() => {
                      setIsClickedClosedFDBtn(false);
                      setOTP(["", "", "", "", "", ""]);
                      setIsOtpBtnDisabled(true);
                    }}
                    sx={{
                      color: "black",
                      "& svg": {
                        fontSize: 14, // Adjust the font size as needed
                      },
                    }}
                  >
                    <WestIcon />
                  </IconButton>

                  <Typography
                    variant="h5"
                    sx={{
                      marginLeft: "10px",
                      fontWeight: 600,
                      fontSize: "1.2rem",
                    }}
                  >
                    Verify via OTP
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px 30px",
                  }}
                >
                  <Typography
                    component="body"
                    sx={{
                      textTransform: "none",
                      color: "rgba(0, 0, 0, 0.6)",
                      fontSize: "16px",
                    }}
                  >
                    Please enter the OTP received on your mobile number ending
                    with 1515
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "10px 20px",
                  }}
                >
                  <Grid
                    sx={{ gap: "8px" }}
                    item
                    xs={12}
                    container
                    justifyContent="center"
                  >
                    {otp.map((digit, index) => (
                      <Grid
                        item
                        key={index}
                        sx={{
                          width: "48px",
                          height: "auto",
                          border: "1px solid #BFBFBF",
                          borderRadius: "8px",
                          '& input[type="password"]': {
                            textAlign: "center",
                            fontSize: "50px",
                            height: "28px",
                          },
                          "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                            {
                              borderColor: "#ff0000", // Override hover effect color
                            },
                          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                            {
                              borderColor: "#ff0000", // Change focused effect color
                            },
                        }}
                      >
                        <TextField
                          inputRef={(el) => (inputRefs.current[index] = el)}
                          value={digit}
                          onChange={(e) => handleChange(e, index)}
                          onKeyDown={(e) => handleKeyDown(e, index)}
                          variant="outlined"
                          size="small"
                          autoFocus={index === 0}
                          type="password"
                          inputMode="numeric"
                          inputProps={{ maxLength: 1 }}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0px 30px",
                  }}
                >
                  <Typography
                    component="body"
                    sx={{
                      textTransform: "none",
                      color: "rgba(0, 0, 0, 0.6)",
                      fontSize: "14px",
                    }}
                  >
                    {timer > 0
                      ? `Resend OTP in ${formatTime(timer)} seconds`
                      : "Resend OTP available"}
                  </Typography>
                  <Button
                    disabled={isResendBtnDisabled}
                    onClick={handleResendClick}
                    sx={{
                      textTransform: "none",
                      textDecoration: "underline",
                      "&.Mui-disabled": {
                        pointerEvents: "unset",
                        cursor: "not-allowed",
                      },
                      cursor: "pointer",
                      "&:hover": {
                        backgroundColor: isResendBtnDisabled
                          ? "inherit"
                          : "transparent",
                        cursor: isResendBtnDisabled ? "not-allowed" : "pointer",
                        textDecoration: isResendBtnDisabled
                          ? "underline"
                          : "none",
                      },
                      "&:active": {
                        backgroundColor: isResendBtnDisabled
                          ? "inherit"
                          : "transparent",
                      },
                    }}
                  >
                    Resend OTP
                  </Button>
                </Box>
              </Box>
            )}

            {/* footer  */}
            {!isClickedClosedFDBtn && (
              <Box sx={{ padding: "0px 20px" }}>
                <Box
                  sx={{
                    marginTop: "auto",
                    padding: "20px 0px",
                    display: "flex",
                    borderTop: "1px solid #c3c0c0",
                    gap: "14px",
                  }}
                >
                  <Button
                    variant="outlined"
                    sx={{
                      width: "60%",
                      border: "1px solid #FF0000",
                      padding: "6px 8px 6px 8px",
                      borderRadius: "25px", // Adding border radius
                      "&:hover": {
                        backgroundColor: "#FFFFFF", // Remove hover effect
                        border: "1px solid #FF0000",
                      },
                      "&:active": {
                        backgroundColor: "#FFFFFF", // Remove active effect
                      },
                    }}
                    size="small"
                  >
                    <Typography
                      sx={{
                        // fontWeight: "500",
                        textTransform: "none",
                        color: "#FF0000",
                      }}
                    >
                      Cancel
                    </Typography>
                  </Button>

                  <Button
                    type="submit"
                    variant="outlined"
                    onClick={() => setIsClickedClosedFDBtn(true)}
                    // disabled
                    sx={{
                      width: "100%",
                      border: "1px solid grey",
                      padding: "6px 8px 6px 8px",
                      borderRadius: "25px", // Adding border radius
                      backgroundColor: "#D75A47",
                      cursor: "pointer",
                      "&:hover": {
                        backgroundColor: "#D75A47", // Remove hover effect
                        border: "1px solid #D75A47",
                        cursor: "pointer",
                      },
                      "&:active": {
                        backgroundColor: "#D75A47", // Remove active effect
                      },
                      "&.Mui-disabled": {
                        pointerEvents: "unset", // allow :hover styles to be triggered
                        cursor: "not-allowed", // and custom cursor can be defined without :hover state
                        backgroundColor: "grey",
                        color: "white",
                      },
                    }}
                    size="small"
                  >
                    <Typography
                      sx={{
                        // fontWeight: "500",
                        textTransform: "none",
                        color: "white",
                      }}
                    >
                      Add Nominee
                    </Typography>
                  </Button>
                </Box>
              </Box>
            )}
            {isClickedClosedFDBtn && (
              <Box sx={{ padding: "0px 20px" }}>
                <Box
                  sx={{
                    marginTop: "auto",
                    padding: "20px 0px",
                    display: "flex",
                    borderTop: "1px solid #c3c0c0",
                    gap: "14px",
                  }}
                >
                  <Button
                    disabled={isOtpBtnDisabled}
                    onClick={() => {
                      setIsClickedClosedFDBtn(true);
                    }}
                    variant="outlined"
                    sx={{
                      width: "100%",
                      padding: "6px 8px 6px 8px",
                      borderRadius: "25px",
                      backgroundColor: "#ff0000",
                      border: "1px solid #ff0000",
                      color: "#FFFFFF",
                      cursor: "pointer",
                      "&:hover": {
                        backgroundColor: isOtpBtnDisabled
                          ? "inherit"
                          : "#ff0000",
                        border: isOtpBtnDisabled
                          ? "1px solid grey"
                          : "1px solid #ff0000",
                        cursor: isOtpBtnDisabled ? "not-allowed" : "pointer",
                        color: isOtpBtnDisabled ? "inherit" : "#FFFFFF",
                      },
                      "&:active": {
                        backgroundColor: isOtpBtnDisabled
                          ? "inherit"
                          : "#ff0000",
                        color: isOtpBtnDisabled ? "inherit" : "#FFFFFF",
                      },
                      "&.Mui-disabled": {
                        pointerEvents: "unset",
                        cursor: "not-allowed",
                        backgroundColor: "grey",
                        color: "white",
                      },
                    }}
                    size="small"
                  >
                    <Typography
                      sx={{
                        textTransform: "none",
                      }}
                    >
                      Submit
                    </Typography>
                  </Button>
                </Box>
              </Box>
            )}
          </div>
        </Box>
      </Dialog>
    </>
  );
}

export default AddNomineeModal;
