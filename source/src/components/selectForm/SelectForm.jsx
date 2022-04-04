import React from "react";
// styles
import "./_selectForm.scss";
//componets
import { Form, Button, Col } from "react-bootstrap";

const SelectForm = ({
  subjectName,
  subject,
  handleChange,
  handleChangeSelect,
  selectValue,
  inputText,
}) => {
  return (
    <Col>
      <Form.Label className="modal__label">{subjectName}</Form.Label>
      <div className="modal__grades">
        {inputText[subject].length === 1 ? (
          <p className="modal__grades_grade">{inputText[subject]}</p>
        ) : inputText[subject].length > 1 ? (
          inputText[subject].map((g, i) => {
            return (
              <p key={`${g}-${i}`} className="modal__grades_grade">
                {g}{" "}
              </p>
            );
          })
        ) : (
          "Оценок нет"
        )}
      </div>
      <div className="modal__grades">
        <Form.Select
          variant={`secondary`}
          size="sm"
          className="modal__grades_choice"
          name={subject}
          onChange={(e) => handleChangeSelect(e)}
        >
          <option selected disabled>
            -
          </option>
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
        </Form.Select>
        <Button
          variant="outline-light"
          size="sm"
          className="modal__grades_btn"
          onClick={(e) =>
            handleChange(e, "setSelect", subject, selectValue[subject])
          }
        >
          ✔️
        </Button>
      </div>
    </Col>
  );
};

export default SelectForm;
