import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import BookDetail from './BookDetail/BookDetail';
import './BooksShow.css'
/* import BookRow from '../BookList/BookRow'; */
/* import { Row } from 'react-bootstrap'; */
/* import SearchBar from '../SearchBar/SearchBar';
import { browserHistory } from 'react-router'; */


class BooksShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props){
    super(props);

    this.state = {bookItem: ''}
  }



  componentDidMount() {
    // needs refactoring
    this.setState({bookItem: this.props.books.items ? this.props.books.items[this.props.location.pathname.slice(1) - 1] : '' })
  }


  render(){
    return(    
      <main className='bookDescribtion'>
        {/* <SearchBar component={browserHistory}/> */}        
        <div className='bookInfo'>
          <div>            
              {!!this.state.bookItem &&
              <BookDetail book={this.state.bookItem} bookShow={true}/>}            
          </div>
        </div>
        <div className='backBtn' onClick={(e) => e.preventDefault()}>          
            <Link className='linkBtn' to='/'> Back to Homepage </Link>
        </div>
      </main>
    )
  }
}

function mapStateToProps(state){
  return {
    books: state.books.all    
  }
}


export default connect(mapStateToProps, null)(BooksShow);
