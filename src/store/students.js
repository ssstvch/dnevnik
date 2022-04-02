import { makeAutoObservable } from "mobx";

export default class StudentStore {
  students = [
    {
      id: 37219,
      surname: "Шестаков",
      firstName: "Артем",
      secondName: "Денисович",
      date: "03.12.1992",
      history: [4, 5, 2, 4, 3, 3],
      graphic: [4, 2, 4, 4, 4, 3],
      math: [4, 4, 5, 4, 2, 3],
      organic: [3, 3, 2, 2, 4, 3],
      inorganic: [4, 4, 2, 5, 5, 3],
    },
    {
      id: 37220,
      surname: "Козлов",
      firstName: "Константин",
      secondName: "Артемович",
      date: "15.03.1987",
      history: [5, 5, 5, 5, 5, 5],
      graphic: [3, 3, 4, 3, 4, 3],
      math: [5, 5, 3, 4, 4, 2],
      organic: [4, 5, 3, 3, 5, 5],
      inorganic: [5, 3, 3, 4, 4, 3],
    },
    {
      id: 37221,
      surname: "Меркушева",
      firstName: "Зара",
      secondName: "Филатовна",
      date: "20.11.1990",
      history: [3, 2, 4, 4, 2, 2],
      graphic: [4, 3, 4, 4, 2, 3],
      math: [3, 2, 4, 3, 5, 4],
      organic: [5, 3, 5, 5, 4, 4],
      inorganic: [2, 5, 5, 2, 5, 4],
    },
    {
      id: 37222,
      surname: "Григорьева",
      firstName: "Златослава",
      secondName: "Даниловна",
      date: "04.05.1984",
      history: [2, 2, 5, 4, 3],
      graphic: [4, 2, 4, 4, 5],
      math: [2, 2, 4, 4, 2],
      organic: [4, 5, 5, 3, 3],
      inorganic: [2, 3, 4, 4, 4],
    },
    {
      id: 37223,
      surname: "Овчинников",
      firstName: "Арсен",
      secondName: "Христофорович",
      date: "12.11.1971",
      history: [4, 3, 2, 2, 2],
      graphic: [5, 2, 4, 5, 4],
      math: [4, 5, 5, 2, 5],
      organic: [2, 3, 5, 3, 5],
      inorganic: [2, 2, 2, 3, 5],
    },
    {
      id: 37224,
      surname: "Анисимов",
      firstName: "Ефрем",
      secondName: "Арсеньевич",
      date: "13.01.1975",
      history: [5, 2, 5, 3, 2],
      graphic: [5, 3, 4, 4, 3],
      math: [4, 5, 4, 3, 2],
      organic: [3, 5, 3, 5, 5],
      inorganic: [4, 5, 3, 2, 5],
    },
    {
      id: 37225,
      surname: "Орлова",
      firstName: "Розалина",
      secondName: "Геннадьевна",
      date: "15.05.1987",
      history: [4, 3, 5, 5, 5],
      graphic: [3, 5, 3, 5, 2],
      math: [4, 4, 4, 4, 5],
      organic: [5, 4, 4, 5, 4],
      inorganic: [3, 3, 3, 5, 4],
    },
    {
      id: 37226,
      surname: "Колесников",
      firstName: "Гордий",
      secondName: "Дамирович",
      date: "18.10.1983",
      history: [2, 2, 5, 2, 3],
      graphic: [2, 2, 2, 2, 4],
      math: [5, 3, 5, 5, 4],
      organic: [4, 3, 2, 5, 3],
      inorganic: [3, 4, 2, 4, 5],
    },
    {
      id: 37227,
      surname: "Денисова",
      firstName: "Есения",
      secondName: "Онисимовна",
      date: "17.02.1979",
      history: [5, 3, 4, 5, 2],
      graphic: [2, 5, 5, 2, 3],
      math: [4, 2, 4, 3, 5],
      organic: [5, 5, 4, 5, 3],
      inorganic: [2, 4, 3, 2, 5],
    },
    {
      id: 37228,
      surname: "Жукова",
      firstName: "Клавдия",
      secondName: "Федосеевна",
      date: "18.04.1988",
      history: [4, 4, 4, 5, 4],
      graphic: [3, 5, 2, 2, 4],
      math: [3, 4, 5, 3, 2],
      organic: [2, 3, 3, 3, 3],
      inorganic: [2, 2, 4, 4, 3],
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  dataForTable = [];

  changeStudentsForTable = () => {
    this.dataForTable = JSON.parse(JSON.stringify(this.students));
    console.log(this.students[2].history);
    console.log(this.student === this.dataForTable);
    this.students.map((student, i) => {
      for (let key in student) {
        if (
          key === "history" ||
          key === "graphic" ||
          key === "math" ||
          key === "organic" ||
          key === "inorganic"
        ) {
          let grades = [...student[key]];
          let grade = parseFloat(
            (grades.reduce((a, b) => a + b) / grades.length).toFixed(1)
          );
          this.dataForTable[i][key] = grade;
        }
      }
    });
    console.log(this.student === this.dataForTable);
    console.log(this.students[2].history);
  };

  add = (student) => {
    this.students.push(student);
  };

  remove = (index) => {
    this.students.splice(index, 1);
  };
}
