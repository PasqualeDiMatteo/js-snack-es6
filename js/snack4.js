const teams = [
  {
    name: "Atalanta",
    score: 0,
    failImmediately: 0,
  },
  {
    name: "Bologna",
    score: 0,
    failImmediately: 0,
  },
  {
    name: "Empoli",
    score: 0,
    failImmediately: 0,
  },
  {
    name: "Fiorentina",
    score: 0,
    failImmediately: 0,
  },
  {
    name: "Napoli",
    score: 0,
    failImmediately: 0,
  },
];

// Creo una variabile per generare i numeri random
const randomNumber = (max) => Math.floor(Math.random() * max) + 1;

for (team of teams) {
  team.score = randomNumber(70);
  team.failImmediately = randomNumber(15);
}

const newTeams = teams.map(({ name, failImmediately }) => ({
  name,
  failImmediately,
}));

console.log(newTeams);
