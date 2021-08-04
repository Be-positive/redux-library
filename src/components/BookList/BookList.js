import React, { Component } from 'react';
import { connect } from 'react-redux';
/* import { Grid, Row, Table } from 'react-bootstrap'; */
import BookRow from './BookRow';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './BookList.css'


class BookList extends Component {
  render(){
    const searchResults = this.props.books.items;

    if(this.props.error) return (<ErrorMessage />)
    if(!searchResults) return null;
    if(this.props.isFetching) return (<Spinner />);

    const bookDetails = searchResults.map((book, index) => {
      return (<BookRow key={`result_${index + 1}`} resultNumber={index + 1} book={book}/>);
    });
    console.log(this.props.orderBy)

    return(
      <main>                            
        {bookDetails}         
      </main>
    )
  }
}

function mapStateToProps(state, props){
  return {
    books: state.books.all,
    isFetching: state.books.isFetching,
    error: state.books.error,
    orderBy: props.orderBy,
  }
}


export default connect(mapStateToProps, null)(BookList);
