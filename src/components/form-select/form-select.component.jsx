import React from 'react';

import { FormSelectStyled } from './form-select.styles';

const FormSelect = ({
  children,
  onSelectChange,
  useOptions,
  options = [],
  ...otherProps
}) => {
  return (
    <FormSelectStyled onChange={onSelectChange} {...otherProps}>
      <option key="-1" name="empty-placeholder" id="empty-placeholder">
        Select a server
      </option>
      {useOptions && Array.isArray(options)
        ? options.map((providedOption, i) => (
            <option key={i}>{providedOption}</option>
          ))
        : children}
    </FormSelectStyled>
  );
};

export default FormSelect;
