"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  Button,
  Checkbox,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Image from "next/image";
import { GrClose } from "react-icons/gr";


export default function LoginModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      scroll="paper"
      slotProps={{
        paper: {
          className: "rounded-xl border border-gray-200 shadow-lg",
          sx: {
            width: "390px",
            height: "87vh",
            margin: 0,
            "@media (min-width: 1024px)": {
              width: "450px",
              height: "100vh",
              overflowY: "hidden",
            },
          },
        },
        container: {
          sx: {
            margin: 2,
            alignItems: "flex-start",
            "@media (min-width: 1024px)": {
              alignItems: "center",
            },
          },
        },
        backdrop: {
          className: "backdrop-blur-sm bg-black/30",
        },
      }}
    >
      <DialogContent
        className="relative"
        sx={{
          paddingX: "2rem",
          paddingY: "2rem",
          overflowY: "auto",
          height: "100%",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <IconButton
          onClick={onClose}
          aria-label="close"
          sx={{
            position: "absolute",
            top: 12,
            left: 12,
            color: "gray",
            zIndex: 10,
            bgcolor: "background.paper",
            "&:hover": { bgcolor: "grey.200" },
            boxShadow: 1,
            width: 32,
            height: 32,
          }}
        >
          <GrClose />
        </IconButton>

        <div className="flex justify-between items-center my-4">
          <div className="flex items-center justify-center space-x-2">
            <Image
              src="/logoTrade.png"
              alt="logoTrade"
              width={20}
              height={20}
              className="rounded-full"
            />
            <Typography
              variant="h5"
              sx={{ fontWeight: "600", color: "#1F2937" }}
            >
              TradeUp
            </Typography>
          </div>
          <Button
            variant="outlined"
            sx={{
              color: "#F97316",
              border: "2px solid #F97316",
              textTransform: "none",
              borderRadius: "9999px",
              fontWeight: "bold",
            }}
          >
            Register
          </Button>
        </div>

        <Typography
          variant="h4"
          sx={{
            fontWeight: "600",
            marginBottom: "0.5rem",
            textAlign: "center",
            color: "#1F2937",
          }}
        >
          Sign in
        </Typography>

        <Typography className="mb-6 text-gray-600" sx={{ textAlign: "center" }}>
          Welcome Back! Sign in to manage your trades and explore new deals.
        </Typography>

        <TextField
          label="Email"
          variant="outlined"
          placeholder="Enter email"
          fullWidth
          size="small"
          sx={{ marginY: "1rem" }}
        />

        <TextField
          label="Password"
          variant="outlined"
          placeholder="Enter password"
          type={showPassword ? "text" : "password"}
          fullWidth
          size="small"
          sx={{ marginBottom: "1rem" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <Checkbox
              defaultChecked
              sx={{ padding: 0, marginRight: "0.5rem" }}
            />
            <Typography sx={{ fontSize: "0.9rem" }}>Remember me</Typography>
          </div>
          <Typography
            className="text-orange-500 cursor-pointer"
            sx={{ fontSize: "0.9rem", fontWeight: "500" }}
          >
            Forgot password?
          </Typography>
        </div>

        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#F97316",
            "&:hover": { backgroundColor: "#ea580c" },
            textTransform: "none",
            borderRadius: "9999px",
            height: "48px",
            fontSize: "1rem",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
          className=" text-white py-2"
        >
          Sign in
        </Button>

        <Divider sx={{ paddingY: "0.5rem" }}>OR</Divider>

        <Button
          variant="outlined"
          fullWidth
          startIcon={
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google"
              width={20}
              height={20}
              style={{ objectFit: "contain" }}
            />
          }
          sx={{
            textTransform: "none",
            borderRadius: "9999px",
            borderColor: "#dadce0",
            height: "48px",
            color: "gray",
            fontWeight: "bold",
            marginY: "1rem",
            "&:hover": {
              borderColor: "#dadce0",
              backgroundColor: "#f8f9fa",
            },
          }}
        >
          Sign in with Google
        </Button>

        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#1877F2",
            "&:hover": { backgroundColor: "#166FE5" },
            textTransform: "none",
            borderRadius: "9999px",
            height: "48px",
            marginBottom: "1rem",
            fontSize: "0.9rem",
            fontWeight: "bold",
          }}
          startIcon={
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
              alt="Facebook"
              className="w-5 h-5"
            />
          }
          className=" text-white"
        >
          Sign in with Facebook
        </Button>

        <Typography
          className="text-center text-gray-600"
          sx={{ fontSize: "0.9rem" }}
        >
          Don&apos;t have an account?{" "}
          <span className="text-orange-500 font-medium cursor-pointer">
            Sign Up here
          </span>
        </Typography>
      </DialogContent>
    </Dialog>
  );
}
