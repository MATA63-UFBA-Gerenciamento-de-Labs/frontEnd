import { Button, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import axios from "axios";

const baseURL = "https://back-end-orcin-theta.vercel.app";

const loginPath = "/login?cpf={}&password={}";

function login(
  user: string,
  pass: string,
  router: AppRouterInstance,
  setLoading: Function,
): void {
  const fullURL = `${baseURL}${loginPath
    .replace("{}", user)
    .replace("{}", pass)}`;

  axios
    .get(fullURL)
    .then((response) => {
      setLoading(false);

      const tipo = response.data.response.tipo;

      if (tipo === "tecnico") {
        return router.push("/tela-tecnico");
      }
      if (tipo === "aluno") {
        return router.push("/tela-aluno");
      }

      if (tipo === "professor") {
        return router.push("/tela-professor");
      }

      alert("Matrícula e/ou senha incorretas");
    })
    .catch((error) => {
      const status = error.response.status;
      if (status === 401) {
        return alert("Matrícula e/ou senha incorretas");
      }

      alert("Algum erro aconteceu. Por favor, tente novamente mais tarde.");
    });
}

const LoginButton = ({ user, pass }: { user: string; pass: string }) => {
  const [loading, setLoading] = useState<boolean>(false);

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

  return loading ? (
    <CircularProgress></CircularProgress>
  ) : (
    <Button
      style={buttonStyle}
      onClick={() => login(user, pass, router, setLoading)}
      disabled={loading}
    >
      Entrar
    </Button>
  );
};

export default LoginButton;
