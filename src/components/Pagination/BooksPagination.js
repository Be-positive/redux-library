import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Pagination } from 'react-bootstrap';


class BooksPagination extends Component {
  constructor(props) {
    super(props);
    this.state = { activePage: 1 };
  }

  handleSelect(eventKey) {
    this.setState({
      activePage: eventKey
    });
  }


  render(){
    return(
      <Pagination
        bsSize="small"
        items={this.props.books.totalItems}
        activePage={this.state.activePage}
        onSelect={this.handleSelect} />
    )
  }
}

function mapStateToProps(state){
  return {
    books: state.books.all
  }
}


export default connect(mapStateToProps, actions)(BooksPagination);
