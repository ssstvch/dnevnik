import React from "react";
// styles
import "./_studentCard.scss";
// components
import { Card, Button } from "react-bootstrap";
import ChangeForm from "../changeForm/ChangeForm";

const StudentCard = ({ row, student }) => {
  return (
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
        <ChangeForm student={student}>Редактировать</ChangeForm>
        <Button variant="danger">Удалить</Button>
      </div>
    </Card>
  );
};

export default StudentCard;
