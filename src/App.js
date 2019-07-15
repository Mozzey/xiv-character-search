import React, { Component } from 'react';

import { connect } from 'react-redux';

import SearchForm from './components/search-form/search-form.component';
import ResultList from './components/result-list/result-list.component';
import WithSpinner from './components/with-spinner/with-spinner.component';

const ResultListWithSpinner = WithSpinner(ResultList);

const App = ({ loading }) => (
  <div className="App">
    <h1 style={{ textAlign: 'center', margin: '50px 0' }}>
      FFXIV Character Search
    </h1>
    <SearchForm />
    <ResultListWithSpinner loading={loading} />
  </div>
);

const mapStateToProps = ({ search: { loading } }) => ({
  loading,
});

export default connect(mapStateToProps)(App);
