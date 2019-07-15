import React from 'react';
import { Link } from 'react-router-dom';

import {
  ResultItemStyled,
  ResultTextContainer,
  ResultItemLink,
} from './result-item.styles';

const ResultItem = ({ character }) => {
  const { Avatar, ID, Name, Server } = character;

  return (
    <ResultItemStyled key={ID}>
      <img src={Avatar} alt="Avatar" />
      <ResultTextContainer>
        <h3>
          <ResultItemLink to="/">{Name}</ResultItemLink>
        </h3>
        <p>{Server}</p>
      </ResultTextContainer>
    </ResultItemStyled>
  );
};

export default ResultItem;
