console.log("JSOK");

const table = "Tavolo Vip";

const listVip = [
  "Brad Pitt",
  "Johnny Depp",
  "Lady Gaga",
  "Cristiano Ronaldo",
  "Georgina Rodriguez",
  "Chiara Ferragni",
  "Fedez",
  "George Clooney",
  "Amal Clooney",
  "Maneskin",
];

const tableVip = listVip.map((vip, index) => {
  return {
    name: vip,
    table: table,
    place: index + 1,
  };
});
console.log(tableVip);
