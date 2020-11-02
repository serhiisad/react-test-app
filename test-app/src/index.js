import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// import React from "react";
// import { render } from "react-dom";
// import { createStore } from "redux";
// import todoApp from "./reducers";
// import Root from "./components/Root";

// const store = createStore(todoApp);

// render(<Root store={store} />, document.getElementById("root"));
