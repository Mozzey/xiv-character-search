import styled from 'styled-components';

export const FormSelectStyled = styled.select`
  height: 40px;
  line-height: 40px;
  min-width: 100px;
  font-size: 1rem;
  color: #777777;

  option {
    color: inherit;
    line-height: 20px;

    &:nth-of-type(1) {
      color: #000000;
      font-weight: bolder;
    }
  }

  @media screen and (max-width: 580px) {
    margin-top: 0.5rem;
  }
`;
