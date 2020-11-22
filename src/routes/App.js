import React from "react";
import Particles from "./Particles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import Pokedex from "../Pokedex";
import About from "../components/About";
const App = () => {
  return (
    <>
      <div className="canvas">
        <Particles />
      </div>
      <Router>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route exact path="/" component={Pokedex} />
          <Route path="/:name" component={About} />
        </AnimatedSwitch>
      </Router>
    </>
  );
};
export default App;
