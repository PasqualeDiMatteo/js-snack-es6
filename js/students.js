console.log("JSOK");

console.log("------------------------");

const studentList = [
  {
    id: 213,
    name: "Marco della Rovere",
    grades: 78,
  },
  {
    id: 110,
    name: "Paola Cortellessa",
    grades: 96,
  },
  {
    id: 250,
    name: " Andrea Mantegna",
    grades: 48,
  },
  {
    id: 145,
    name: "Gaia Borromini",
    grades: 74,
  },
  {
    id: 196,
    name: "Luigi Grimaldello",
    grades: 68,
  },
  {
    id: 102,
    name: "Piero della Francesca",
    grades: 50,
  },
  {
    id: 120,
    name: "Francesca da Polenta",
    grades: 84,
  },
];

// Students with grades above 70

const highGradesStudents = studentList.filter((student) => student.grades > 70);

console.log(highGradesStudents);

// Students with grades above 70 and id above 120

const highGradesAndIdStudents = highGradesStudents.filter(
  (student) => student.id > 120
);

console.log(highGradesAndIdStudents);

// Students with the name in uppercase

const uppercaseNames = highGradesAndIdStudents.map((student) =>
  student.name.toUpperCase()
);

console.log(uppercaseNames);
