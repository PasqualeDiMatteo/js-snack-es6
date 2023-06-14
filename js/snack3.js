const bikes = [
  {
    name: "Bianchi",
    weight: 55,
  },
  {
    name: "Carrera",
    weight: 34,
  },
  {
    name: "Scott",
    weight: 15,
  },
  {
    name: "Cipollini",
    weight: 45,
  },
  {
    name: "De Rosa",
    weight: 21,
  },
];

const lessWeight = bikes.reduce(
  (accumulator, bike) =>
    accumulator.weight < bike.weight ? accumulator : bike,
  0
);

const { name, weight } = lessWeight;

document.body.innerHTML = `La bici più leggera è la ${name} e pesa ${weight}kg.`;
