import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Pagination } from 'react-bootstrap';
import './Pagination.css';


class BooksPagination extends Component {
  constructor(props) {
    super(props);
    this.state = { activePage: 1 };
  }

  handleSelect(eventKey) {
    this.setState({activePage: eventKey});
  }

  componentDidUpdate(prevProps, prevState){    
    if(this.state.activePage !== prevState.activePage){
      this.props.fetchBooks(
        !!this.props.searchQuery ? this.props.searchQuery : this.props.lastSearchQuery, /* `${this.state.book} ${this.state.subject}`, this.state.orderBy, */ this.props.resultsPerPage, this.state.activePage * this.props.resultsPerPage
      );
    }
  }

  render(){    
    return(
      <Pagination
        prev
        next
        first
        last
        ellipsis
        boundaryLinks
        items={Math.ceil(this.props.books.totalItems / this.props.resultsPerPage)}
        maxButtons={5}
        bsSize="small"
        activePage={this.state.activePage}
        onSelect={this.handleSelect.bind(this)} />

    )
  }
}

function mapStateToProps(state){
  return {
    books: state.books.all,
    lastSearchQuery: state.books.lastSearchQuery,
    orderBy: state.oderBy,
  }
}


export default connect(mapStateToProps, actions)(BooksPagination);
