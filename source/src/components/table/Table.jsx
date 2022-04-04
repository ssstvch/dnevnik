import React, { useEffect } from "react";
import { observer, inject } from "mobx-react";
//styles
import "./_table.scss";
//components
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";
import DataForm from "../dataForm/DataForm";
import StudentCard from "../studentCard/StudentCard";

const { SearchBar } = Search;
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
    filter: textFilter({ placeholder: "Поиск по фамилии" }),
  },
  {
    dataField: "firstName",
    text: "Имя",
    sort: true,
    sortCaret: (order) => caret(order),
    filter: textFilter({ placeholder: "Поиск по имени" }),
  },
  {
    dataField: "secondName",
    text: "Отчество",
    sort: true,
    sortCaret: (order) => caret(order),
    filter: textFilter({ placeholder: "Поиск по отчеству" }),
  },
  {
    dataField: "date",
    text: "Дата рождения",
    filter: textFilter({ placeholder: "Поиск по дате рождения" }),
  },
  {
    dataField: "history",
    text: "История России",
    sort: true,
    sortCaret: (order) => caret(order),
    filter: textFilter({ placeholder: "Поиск по среднему баллу" }),
  },
  {
    dataField: "graphic",
    text: "Инж.графика",
    sort: true,
    sortCaret: (order) => caret(order),
    filter: textFilter({ placeholder: "Поиск по среднему баллу" }),
  },
  {
    dataField: "math",
    text: "Математика",
    sort: true,
    sortCaret: (order) => caret(order),
    filter: textFilter({ placeholder: "Поиск по среднему баллу" }),
  },
  {
    dataField: "organic",
    text: "Органика",
    sort: true,
    sortCaret: (order) => caret(order),
    filter: textFilter({ placeholder: "Поиск по среднему баллу" }),
  },
  {
    dataField: "inorganic",
    text: "Неорганика",
    sort: true,
    sortCaret: (order) => caret(order),
    filter: textFilter({ placeholder: "Поиск по среднему баллу" }),
  },
];
const defaultSorted = [
  {
    dataField: "name",
    order: "desc",
  },
];

const Table = ({ studentStore }) => {
  const expandRow = {
    renderer: (row) => {
      let student;
      studentStore.students.map((stud, i) => {
        if (stud.id === row.id) student = stud;
        return true;
      });
      return <StudentCard row={row} student={student} />;
    },
    showExpandColumn: true,
    expandByColumnOnly: true,
  };
  const options = {
    paginationSize: 4,
    sizePerPageList: [
      {
        text: "5",
        value: 5,
      },
      {
        text: "10",
        value: 10,
      },
      {
        text: "Все",
        value: studentStore.students.length,
      },
    ],
  };
  useEffect(() => {
    studentStore.loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ToolkitProvider
      bootstrap4
      keyField="id"
      data={studentStore.isLoaded ? studentStore.dataForTable : []}
      columns={columns}
      defaultSorted={defaultSorted}
      search
    >
      {(props) => {
        return (
          <React.Fragment>
            <div className={`table__options`}>
              <DataForm
                action="add"
                buttonText="Добавить"
                title="Добавление новой записи"
                buttonFooterText="Добавить"
              >
                Добавить
              </DataForm>
              <SearchBar {...props.searchProps} placeholder="Поиск в таблице" />
            </div>
            <br />
            <BootstrapTable
              hover
              expandRow={expandRow}
              filter={filterFactory()}
              pagination={paginationFactory(options)}
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
