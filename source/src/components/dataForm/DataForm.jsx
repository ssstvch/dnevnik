import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { observer, inject } from "mobx-react";
// styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./_dataForm.scss";
// components
import { Form, Modal, Button, Col, Row, CloseButton } from "react-bootstrap";
import SelectForm from "../selectForm/SelectForm";

const emptyInputs = {
  surname: "",
  firstName: "",
  secondName: "",
  date: "",
  inorganic: [],
  history: [],
  graphic: [],
  math: [],
  organic: [],
};
const subjects = [
  {
    subjectName: "История России",
    subject: "history",
  },
  {
    subjectName: "Инж.графика",
    subject: "graphic",
  },
  {
    subjectName: "Математика",
    subject: "math",
  },
  {
    subjectName: "Неорганическая химия",
    subject: "inorganic",
  },
  {
    subjectName: "Органическая химия",
    subject: "organic",
  },
];

const DataForm = ({
  studentStore,
  action,
  buttonText,
  title,
  buttonFooterText,
  student,
}) => {
  const [inputText, setInputText] = useState(student ? student : emptyInputs);
  const [error, setError] = useState({
    surname: false,
    firstName: false,
    secondName: false,
    date: false,
    history: false,
    graphic: false,
    math: false,
    organic: false,
    inorganic: false,
  });
  const [selectValue, setSelectValue] = useState(
    student
      ? {
          history: student.history,
          graphic: student.graphic,
          math: student.math,
          organic: student.organic,
          inorganic: student.inorganic,
        }
      : { history: [], graphic: [], math: [], organic: [], inorganic: [] }
  );
  const [validated, setValidated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => {
    setInputText(student ? student : emptyInputs);
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
    setSelectValue({
      history: [],
      graphic: [],
      math: [],
      organic: [],
      inorganic: [],
    });
    setInputText(emptyInputs);
    setValidated(false);
  };
  const handleChange = (e, action, name, grade) => {
    if (action === "setSelect") {
      if (inputText.name === undefined) {
        setInputText({ ...inputText, [name]: grade });
      } else {
        let newInputText = Array.from(inputText.name).push(grade);
        setInputText({ ...inputText, [name]: newInputText });
      }
      setSelectValue[name] = [];
    } else {
      e.target.value.match(/^\s+$/) || e.target.value === ""
        ? setError({ ...error, [e.target.name]: true })
        : setError({ ...error, [e.target.name]: false });
      setInputText({ ...inputText, [e.target.name]: e.target.value });
    }
  };
  const handleChangeSelect = (e) => {
    let value = e.target.value;
    console.log(value);
    let newArray = [...selectValue[e.target.name], +value];
    setSelectValue({
      ...selectValue,
      [e.target.name]: newArray,
    });
  };
  const addNewStudent = (e) => {
    e.preventDefault();
    if (!inputText) return;
    const form = e.target;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      setValidated(true);

      handleClose();
    }
    studentStore.add(inputText);
    setInputText(emptyInputs);
    setSelectValue({
      history: [],
      graphic: [],
      math: [],
      organic: [],
      inorganic: [],
    });
  };
  const changeStudent = (e) => {
    e.preventDefault();
    if (!inputText) return;
    const form = e.target;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);
    studentStore.change(inputText);
    handleClose();
    setInputText(student ? student : emptyInputs);
    setSelectValue(
      student
        ? {
            history: student.history,
            graphic: student.graphic,
            math: student.math,
            organic: student.organic,
            inorganic: student.inorganic,
          }
        : { history: [], graphic: [], math: [], organic: [], inorganic: [] }
    );
  };

  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleShow}>
        {buttonText}
      </Button>
      <Modal
        centered
        show={showModal}
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
          <CloseButton onClick={handleClose} className={`modal__close`} />
        </Modal.Header>

        <Form
          noValidate
          validated={validated}
          onSubmit={(e) =>
            action === "add"
              ? addNewStudent(e)
              : action === "change"
              ? changeStudent(e)
              : ""
          }
        >
          <Modal.Body>
            <Row className="modal__row">
              <Col>
                <Form.Label className="modal__label">Фамилия</Form.Label>
                <Form.Control
                  placeholder="Фамилия"
                  type="text"
                  size="sm"
                  name="surname"
                  defaultValue={student && student.surname}
                  onChange={(e) => handleChange(e)}
                  isInvalid={error.surname}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Введите фамилию
                </Form.Control.Feedback>
              </Col>
              <Col>
                <Form.Label className="modal__label">Имя</Form.Label>
                <Form.Control
                  placeholder="Имя"
                  type="text"
                  size="sm"
                  name="firstName"
                  defaultValue={student && student.firstName}
                  onChange={handleChange}
                  isInvalid={error.firstName}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Введите имя
                </Form.Control.Feedback>
              </Col>
              <Col>
                <Form.Label className="modal__label">Отчество</Form.Label>
                <Form.Control
                  placeholder="Отчество"
                  type="text"
                  size="sm"
                  name="secondName"
                  defaultValue={student && student.secondName}
                  onChange={handleChange}
                  isInvalid={error.secondName}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Введите отчество
                </Form.Control.Feedback>
              </Col>
            </Row>
            <Row className="modal__row">
              <Form.Label className="modal__label" column sm="4">
                Дата рождения
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  type="date"
                  size="sm"
                  name="date"
                  defaultValue={
                    student &&
                    format(
                      new Date(
                        student.date.slice(6, 10),
                        student.date.slice(3, 4),
                        student.date.slice(0, 2)
                      ),
                      "yyyy-MM-dd"
                    )
                  }
                  onChange={handleChange}
                  isInvalid={error.date}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Введите корректную дату рождения: "ДД.ММ.ГГГГ"
                </Form.Control.Feedback>
              </Col>
            </Row>
            <Row className="modal__row">
              {subjects.map((sub, i) => {
                if (i === 0 || i === 1 || i === 2) {
                  return (
                    <SelectForm
                      key={sub.subject}
                      subjectName={sub.subjectName}
                      subject={sub.subject}
                      handleChange={handleChange}
                      handleChangeSelect={handleChangeSelect}
                      selectValue={selectValue}
                      inputText={inputText}
                      student={student}
                    />
                  );
                }
              })}
            </Row>
            <Row className="modal__row">
              {subjects.map((sub, i) => {
                if (i === 3 || i === 4) {
                  return (
                    <SelectForm
                      key={sub.subject}
                      subjectName={sub.subjectName}
                      subject={sub.subject}
                      handleChange={handleChange}
                      handleChangeSelect={handleChangeSelect}
                      selectValue={selectValue}
                      inputText={inputText}
                      student={student}
                    />
                  );
                }
              })}
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Закрыть
            </Button>
            <Button type="submit" variant="primary">
              {buttonFooterText}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </React.Fragment>
  );
};
export default inject(["studentStore"])(observer(DataForm));
