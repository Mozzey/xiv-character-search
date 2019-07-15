import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ResultItemStyled = styled.li`
  display: grid;
  grid-template-columns: max-content 1fr;
  border: 1px solid #2544a6;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);

  &:hover {
    box-shadow: 2px 2px 5px #2544a6;
  }
`;

export const ResultTextContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ResultItemLink = styled(Link)`
  position: absolute;
  display: block;
  text-align: center;
  width: 100%;
  height: 100%;
  line-height: 5rem;
  text-decoration: none;
  color: #2544a6;
  font-weight: bolder;
`;
