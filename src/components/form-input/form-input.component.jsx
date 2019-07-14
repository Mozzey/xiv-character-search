import React from 'react';

import { FormInputStyled } from './form-input.styles';

const FormInput = ({ onInputChange, ...otherProps }) => (
  <FormInputStyled onChange={onInputChange} {...otherProps} />
);

export default FormInput;
