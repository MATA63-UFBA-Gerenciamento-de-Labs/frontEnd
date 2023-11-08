import React from "react";
import { InputAdornment, TextField, TextFieldProps } from "@mui/material";
import { Visibility, SvgIconComponent } from "@mui/icons-material";

type LoginInputProps = TextFieldProps & {
  icon: SvgIconComponent;
};

export function LoginInput(props: LoginInputProps): React.ReactElement {
  const textFieldProps = { ...props };
  return (
    <TextField
      {...textFieldProps}
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
        endAdornment: (
          <InputAdornment position="end" sx={{ cursor: "pointer" }}>
            <Visibility sx={{ height: "16px", color: "#1351B4" }} />
          </InputAdornment>
        ),
      }}
      variant="outlined"
    />
  );
}
