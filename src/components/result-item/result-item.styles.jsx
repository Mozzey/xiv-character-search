import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ResultItemStyled = styled.li`
  display: grid;
  grid-template-columns: max-content 1fr;
  border: 1px solid #2544a6;
  border-radius: 5px;
`;

export const ResultTextContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ResultItemLink = styled(Link)`
  text-decoration: none;
  color: #2544a6;
  font-weight: bolder;
`;
