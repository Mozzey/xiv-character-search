import React from 'react';

import { SearchContainerStyled } from './search-container.styles';

const SearchContainer = ({ children }) => (
  <SearchContainerStyled>{children}</SearchContainerStyled>
);
export default SearchContainer;
