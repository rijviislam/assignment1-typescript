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

type UniqueArr = number | string;

const getUniqueValues = (arr1: UniqueArr[], arr2: UniqueArr[]): UniqueArr[] => {
  let newArr: UniqueArr[] = [];
  const resArr: UniqueArr[] = [];

  for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i]);
  }
  for (let j = 0; j < arr2.length; j++) {
    newArr.push(arr2[j]);
  }
  for (let i = 0; i < newArr.length; i++) {
    if (!resArr.includes(newArr[i])) {
      resArr.push(newArr[i]);
    }
  }
  return resArr;
};

// PROBLEM NUMBER: 08
interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

const calculateTotalPrice = (arr: Product[]): number => {
  if (!Array.isArray(arr) || arr.length === 0) return 0;
  let baseTotal: number = 0;
  let discountAmount: number = 0;

  arr.reduce((acc, curr) => {
    return (baseTotal += curr.price * curr.quantity);
  }, 0);
  arr.forEach((item) => {
    if (item.discount) {
      return (discountAmount +=
        (item.price * item.quantity * item.discount) / 100);
    }
  });

  return baseTotal - discountAmount;
};

const products = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];
