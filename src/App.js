import React from 'react';

import SearchForm from './components/search-form/search-form.component';

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', margin: '50px 0' }}>
        FFXIV Character Search
      </h1>
      <SearchForm />
    </div>
  );
}

export default App;
