import React, { useState } from "react";
import moment from "moment/min/moment-with-locales";
import Moment from "react-moment";
// styles
import "./_changeForm.scss";
// components
import { Form, Modal, Button, Col, Row } from "react-bootstrap";

const ChangeForm = ({ student }) => {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleShow}>
        Редактировать
      </Button>
      <Modal
        centered
        show={showModal}
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header>
          <Modal.Title>Редактирование записи студента</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Row className="modal__row">
              <Col>
                <Form.Label className="modal__label">Фамилия</Form.Label>
                <Form.Control
                  placeholder="Фамилия"
                  type="text"
                  size="sm"
                  value={student.surname}
                />
              </Col>
              <Col>
                <Form.Label className="modal__label">Имя</Form.Label>
                <Form.Control
                  placeholder="Имя"
                  type="text"
                  size="sm"
                  value={student.firstName}
                />
              </Col>
              <Col>
                <Form.Label className="modal__label">Отчество</Form.Label>
                <Form.Control
                  placeholder="Отчество"
                  type="text"
                  size="sm"
                  value={student.secondName}
                />
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
                  value={moment(student.date, "YYYY-MM-DD")}
                />
              </Col>
            </Row>
            <Row className="modal__row">
              <Form.Group as={Col}>
                <Form.Label className="modal__label">История России</Form.Label>
                <Form.Control
                  placeholder="Оценки"
                  type="text"
                  size="sm"
                  value={student.history}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label className="modal__label">Инж.графика</Form.Label>
                <Form.Control
                  placeholder="Оценки"
                  type="text"
                  size="sm"
                  value={student.graphic}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label className="modal__label">Математика</Form.Label>
                <Form.Control
                  placeholder="Оценки"
                  type="text"
                  size="sm"
                  value={student.math}
                />
              </Form.Group>
            </Row>
            <Row className="modal__row">
              <Form.Group as={Col}>
                <Form.Label className="modal__label">
                  Органическая химия
                </Form.Label>
                <Form.Control
                  placeholder="Оценки"
                  type="text"
                  size="sm"
                  value={student.organic}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label className="modal__label">
                  Неорганическая химия
                </Form.Label>
                <Form.Control
                  placeholder="Оценки"
                  type="text"
                  size="sm"
                  value={student.inorganic}
                />
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Сохранить
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default ChangeForm;
