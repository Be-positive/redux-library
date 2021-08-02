import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../../actions';
import BooksPagination from '../BooksPagination/BooksPagination';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {subject: "", book: '',maxResults: 4, startIndex: 0, orderBy:"relevance"};
  }

  handleChange(event) {
    this.setState({ book: event.target.value })    
  }

  handleDisplayQuantityChange(e) {
    this.setState({ maxResults: e.target.value })        
  }

/*   handleDisplayIndexChange(e){
    this.setState({ startIndex: e.target.value })   
  } */
  handleDisplaySortingChange(e){
    this.setState({ orderBy: e.target.value })   
  }

  handleDisplayCategoryChange(e){
    this.setState({ subject: e.target.value})    
  }     

  componentDidUpdate(prevProps, prevState){    
    if(this.state.maxResults !== prevState.maxResults){
      this.handleSubmit(event);
    }   
    else if(this.state.startIndex !== prevState.startIndex){
      this.handleSubmit(event);
    }    
    else if(this.state.subject !== prevState.subject){
      this.handleSubmit(event);
    }  
    else if(this.state.orderBy !== prevState.orderBy){
      this.handleSubmit(event);
    }  
          
  }
  /* componentUpdated(prevProps, prevState){
    if(this.state.orderBy !== prevState.orderBy){
      this.handleSubmit(event);
    }
  } */

  /* changeSorter(e){
    if(this.state.orderBy === 'relevance'){
      this.state.orderBy.setState('newest')
      console.log(this.state.orderBy)
    }
  } */

  handleSubmit(event) {
    event.preventDefault();
    if(!!this.state.book){
      this.props.fetchBooks( `${this.state.book} ${this.state.subject}`, this.state.maxResults, this.state.startIndex, this.state.orderBy,);
    }
  }


  render(){
    const books = this.props.books;
    const displayQuantityOptions = _.range(4, 33, 4).map(quantity => (<option key={quantity} value={quantity}>{quantity}</option>))
    /* const displayQuantityOptions = <option key='30' value='30'>30</option> */
    
    /* const[select, setSelect] = useState(true)   */ 
    /* const changeSorter = (e) => {
      //e.preventDefault()
      //setState({ orderBy: 'newest'})
      //select = this.state.orderBy
      
      console.log(this.state.orderBy)
      console.log(e)
    }  */
    return(
      <nav className='navbar'>
        
        <div className='upperForm'>
          <h1>Search for books</h1>
          <img src="https://www.stylist.co.uk/images/app/uploads/2019/12/17162852/the-end-of-a-book-1268x845.jpeg?w=1200&h=1&fit=max&auto=format%2Ccompress" alt="booksImg" width='1300px' height='800px' />
          <div id='booksForm'>            
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div>
                <div className='submitForm'>
                  <input type='text' value={this.state.book} onChange={this.handleChange.bind(this)} placeholder="Search" />
                  <button type="submit"> <i className="fas fa-book-open"></i></button>
                  
                  
                </div>

                <div className='sortForm'>                  
                  {!!books.totalItems && !!this.state.book &&
                    <div>
                      <label htmlFor="bookQuant">Books per page</label>
                      <select  id='bookQuant' value={this.state.maxResults} onChange={this.handleDisplayQuantityChange.bind(this)}>
                        {displayQuantityOptions}
                      </select>             
                    </div>
                  }               
                  {/* {!!books.totalItems && !!this.state.book &&
                    <div>                      
                      <button  id='bookQuant' value={this.state.maxResults} onChange={this.handleDisplayQuantityChange.bind(this)}>
                        Load more
                        
                      </button>             
                    </div>
                  } */}               
                                                                                                                                                                                   
                  { !!books.totalItems && !!this.state.book &&
                  <div>
                    <label htmlFor="sorting">Sorting By</label>
                    <select id='sorting' value={this.state.orderBy} onChange={this.handleDisplaySortingChange.bind(this)} className='sorting' name="select">             
                      <option value="relevance">relevance</option>
                      <option value="newest" >newest</option>            
                    </select>
                  </div>
                  } 

                  { !!books.totalItems && !!this.state.book &&
                  <div>
                    <label htmlFor="categories">Categories</label>
                    <select id='categories' value={this.state.subject} onChange={this.handleDisplayCategoryChange.bind(this)} className='sorting' name="filtoring">             
                      <option value="">all</option>
                      <option value="art" >art</option>            
                      <option value="biograpthy" >biograpthy</option>            
                      <option value="computers" >computers</option>            
                      <option value="history">history</option>            
                      <option value="medical">medical</option>            
                      <option value="poetry">poetry</option>            
                    </select>
                  </div>
                  }
                </div>             
                                
              </div>
            </form>            
          </div>      
                   
                 
        </div>
        <div className='resultsQuant'>
            <a href="#"> {books.totalItems ? `Found ${books.totalItems} results`: '' }</a>
        </div> 
        {this.props.books && !!this.state.book &&
          <div className='pageSlots'>
            <BooksPagination /* onChange={this.handleDisplayIndexChange.bind(this)} */ searchQuery={`${this.state.book} ${this.state.subject}`} resultsPerPage={this.state.maxResults} startIndex={this.state.maxResults} orderBy={this.state.orderBy} />
          </div>
        }
      </nav>
    )
  }
}

function mapStateToProps(state){
  return {
    books: state.books.all   
    
  }
}

/* function loadMore() {
  return {    
    maxResults: `${this.state.maxResults} + 30`   
  }
}
loadMore() */


export default connect(mapStateToProps, actions)(SearchBar);
