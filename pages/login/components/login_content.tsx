import { SvgIconComponent } from "@mui/icons-material";
import React from "react";
import { LoginInput } from "./login_input";

type LoginContentProps = {
  label: string;
  footer: string;
  icon: SvgIconComponent;
  placeholder: string;
};

export function LoginContent(props: LoginContentProps): React.ReactElement {
  return (
    <div
      style={{
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        display: "inline-flex",
      }}
    >
      <div
        style={{
          color: "black",
          fontSize: 14,
          fontFamily: "Rawline",
          fontWeight: "600",
          wordWrap: "break-word",
        }}
      >
        {props.label}
      </div>
      <LoginInput icon={props.icon} placeholder={props.placeholder} />
      <div
        style={{
          color: "black",
          fontSize: 14,
          fontFamily: "Rawline",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        {props.footer}
      </div>
    </div>
  );
}
