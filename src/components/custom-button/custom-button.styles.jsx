import styled, { css } from 'styled-components';

const searchButtonStyles = css`
  background: #048de2;
  color: #ffffff;
`;

const baseButtonStyles = css`
  color: #ffffff;
  background: #000000;
`;

const getButtonStyles = props => {
  if (props.isSearchButton) {
    return searchButtonStyles;
  }

  return baseButtonStyles;
};

export const CustomButtonStyled = styled.button`
  min-width: 100px;
  width: auto;
  height: 40px;
  letter-spacing: 0.5px;
  line-height: 40px;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border: none;
  ${getButtonStyles}
`;
