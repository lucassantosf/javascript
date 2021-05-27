import React from 'react'
import ReactDom from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Teste from './components/Teste'

import { Provider } from 'react-redux'; 
import storeConfig from './storeConfig/store'

const App = ()=>{
    return (
        <Router>
            <Switch>
                <Route exact path="/teste">
                    <Teste />
                </Route>
            </Switch>
        </Router>
    );
}

const store = storeConfig(); 

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)