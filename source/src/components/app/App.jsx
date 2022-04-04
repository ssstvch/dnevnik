import React from "react";
//styles
import "./App.scss";
// components
import Table from "../table/Table";
import { NavbarBrand } from "react-bootstrap";

const App = () => {
  return (
    <React.Fragment>
      <header className="header">
        <h2>Таблица успеваемости студентов</h2>
      </header>
      <div className="table-container">
        <Table />
      </div>
    </React.Fragment>
  );
};

export default App;
