const generateStories = (name, place, hobby, verb) => {
  const stories = [
    `${hobby} is an amazing activity, and ${name} has been ${verb} it for years in ${place}.`,
    `Legend has it that ${name} once ${verb} ${hobby} so well that it inspired everyone in ${place}.`,
    `Whenever ${name} feels bored, they start ${verb} ${hobby}.`,
    `${name} dreams of traveling the world and ${verb} ${hobby} in every country.`,
    `${name} discovered ${hobby} while visiting ${place} and never stopped ${verb} it.`,
    `If you visit ${place}, don't forget to see ${name} ${verb} ${hobby}.`,
    `On rainy days in ${place}, ${name} loves to stay home and ${verb} ${hobby}.`,
    `No trip to ${place} is complete without seeing ${name} ${verb} ${hobby}.`,
    `On quiet nights in ${place}, you can find ${name} ${verb} ${hobby}.`,
  ];

  const randomizedOrderStories = stories.sort(() => Math.random() - 0.5);
  return randomizedOrderStories[0];
};

let count = 0;
let people = [];
let hasName = false;
let hasPlace = false;
let hasHobby = false;
let hasVerb = false;

let name;
let place;
let hobby;
let verb;

console.log("Please enter peoples info...(max 5 people)");

while (count < 5) {
  if (count !== 0) {
    let wantsToContinue = prompt(
      "Do you want to enter any more peoples info?(yes/or anything else) "
    );
    if (wantsToContinue !== "yes") {
      break;
    }
  }

  while (!hasName) {
    name = prompt("Enter a name:");
    if (name.length === 0) {
      console.log("Name can not be empty!");
      continue;
    }
    hasName = true;
  }
  while (!hasPlace) {
    place = prompt("Enter a place:");
    if (place.length === 0) {
      console.log("Place can not be empty!");
      continue;
    }
    hasPlace = true;
  }

  while (!hasHobby) {
    hobby = prompt("Enter a hobby:");
    if (hobby.length === 0) {
      console.log("Hobby can not be empty!");
      continue;
    }
    hasHobby = true;
  }

  while (!hasVerb) {
    verb = prompt("Enter a verb:");
    if (verb.length === 0) {
      console.log("Verb can not be empty!");
      continue;
    }
    hasVerb = true;
  }
  const person = { name, place, hobby, verb };
  people.push(person);
  hasHobby = false;
  hasName = false;
  hasPlace = false;
  hasVerb = false;
  count++;
}
const stories = people.map(({ name, place, hobby, verb }) => {
  return generateStories(name, place, hobby, verb);
});

console.log("Stories:");

stories.forEach((story, index) => console.log(`${index + 1}: ${story}`));
