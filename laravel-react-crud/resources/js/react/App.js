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
            </Switch>
        </Router>
    );
}


ReactDom.render(<App />,document.getElementById('app'))