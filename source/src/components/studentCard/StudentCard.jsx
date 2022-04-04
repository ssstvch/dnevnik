import React from "react";
import { inject, observer } from "mobx-react";
// styles
import "./_studentCard.scss";
// components
import { Card, Button, Modal } from "react-bootstrap";
import DataForm from "../dataForm/DataForm";

const StudentCard = ({ row, student, studentStore }) => {
  return (
    <React.Fragment>
      <Card className="studentCard">
        <Card.Header className="studentCard__header">
          <Card.Title>Данные студента</Card.Title>

          <Card.Title>Оценки</Card.Title>
        </Card.Header>

        <Card.Body className="studentCard__body">
          <div className="studentCard__body_left">
            <Card.Text className="studentCard__text">
              <b>Фамилия:</b> {`${row.surname}`}
            </Card.Text>
            <Card.Text className="studentCard__text">
              <b>Имя:</b> {`${row.firstName}`}
            </Card.Text>
            <Card.Text className="studentCard__text">
              <b>Отчество:</b> {`${row.secondName}`}
            </Card.Text>
            <Card.Text className="studentCard__text">
              <b>Дата рождения:</b> {`${row.date}`}
            </Card.Text>
          </div>
          <div className="studentCard__body_right">
            <Card.Text className="studentCard__text">
              <b>История:</b> {`${student.history}`}
            </Card.Text>
            <Card.Text className="studentCard__text">
              <b>Инж.графика:</b> {`${student.graphic}`}
            </Card.Text>
            <Card.Text className="studentCard__text">
              <b>Математика:</b> {`${student.math}`}
            </Card.Text>
            <Card.Text className="studentCard__text">
              <b>Органика:</b> {`${student.organic}`}
            </Card.Text>
            <Card.Text className="studentCard__text">
              <b>Неорганика:</b> {`${student.inorganic}`}
            </Card.Text>
          </div>
        </Card.Body>
        <div className="studentCard__buttons">
          <DataForm
            action="change"
            buttonText="Редактировать"
            title="Редактирование карточки"
            buttonFooterText="Сохранить"
            student={student}
          />
          <Button variant="danger" onClick={() => studentStore.showModal(true)}>
            Удалить
          </Button>
        </div>
      </Card>
      <Modal
        size="sm"
        show={studentStore.show}
        onHide={() => studentStore.showModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Удалить запись?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Запись студента нельзя будет восстановить</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => studentStore.remove(`${row.id}`)}
          >
            Да
          </Button>
          <Button
            variant="primary"
            onClick={() => studentStore.showModal(false)}
          >
            Нет
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default inject(["studentStore"])(observer(StudentCard));
