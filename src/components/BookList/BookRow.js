import React from 'react';
import { browserHistory } from 'react-router';
import './BookRow.css';
import _ from 'lodash';

const BookRow = (props) => {   
  const title = () => {
    const str = props.book.volumeInfo.title
    const truncate = _.truncate 
    if(!str){
      return ""
    }
    else if(str.length < 15){
      return props.book.volumeInfo.title
    }    
    else{      
      return truncate(str, {
        length: 30,
        separator: /,?\.* +/ 
      })            
    } 
  }
  const author = () => {
    const arr = props.book.volumeInfo.authors   
    if(arr === undefined){
      return ""
    }
    else if(arr.length < 2){
      return props.book.volumeInfo.authors
    }    
    else{      
      return `${(props.book.volumeInfo.authors).slice(0,1)}...`           
    } 
  }  
  return (
    <div>
      <ul className='bookRow' onClick={() => browserHistory.push(`/${props.resultNumber}`)}>
        <li className='img'><img src={props.book.volumeInfo.imageLinks ? props.book.volumeInfo.imageLinks.smallThumbnail : null} alt='bookImage' /></li>
        <li style={{color:'grey'}}>{props.book.volumeInfo.categories}</li>               
        <li style={{fontWeight:'bold'}}>{title()}</li>      
        <li style={{color:'grey'}}>{author()}</li>
        <li style={{color:'grey'}}> {props.book.volumeInfo.publishedDate ? (props.book.volumeInfo.publishedDate): null}</li>
      </ul>
    </div>
      
  )
}

export default BookRow;
