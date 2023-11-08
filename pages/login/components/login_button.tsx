import { Button } from "@mui/material";
import React from "react";

const LoginButton = () => {
  const buttonStyle = {
    width: "384px",
    height: "39px",
    paddingLeft: "24px",
    paddingRight: "24px",
    paddingTop: "8px",
    paddingBottom: "8px",
    background: "#1351B4",
    borderRadius: "20px",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    display: "inline-flex",
    marginTop: "24px",
    color: "white",
    fontSize: "16.8px",
    fontFamily: "Rawline",
    fontWeight: "600",
  };

  return <Button style={buttonStyle}>Entrar</Button>;
};

export default LoginButton;
