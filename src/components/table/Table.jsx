import React, { useState, useEffect } from "react";
import { observer, inject } from "mobx-react";
//styles
import "./_table.scss";
//components
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";
import AddingForm from "../addingForm/AddingForm";
import StudentCard from "../studentCard/StudentCard";

const { SearchBar } = Search;
const emptyInputs = {
  surname: "",
  firstName: "",
  secondName: "",
  date: "",
  history: "",
  history: "",
  graphic: "",
  math: "",
  organic: "",
  inorganic: "",
};
const caret = (order) => {
  if (!order)
    return (
      <span className="order">
        <span className="dropdown">
          <span className="caret"></span>
        </span>
        <span className="dropup">
          <span className="caret"></span>
        </span>
      </span>
    );
  else if (order === "asc")
    return (
      <span className="react-bootstrap-table-sort-order">
        <span className="caret"></span>
      </span>
    );
  else if (order === "desc")
    return (
      <span className="react-bootstrap-table-sort-order dropup">
        <span className="caret"></span>
      </span>
    );
  return null;
};
const columns = [
  {
    dataField: "surname",
    text: "Фамилия",
    sort: true,
    sortCaret: (order) => caret(order),
  },
  {
    dataField: "firstName",
    text: "Имя",
    sort: true,
    sortCaret: (order) => caret(order),
  },
  {
    dataField: "secondName",
    text: "Отчество",
    sort: true,
    sortCaret: (order) => caret(order),
  },
  {
    dataField: "date",
    text: "Дата рождения",
  },
  {
    dataField: "history",
    text: "История России",
    sort: true,
    sortCaret: (order) => caret(order),
  },
  {
    dataField: "graphic",
    text: "Инж.графика",
    sort: true,
    sortCaret: (order) => caret(order),
  },
  {
    dataField: "math",
    text: "Математика",
    sort: true,
    sortCaret: (order) => caret(order),
  },
  {
    dataField: "organic",
    text: "Органика",
    sort: true,
    sortCaret: (order) => caret(order),
  },
  {
    dataField: "inorganic",
    text: "Неорганика",
    sort: true,
    sortCaret: (order) => caret(order),
  },
];
const defaultSorted = [
  {
    dataField: "name",
    order: "desc",
  },
];

const Table = ({ studentStore }) => {
  const [newStudent, setNewStudent] = useState(emptyInputs);
  const addNewStudent = () => {
    if (!newStudent) return;
    studentStore.add(newStudent);
    setNewStudent(emptyInputs);
  };
  const deleteStudent = (index) => {
    studentStore.remove(index);
  };
  const expandRow = {
    renderer: (row) => {
      let student;
      studentStore.students.map((stud, i) => {
        if (stud.id === row.id) student = stud;
      });
      return <StudentCard row={row} student={student} />;
    },
    showExpandColumn: true,
    expandByColumnOnly: true,
  };
  useEffect(() => {
    studentStore.changeStudentsForTable();
  }, []);

  return (
    <ToolkitProvider
      bootstrap4
      keyField="id"
      data={studentStore.dataForTable}
      columns={columns}
      defaultSorted={defaultSorted}
      search
    >
      {(props) => {
        return (
          <React.Fragment>
            <div className={`table__options`}>
              <AddingForm />
              <SearchBar {...props.searchProps} />
            </div>
            <br />
            <BootstrapTable
              hover
              expandRow={expandRow}
              noDataIndication="Ничего не найдено"
              {...props.baseProps}
            />
          </React.Fragment>
        );
      }}
    </ToolkitProvider>
  );
};

export default inject(["studentStore"])(observer(Table));
