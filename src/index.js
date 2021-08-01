import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
/* import routes from './routes.js'; */
import {persistStore, autoRehydrate} from 'redux-persist';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import BooksIndex from './components/BooksIndex/BooksIndex';
import BooksShow from './components/BooksShow/BooksShow'; 
import App from './App';
import Error from './components/ErrorPage/error';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
  autoRehydrate()
);
persistStore(store)

ReactDOM.render(
  <Provider store={store}>    
    <Router history={browserHistory} /* routes={routes} */>        
        <BooksIndex path='/' component={BooksIndex}/>        
        <Switch>         
          <Route exact component={App}>                                   
            <BooksShow path="/:id"  component={BooksShow} />            
          </Route>
          <Route path="*">
            <Error />
          </Route>          
        </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
