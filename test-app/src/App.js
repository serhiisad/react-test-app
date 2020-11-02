import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { NavLink, Switch, Route } from "react-router-dom";
import Feed from "./components/Feed";
import NewsAdder from "./components/NewsAdder";

const App = () => (
  <div className="app">
    <h1>NewsFeed</h1>
    <Navigation />
    <Main />
  </div>
);

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/">Feed</NavLink>
      </li>
      <li>
        <NavLink to="/add">Add Posts</NavLink>
      </li>
    </ul>
  </nav>
);

const Main = () => (
  <Switch>
    <Route exact path="/" component={Feed}></Route>
    <Route exact path="/add" component={NewsAdder}></Route>
  </Switch>
);

export default App;
