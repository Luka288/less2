"use strict";

//1
for (let i = 5; i <= 100; i++) {
  console.log(i);
}

// 2.

let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let i = 0; i < array1.length; i++) {
  if (array1[i] > 0 && array1[i] < 10) {
    console.log(array1[i]);
  }
}

//3

let array2 = [1, 2, 3, 4, 5];

let result = 0;
for (let i = 0; i < array2.length; i++) {
  result += array2[i];
}
console.log(result);

//4

let array3 = [1, 2, 3, 4, 5];

let avg = 0;

for (let i = 0; i < array3.length; i++) {
  avg += array3[i] / array3.length;
}

console.log(avg);

//5

let user = {
  firstname: "giorgi",
  lastname: "smith",
  age: 25,
  studentstatus: "active",
};

console.log(user.studentstatus);

//6

let user2 = {
  name: "anna",
  age: 20,
  studentstatus: "active",
};

if (user2.age < 18 && user2.studentstatus === "active") {
  console.log("hello user");
} else if (user2.name === "levani") {
  console.log("hello levani");
} else if (user2.studentstatus === "active" || user2.age < 25) {
  console.log("hello anna");
} else {
  console.log("error");
}

// if else with ternary operators
let res =
  user2.age < 18 && user2.studentstatus === "active"
    ? console.log("hello user")
    : user2.name === "levani"
    ? console.log("hello levani")
    : user2.studentstatus === "active" || user2.age < 25
    ? console.log("hello anna")
    : console.log(console.log("error"));

//7

let array6 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];

for (let i = 0; i < array6.length; i++) {
  if (array6[i] % 2 === 0) {
    console.log(array6[i]);
  }
}

//8

let users = [
  { username: "giorgi", status: false },
  { username: "levani", status: false },
  { username: "anna", status: true },
];

for (let i = 0; i < users.length; i++) {
  if (users[i].status === true) {
    console.log(users[i]);
  }
}

//9

let array7 = [32, 14, null, "40", 50];

for (let i = 0; i < array7.length; i++) {
  let check = typeof array7[i];

  if (check === "number" && array7[i] % 5 === 0) {
    console.log(array7[i]);
  }

  // converts string into number
  // if (array7[i] % 5 === 0 && array7[i] !== null) {
  //   console.log(array7[i]);
  // }
}

//10

let array8 = [
  [2, -3, 5, 11],
  [1, -35, -11],
  [12, -36, -24],
];

for (let i = 0; i < array8.length; i++) {
  for (let j = 0; j < array8.length; j++) {
    if (array8[i][j] > 0) {
      console.log(array8[i][j]);
    }
  }
}
