import React from "react";
import { InputWrapper, Input as InputComponent } from "./styles";

const InputField = ({ label, onChange, ...rest }) => (
  <InputWrapper>
    {label && <label>{label}</label>}
    <InputComponent {...rest} onChange={e => onChange(e.target.value)} />
  </InputWrapper>
);

export default InputField;
