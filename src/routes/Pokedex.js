import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Pokedex from '../Pokedex'
import About from '../components/About'
const App=()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Pokedex}/>
                <Route  path='/:name' component={About}/>   
            </Switch>
        </BrowserRouter>
    )
}
export default App;