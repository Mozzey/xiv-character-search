import React, { Component } from 'react';

import { connect } from 'react-redux';

import { searchCharacter } from '../../redux/search/search.actions';

class Search extends Component {
  componentDidMount() {
    this.props.searchCharacter('Mozzey Magick');
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <p>Search</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    characterSearchResults: state.characterSearchResults,
  };
};

export default connect(
  mapStateToProps,
  {
    searchCharacter,
  }
)(Search);
