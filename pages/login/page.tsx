import React, { useState } from "react";
import { Person, Lock } from "@mui/icons-material";
import { Button } from "@mui/material";
import LoginButton from "./components/login_button";
import FooterButtons from "./components/footer_buttons";
import LoginContent from "./components/login_content";

function Login(): React.ReactElement {
  var [pass, setPass] = useState<string>("");
  var [user, setUser] = useState<string>("");
  return (
    <div
      style={{
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%",
        background: "#0C326F",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          background: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "28px 24px",
        }}
      >
        <div
          style={{
            paddingBottom: "20px",
            color: "black",
            fontSize: "29.3px",
            fontFamily: "Rawline",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          Acesso ao sistema
        </div>
        <LoginContent
          label="Número de Matrícula"
          footer="Digite somente números"
          placeholder="Ex. 999 999 999 99"
          setData={setUser}
          icon={Person}
        />
        <div style={{ height: "24px" }}></div>
        <LoginContent
          label="Senha"
          footer="Digite sua senha de segurança"
          placeholder=""
          setData={setPass}
          icon={Lock}
        />
        <Button
          sx={{
            topMargin: "8px",
            color: "#1351B4",
            fontSize: "11.67px",
            fontFamily: "Rawline",
            fontWeight: "700",
            textDecoration: "underline",
            wordWrap: "break-word",
            justifyContent: "flex-start",
          }}
        >
          Esqueceu a senha?
        </Button>
        <LoginButton 
          pass={pass} 
          user={user} 
        />
      </div>
      <FooterButtons />
    </div>
  );
}

export default Login;
