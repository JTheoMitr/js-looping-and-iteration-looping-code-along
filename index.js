// Code your solutions in this file
const people = ["Ada", "Brendan", "Ali"];
let newPeople = []

function writeCards(people) {
  for (let i = 0; i < people.length; i++) {
    console.log(`Thank you, ${people[i]}, for the wonderful surprise gift!`);
    newPeople.push(`Thank you, ${people[i]}, for the wonderful surprise gift!`);
  }
  return newPeople
}

function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}