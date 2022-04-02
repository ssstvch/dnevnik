import React from "react";
//styles
import "./App.scss";
// components
import Table from "../table/Table";

const App = () => {
  return (
    <React.Fragment>
      <h1>Таблица студентов</h1>
      <Table />
    </React.Fragment>
  );
};

export default App;
