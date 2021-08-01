import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Grid, Row, Table, Col } from 'react-bootstrap';
import BookRow from '../BookList/BookRow';
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
      <Grid>
        {/* <SearchBar component={browserHistory}/> */}        
        <Row>
          <Table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Description</th>
                <th>Authors</th>
                <th>Date of Publication</th>
              </tr>
            </thead>
            <tbody>
              {!!this.state.bookItem &&
              <BookRow book={this.state.bookItem} bookShow={true}/>}
            </tbody>
          </Table>
        </Row>
        <Row>
          <Col xs={6} xsOffset={6}>
            <Link to='/'>Back</Link>
          </Col>
        </Row>
      </Grid>
    )
  }
}

function mapStateToProps(state){
  return {
    books: state.books.all
  }
}


export default connect(mapStateToProps, null)(BooksShow);
