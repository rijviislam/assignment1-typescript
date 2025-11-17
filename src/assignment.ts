// PROBLEM NUMBER: 01

function formatValue(
  val: string | number | boolean
): string | number | boolean {
  if (typeof val === "string") {
    return val.toUpperCase();
  } else if (typeof val === "number") {
    return val * 10;
  } else {
    return !val;
  }
}

// PROBLEM NUMBER: 02
function getLength(val: string | any[]): number {
  if (typeof val === "string") {
    return val.length;
  } else if (Array.isArray(val)) {
    return val.length;
  }
  return 0;
}

// PROBLEM NUMBER: 03

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

const person1 = new Person("John Doe", 30);
const person2 = new Person("Alice", 25);

// PROBLEM NUMBER: 04

type ArrItem = {
  title: string;
  rating: number;
};

const filterByRating = (arr: ArrItem[]): ArrItem[] => {
  return arr.filter((item) => item.rating >= 4);
};

// PROBLEM NUMBER: 05

type UserArr = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
const filterActiveUsers = (arr: UserArr[]): UserArr[] => {
  return arr.filter((user) => user.isActive === true);
};

// PROBLEM NUMBER: 06
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(obj: Book) {
  console.log(`Title: ${obj.title}, Author: ${obj.author}, Published: ${
    obj.publishedYear
  }, Available: ${obj.isAvailable ? "Yes" : "No"}
`);
}

// PROBLEM NUMBER: 07
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const array3 = [
  "rijvi",
  "saimon",
  "rijvi",
  "saimon",
  "rijvi",
  "islam",
  "islam",
];
const array4 = [
  "fardin",
  "jahin",
  "muskan",
  "adrita",
  "fardin",
  "muskan",
  "jahin",
];
type UniqueArr = number | string;

const getUniqueValues = (arr1: UniqueArr[], arr2: UniqueArr[]): UniqueArr[] => {
  const newArr = [...arr1, ...arr2];
  const resArr: UniqueArr[] = [];
  for (let i = 0; i < newArr.length; i++) {
    if (!resArr.includes(newArr[i])) {
      resArr.push(newArr[i]);
    }
  }
  return resArr;
};
