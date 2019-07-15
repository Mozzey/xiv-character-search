import styled from 'styled-components';

export const SearchContainerStyled = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  align-content: center;
  margin-left: 10px;

  @media screen and (max-width: 580px) {
    grid-auto-flow: row;
  }
`;
