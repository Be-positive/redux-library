import React from 'react';
import { browserHistory } from 'react-router';
import './BookRow.css';

const BookRow = (props) => {  
  /* const title = () => {
    const str = props.book.volumeInfo.title 
    if(str.length < 15){
      return props.book.volumeInfo.title
    }
    else{
      props.book.volumeInfo.title.replace(/(.{3})..+/, "$1&hellip;");
    } 
  } */
  /* var yourString = "The quick brown fox jumps over the lazy dog"; //replace with your string.
  var maxLength = 6 // maximum number of characters to extract
  //trim the string to the maximum length
  var trimmedString = yourString.substr(0, maxLength);
  //re-trim if we are in the middle of a word
  trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))) */
  //or you can use Lodash library!
  /* Lodash has a function specifically written for this: _.truncate
  const truncate = _.truncate
  const str = 'The quick brown fox jumps over the lazy dog'

  truncate(str, {
    length: 30, // maximum 30 characters
    separator: /,?\.* +/ // separate by spaces, including preceding commas and periods
  })
  // 'The quick brown fox jumps...' */
  return (
    <div>
      <ul className='bookRow' onClick={() => browserHistory.push(`/${props.resultNumber}`)}>
        <li className='img'><img src={props.book.volumeInfo.imageLinks ? props.book.volumeInfo.imageLinks.smallThumbnail : null} alt='bookImage' /></li>
        <li style={{color:'grey'}}>{props.book.volumeInfo.categories}</li>
        <li style={{fontWeight:'bold'}}>{props.book.volumeInfo.title}</li>        
        {/* <li>{title}</li> */}        
        <li style={{color:'grey'}}>{props.book.volumeInfo.authors ? props.book.volumeInfo.authors.join(', ') : null} {/* ({props.book.volumeInfo.publishedDate}) */}</li>
        <li style={{color:'grey'}}> {props.book.volumeInfo.publishedDate ? (props.book.volumeInfo.publishedDate): null}</li>
       
      </ul>

    </div>
      
  )
}

export default BookRow;
