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
      <Link to="/" style={{ display: 'inline-flex' }}>
        <img src={Avatar} alt="Avatar" />
      </Link>
      <ResultTextContainer>
        <ResultItemLink to="/">{Name}</ResultItemLink>
        <p style={{ marginTop: '20px' }}>{Server}</p>
      </ResultTextContainer>
    </ResultItemStyled>
  );
};

export default ResultItem;
