"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import {
  TextField,
  Button,
  Box,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

interface SignUpFormInputs {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset } = useForm<SignUpFormInputs>();

  const handleSignUp: SubmitHandler<SignUpFormInputs> = async (data) => {
    try {
      const res = await axiosPublic.post("/signup/api", data);
      if (res.status === 200) {
        reset();
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="container mx-auto px-5">
      <Box
        display="grid"
        gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
        gap={4}
        py={4}
      >
        {/* Image Section */}
        <Box display="flex" justifyContent="center" alignItems="center">
          <Image
            src="/assets/images/login/login.svg"
            alt="Sign Up Illustration"
            height={540}
            width={540}
          />
        </Box>

        {/* Form Section */}
        <Box
          component="form"
          onSubmit={handleSubmit(handleSignUp)}
          border={1}
          borderRadius={2}
          p={4}
          boxShadow={2}
        >
          <Typography variant="h4" textAlign="center" gutterBottom>
            Sign Up Now
          </Typography>

          {/* Name Input */}
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register("name", { required: "Name is required" })}
          />

          {/* Email Input */}
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            {...register("email", { required: "Email is required" })}
          />

          {/* Password Input */}
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type={showPassword ? "text" : "password"}
            {...register("password", { required: "Password is required" })}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
          >
            Sign Up
          </Button>

          {/* Additional Links */}
          <Box textAlign="center" mt={4}>
            <Typography variant="body2">
              Already have an account?{" "}
              <Link
                href="/login"
                style={{ color: "#1976d2", textDecoration: "none" }}
              >
                Login
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default SignUp;
