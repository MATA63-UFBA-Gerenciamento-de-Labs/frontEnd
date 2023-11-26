import { Button } from "@mui/material";
import React from "react";
import { useRouter } from 'next/navigation';
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

function login( user: string, pass:string, router: AppRouterInstance ): void{
  
  if( user[0] == "0" && user[1] == "0" && pass[0] == "0" && pass[1] == "0" ){
    router.push("/tela-tecnico")
    return
  }

  if( user[0] == "1"  && user[1] == "1" && pass[0] == "1" && pass[1] == "1"){
    router.push("/tela-professor")
    return
  }

  if( user[0] == "2" && user[1] == "2" && pass[0] == "2" && pass[1] == "2" ){
    router.push("/tela-aluno")
    return
  }

  alert("Matrícula e/ou senha incorretas")
  
}



const LoginButton = ( { user, pass } : { user: string, pass: string }) => {
  const router = useRouter();
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

  return <Button style={buttonStyle} onClick={ () => login( user, pass, router ) }>Entrar</Button>;
};

export default LoginButton;
