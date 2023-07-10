import { Button } from "@mui/material";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <h1>Sign Up</h1>
      <Button variant="contained" href="/dashboard">
        Bypass
      </Button>
    </>
  );
};

export default Home;
