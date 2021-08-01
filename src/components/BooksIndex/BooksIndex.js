import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import BookList from '../BookList/BookList';


class BooksIndex extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <BookList />
      </div>
    );
  }
}

export default BooksIndex;
