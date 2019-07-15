import React from 'react';
import { connect } from 'react-redux';

import ResultItem from '../result-item/result-item.component';

import { ResultListStyled } from './result-list.styles';

const ResultList = ({ characters }) => {
  const renderResults = () => {
    return (
      characters &&
      characters.map(character => (
        <ResultItem key={character.ID} character={character} />
      ))
    );
  };

  return <ResultListStyled>{renderResults()}</ResultListStyled>;
};

const mapStateToProps = ({ search: { characters } }) => ({
  characters,
});

export default connect(mapStateToProps)(ResultList);
