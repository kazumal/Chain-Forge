// src/components/LoginRegister.js
import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";

function LoginRegister() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // User authentication and authorization関数の実装
  };

  const handleRegister = () => {
    // User authentication and authorization関数の実装
  };

  return (
    <div>
      <Typography variant="h4">Login</Typography>
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin}>Login</Button>
      <Button onClick={handleRegister}>Register</Button>
    </div>
  );
}

export default LoginRegister;
