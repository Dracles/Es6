const pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 },
];

const petsWithAge = pets.map((pet, i) => {
  pet = pets[i];
  pet.age = new Date().getFullYear() - pets[i].bornOn;
  return pet;
});

console.log(petsWithAge);

let dogs = pets.filter((ele, i) => {
  ele = "dog";
  return pets[i].type === ele;
});

console.log(dogs);

const jasper = pets.find((jas, i) => {
  jas = "Jasper";
  return pets[i].name === jas;
});

console.log(`Jasper is ${jasper.age} years old`);
