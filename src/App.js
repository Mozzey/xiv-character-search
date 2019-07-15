import React, { Component } from 'react';

import { connect } from 'react-redux';

import SearchForm from './components/search-form/search-form.component';
import ResultList from './components/result-list/result-list.component';
import WithSpinner from './components/with-spinner/with-spinner.component';

const ResultListWithSpinner = WithSpinner(ResultList);

const App = ({ loading }) => (
  <div className="App">
    <h1 style={appHeaderCss}>FFXIV Character Search</h1>
    <SearchForm />
    <ResultListWithSpinner loading={loading} />
  </div>
);

const mapStateToProps = ({ search: { loading } }) => ({
  loading,
});

const appHeaderCss = {
  display: 'flex',
  height: '10vh',
  color: '#FFFFFF',
  background: '#2544a6',
  justifyContent: 'center',
  alignItems: 'center',
};

export default connect(mapStateToProps)(App);
