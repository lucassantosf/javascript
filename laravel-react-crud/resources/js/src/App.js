import React from 'react'
import ReactDom from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Home from './components/Home'
import Add from './components/Add'
import Edit from './components/Edit'
import Todo from './components/todo'
 
import { Provider } from 'react-redux'; 
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const App = ()=>{
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/add">
                    <Add />
                </Route>
                <Route exact path="/edit/:id">
                    <Edit />
                </Route>
                <Route exact path="/todo">
                    <Todo />
                </Route>
            </Switch>
        </Router>
    );
}
 
const store = createStore(reducers, applyMiddleware(thunk));

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)