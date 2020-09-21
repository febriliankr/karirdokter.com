import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <>
    <BrowserRouter>
    <div className="App">
      <Navbar/>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/quiz" component={Quiz}/>
        </Switch>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
