import { Button } from "@mui/material";
import React from "react";

const FooterButtons = () => {
  const rowStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "430px",
    marginTop: "10px",
  };

  const buttonStyle = {
    color: "white",
    fontSize: "11.67px",
    fontFamily: "Rawline",
    fontWeight: "600",
  };

  return (
    <div style={rowStyle}>
      <Button style={buttonStyle}>Política de privacidade</Button>
      <Button style={buttonStyle}>Precisa de ajuda?</Button>
    </div>
  );
};

export default FooterButtons;
