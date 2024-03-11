const people = [
    { name: "John", age: 25 },
    { name: "Jane", age: 20 },
    { name: "Peter", age: 30 }
];

people.sort((a, b) => a.age - b.age);

console.log("Sorted by age (ascending):", people);
