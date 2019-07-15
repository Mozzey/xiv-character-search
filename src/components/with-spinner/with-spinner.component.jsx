import React from 'react';

import { SpinnerContainer, Spinner } from './with-spinner.styles';

const WithSpinner = WrappedComponent => ({ loading, ...otherProps }) => {
  return loading ? (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
