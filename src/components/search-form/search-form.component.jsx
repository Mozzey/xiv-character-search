import React, { Component } from 'react';

import { connect } from 'react-redux';
import {
  searchCharacter,
  getServerList,
} from '../../redux/search-form/search-form.actions';

import SearchContainer from '../search-container/search-container.component';
import FormInput from '../form-input/form-input.component';
import FormSelect from '../form-select/form-select.component';
import CustomButton from '../custom-button/custom-button.component';

import { SearchFormStyled } from './search-form.styles';

class SearchForm extends Component {
  state = {
    characterName: '',
    characterServer: '',
  };

  componentDidMount() {
    // populate the server options from api
    this.props.getServerList();
  }

  onFormSubmit = e => {
    e.preventDefault();

    const { characterName, characterServer } = this.state;
    this.props.searchCharacter(characterName, characterServer);
  };

  onInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { servers } = this.props.searchResults;

    console.log(this.props.searchResults.characters);
    return (
      <SearchFormStyled onSubmit={this.onFormSubmit}>
        <FormSelect
          name="characterServer"
          onChange={this.onInputChange}
          options={servers}
          useOptions
        />
        <SearchContainer>
          <FormInput
            type="text"
            name="characterName"
            placeholder="Search Characters"
            onInputChange={this.onInputChange}
          />
          <CustomButton type="submit" isSearchButton>
            Search
          </CustomButton>
        </SearchContainer>
      </SearchFormStyled>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchResults: state.searchResults,
  };
};

export default connect(
  mapStateToProps,
  {
    searchCharacter,
    getServerList,
  }
)(SearchForm);
