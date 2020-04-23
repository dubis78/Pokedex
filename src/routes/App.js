import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pokedex from '../Pokedex'
import About from '../components/About'
const App=()=>{
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={Pokedex}/>
                <Route  path='/:name' component={About}/>   
            </Switch>
        </Router>
    )
}
export default App;