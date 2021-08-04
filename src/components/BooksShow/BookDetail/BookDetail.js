import React from 'react';
import { browserHistory } from 'react-router';
import './BookDetail.css';

const BookDetail = (props) => {     
    console.log(props.book)       
    return (
        <div className='book'>
          <ul className='bookDetail' onClick={() => browserHistory.push(`/${props.resultNumber}`)}>
            <li className='img'><img src={props.book.volumeInfo.imageLinks ? props.book.volumeInfo.imageLinks.smallThumbnail : null} alt='bookImage' /></li>
            <li className='bookFullDescrib'>
                <ul className='fullStuff'>
                    <li style={{color:'grey'}}>{props.book.volumeInfo.categories}</li>
                    <li style={{fontWeight:'bold'}}>{props.book.volumeInfo.title}</li>        
                    <li style={{color:'grey'}}>{props.book.volumeInfo.authors ? props.book.volumeInfo.authors.join(', ') : null} ({props.book.volumeInfo.publishedDate})</li>
                    <li> {props.book.volumeInfo.description} </li>
                    <li><a target='_blank' href={props.book.volumeInfo.infoLink}> read more/buy <i className="fas fa-arrow-right"></i></a> </li>
                </ul>                
            </li>            
          </ul>    
        </div>
          
    )
}
    
export default BookDetail;
 