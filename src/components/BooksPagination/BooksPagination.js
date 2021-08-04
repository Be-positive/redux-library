import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Pagination } from 'react-bootstrap';
import './Pagination.css';


class BooksPagination extends Component {
  
  constructor(props) {
    /* console.log(props); */
    super(props);
    this.state = { activePage: 1 };
      
  }

  handleSelect(eventKey) {
    this.setState({activePage: eventKey});
  }

  componentDidUpdate(prevProps, prevState){        
    if(this.state.activePage !== prevState.activePage){
      console.log(this)     
      this.props.fetchBooks(
        !!this.props.searchQuery ? this.props.searchQuery : this.props.lastSearchQuery,  /* this.state.maxResult, */ this.props.resultsPerPage, /* this.props.startIndex, */ this.state.activePage * this.props.resultsPerPage, this.props.orderBy,
        //здесь порядок имеет значение, а так же обозначение, некоторые, вроде maxResults не стоит обозначать!
      )      
    }
  }

  render(){ 
    console.log(this.props)     
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
        onSelect={this.handleSelect.bind(this)}        
        />

    )
  }
}

function mapStateToProps(state, props){  
  return {
    books: state.books.all,
    lastSearchQuery: state.books.lastSearchQuery,
    orderBy: props.orderBy,    

  }
}


export default connect(mapStateToProps, actions)(BooksPagination);
