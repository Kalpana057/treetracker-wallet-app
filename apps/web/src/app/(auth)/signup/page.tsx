"use client";

import React, { useEffect, useState } from "react";
import {
  Email as EmailIcon,
  Facebook as FacebookIcon,
  GitHub as GitHubIcon,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

import {
  Box,
  Typography,
  IconButton,
  InputAdornment,
  Link as MuiLink,
} from "@mui/material";

import NextLink from "next/link";
import Wrapper from "@/components/common/Wrapper";
import CustomHeadingTitle from "@/components/common/CustomHeadingTitle";
import CustomTextField from "@/components/common/CustomTextFieldProps";
import CustomSubmitButton from "@/components/common/CustomSubmitButton";
import SocialButtons from "@/components/common/SocialButtons";
import TermsSection from "@/components/common/TermsSection";
import CenteredColumnBox from "@/components/common/CenteredColumnBox";
import Logo from "@/components/common/Logo";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 8;
  };

  const handleClickShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Form Data:", formData);
    // API call here
  };

  useEffect(() => {
    if (formData.email && !validateEmail(formData.email)) {
      setEmailError("Error: Email is incorrect");
    } else {
      setEmailError("");
    }

    if (formData.password && !validatePassword(formData.password)) {
      setPasswordError("Minimum length 8 characters");
    } else {
      setPasswordError("");
    }

    const isFormValid =
      formData.name !== "" &&
      emailError === "" &&
      passwordError === "" &&
      formData.password !== "" &&
      formData.confirmPassword !== "" &&
      formData.password === formData.confirmPassword;

    setIsButtonDisabled(!isFormValid);
  }, [formData, emailError, passwordError]);

  return (
    <Wrapper>
      <CenteredColumnBox>
        <Logo />
        <CustomHeadingTitle title="Sign Up" />
        <form onSubmit={handleSubmit}>
          <CustomTextField
            label="Name"
            name="name"
            value={formData.name}
            handleChange={handleChange}
            required
          />
          <CustomTextField
            label="Email"
            name="email"
            value={formData.email}
            handleChange={handleChange}
            type="email"
            required
            error={!!emailError}
            helperText={emailError}
          />
          <CustomTextField
            label="Password"
            name="password"
            value={formData.password}
            handleChange={handleChange}
            type={showPassword ? "text" : "password"}
            required
            error={!!passwordError}
            helperText={passwordError}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <CustomTextField
            label="Confirm password"
            name="confirmPassword"
            value={formData.confirmPassword}
            handleChange={handleChange}
            type={showPassword ? "text" : "password"}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <CustomSubmitButton text="Sign Up" isDisabled={isButtonDisabled} />
        </form>

        <Box
          sx={{
            my: 3,
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}>
          <Typography variant="body2">Or</Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            gap: "1rem",
            display: "flex",
            flexDirection: "column",
          }}>
          <SocialButtons
            text="SignUp With Gmail"
            type="submit"
            icon={<EmailIcon />}
          />
          <SocialButtons
            text="SignUp With Facebook"
            type="submit"
            icon={<FacebookIcon />}
          />
          <SocialButtons
            text="SignUp With Github"
            type="submit"
            icon={<GitHubIcon />}
          />
          <Box sx={{ display: "flex", gap: "0.3rem" }}>
            <Typography>Have an Account?</Typography>
            <MuiLink href="/login" component={NextLink}>
              Log in
            </MuiLink>
          </Box>
          <TermsSection />
        </Box>
      </CenteredColumnBox>
    </Wrapper>
  );
}
