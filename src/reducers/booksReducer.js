import { FETCH_BOOKS_SUCCESS, FETCH_BOOKS_ERROR, FETCHING_BOOKS } from '../actions/index';

const INITIAL_STATE = {
  all: [],
  error: false,
  isFetching: false
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        all: action.payload.data,
        error: false,
        isFetching: false
      };
    case FETCH_BOOKS_ERROR:
      console.log('error');
      return {
        ...state,
        error: true,
        isFetching: false
      }
    case FETCHING_BOOKS:
      return {
        ...state,
        isFetching: true,
        lastSearchQuery: action.payload.lastSearchQuery,
        subject: action.payload.subject,                
        maxResults: action.payload.maxResults,
        startIndex: action.payload.startIndex,
        orderBy: action.payload.orderBy,        

               
                
        
      }
    default:
      return state;
  }
}
