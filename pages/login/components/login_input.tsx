import React from "react";
import { InputAdornment, TextField, TextFieldProps } from "@mui/material";
import {
  Visibility,
  SvgIconComponent,
  VisibilityOff,
} from "@mui/icons-material";
import { Lock } from "@mui/icons-material";

type LoginInputProps = TextFieldProps & {
  icon: SvgIconComponent;
  setData: (value: string | ((prevVar: string) => string)) => void;
  isPassword: boolean;
};

function LoginInput(props: LoginInputProps): React.ReactElement {
  props = {
    icon: props.icon || Lock,
    setData: props.setData,
    isPassword: props.isPassword,
  };

  const [showInputValue, setShowInputValue] = React.useState(!props.isPassword);

  const toggleShowInput = () => {
    setShowInputValue(!showInputValue);
  };

  const eyeIcon = showInputValue ? (
    <Visibility
      sx={{ height: "16px", color: "#1351B4" }}
      onClick={toggleShowInput}
    />
  ) : (
    <VisibilityOff
      sx={{ height: "16px", color: "#1351B4" }}
      onClick={toggleShowInput}
    />
  );

  const textFieldProps = { ...props };
  return (
    <TextField
      {...textFieldProps}
      type={showInputValue ? "text" : "password"}
      InputProps={{
        sx: {
          borderRadius: "4px",
          paddingLeft: "16px",
          height: "40px",
          width: "384px",
          marginBottom: "8px",
          marginTop: "4px",
        },
        autoComplete: "off",
        startAdornment: (
          <InputAdornment position="start">
            <props.icon />
          </InputAdornment>
        ),
        endAdornment: props.isPassword ? (
          <InputAdornment position="end" sx={{ cursor: "pointer" }}>
            {eyeIcon}
          </InputAdornment>
        ) : null,
      }}
      variant="outlined"
      onChange={(e) => props.setData(e.currentTarget.value)}
    />
  );
}

export default LoginInput;
