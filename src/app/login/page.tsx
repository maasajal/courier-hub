"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Box,
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useRouter } from "next/navigation";

interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormInputs>();
  const router = useRouter();

  const handleLogin: SubmitHandler<LoginFormInputs> = async (data) => {
    const { email, password } = data;
    const resp = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (resp?.status === 200) {
      router.push("/");
    }
  };

  return (
    <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-12 py-12">
      <div className="w-full">
        <p>no images</p>
      </div>
      <div className="border-2 p-10">
        <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
          <Typography variant="h4" textAlign="center" gutterBottom>
            Sign In Now
          </Typography>

          {/* Email Input */}
          <Box className="form-control">
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              {...register("email", { required: "Email is required" })}
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ""}
            />
          </Box>

          {/* Password Input */}
          <Box className="form-control relative">
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              type={showPassword ? "text" : "password"}
              {...register("password", { required: "Password is required" })}
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ""}
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
          </Box>

          {/* Submit Button */}
          <Box className="form-control">
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Sign In
            </Button>
          </Box>

          {/* Additional Links */}
          <Box textAlign="center" py={3}>
            <Typography variant="body2">
              Don't have an account?{" "}
              <Link href="/signup" style={{ color: "#1976d2" }}>
                Sign Up
              </Link>
            </Typography>
          </Box>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
