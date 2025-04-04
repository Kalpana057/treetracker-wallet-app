"use client";

import React, { useState } from "react";
import { Box, Typography, Button, TextField, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/navigation";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const router = useRouter();

  // Validate email format
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSendLink = () => {
    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    }

    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setEmailError(""); // Clear any previous errors
    router.push(`/forgotPassword/verify?email=${encodeURIComponent(email)}`);
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 10,
        px: 3,
        textAlign: "center",
        position: "relative",
      }}>
      {/* Back Arrow */}
      <IconButton
        onClick={() => router.push("/login")}
        sx={{ position: "absolute", left: 0, top: 0 }}>
        <ArrowBackIcon />
      </IconButton>

      <Typography variant="h5" fontWeight="bold" gutterBottom mt={4}>
        Forgot your password?
      </Typography>

      <Typography variant="body2" mb={4}>
        Confirm your email and we’ll send you a link to create a brand new
        password.
      </Typography>

      {/* Email Field */}
      <Box sx={{ position: "relative", mb: 3 }}>
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          value={email}
          onChange={e => {
            setEmail(e.target.value);
            if (emailError) setEmailError("");
          }}
          error={!!emailError}
          helperText={emailError}
        />
        {email && (
          <IconButton
            size="small"
            onClick={() => setEmail("")}
            sx={{ position: "absolute", right: 10, top: "30%" }}>
            <CloseIcon />
          </IconButton>
        )}
      </Box>

      <Button
        fullWidth
        variant="contained"
        onClick={handleSendLink}
        disabled={!email.trim()}
        sx={{
          backgroundColor: "#61892F",
          color: "#fff",
          "&:disabled": {
            backgroundColor: "gray",
            color: "#fff",
          },
        }}>
        SEND THE LINK
      </Button>
    </Box>
  );
}
