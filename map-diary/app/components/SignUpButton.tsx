import { Button } from "@mui/material";
import React from "react";

const SignUpButton: React.FC = () => {
  return (
    <Button
      variant="contained"
      //href="http://localhost:3001/api/auth/google/login"
      href="/dashboard"
    >
      Sign up with Google
    </Button>
  );
};

export default SignUpButton;
