import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

import App from './App';
import PhotoGrid from './containers/photoGrid';

import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom'
import reducers from './reducers/getImageReducer'
import { getImages} from './actions/getImageActions'

const store = createStore(reducers, compose(applyMiddleware(thunk)));
// initial state
store.dispatch(getImages());

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} >
            <div>
                <Route exact path="/" component={App}/>
                <Route component={PhotoGrid} />
            </div>
        </Router>
    </Provider>,
  document.getElementById('root')
);
