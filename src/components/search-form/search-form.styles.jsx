import styled from 'styled-components';

export const SearchFormStyled = styled.form`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  justify-items: center;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;

  @media screen and (max-width: 580px) {
    grid-auto-flow: row-reverse;
  }
`;
