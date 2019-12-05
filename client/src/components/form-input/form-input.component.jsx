import React from "react";

import { GroupContainer, FormInputContainer, FormInputLabel } from "./form-input.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <GroupContainer>
    <FormInputContainer
      type="text"
      onChange={handleChange}
      {...otherProps}
    />
    {label ? (
      <FormInputLabel isShrinkTrue={otherProps.value.length}>{label}</FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;
