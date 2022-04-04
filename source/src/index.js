import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "mobx-react";
// styles
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
// components
import App from "./components/app/App";
import PageNotfound from "./components/notfound/PageNotfound";
import StudentStore from "./store/students";

const store = {
  studentStore: new StudentStore(),
};

const routing = (
  <Provider {...store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/*" element={<PageNotfound />} />
      </Routes>
    </Router>
  </Provider>
);

ReactDOM.render(routing, document.getElementById("root"));
