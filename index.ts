type stringOrNumber = string | number;
// interface User {
//   name: string;
//   age: stringOrNumber;
//   birthDate: Date;
// }

// const user: User = {
//   name: "Sasha",
//   age: 25,
//   birthDate: new Date("1997-06-24"),
// };
enum CompassDirection {
  North,
  East,
  South,
  West,
}

enum StatusCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
}
const okNumber = StatusCodes.OK;
const okNumberIndex = StatusCodes["OK"];
const stringBadRequest = StatusCodes[400];

// const arr: number[] = [1, 2, 3, "da", 4, 5];
// const arr2: Array<number> = [1, 2, 3, 4, 5, as, 6];

// const words: string[] = ["123", "sqwe", 123];

//tuple
const contact: [string, number] = ["alex", 25];

let a: any = 42;
a = "123";

//functions
const sayMyName = (name: string): string => {
  return name;
};

sayMyName("Sasha");

const isPalindrome = (str: string): boolean => {
  const reverseStr = str.split("").reverse().join("");
  if (str === reverseStr) {
    return true;
  }
  return false;
};

const result = isPalindrome("tenet");

type ID = string | number;
interface User {
  readonly id: ID;
  name: string;
  citizen: {
    city: string;
    country: string;
  };
  weight?: number;
}

const user: User = {
  id: 1,
  name: "Aleks",
  citizen: {
    city: "Baku",
    country: "Az",
  },
  weight: 75,
};

const user2 = {} as User;
const user3 = <User>{};

interface UserWithJob extends User {
  getAJob: (jobCity: string) => boolean;
}

const user4: UserWithJob = {
  id: "id123",
  name: "Kirill",
  citizen: {
    city: "Moscow",
    country: "Russia",
  },
  getAJob(jobCity) {
    return this.citizen.city === jobCity;
  },
};
const resultJob = user4.getAJob("Samara");
//=========================================//
interface Styles {
  [key: string]: string;
}

const css: Styles = {
  border: "1px solid black",
  marginTop: "2px",
};

const toUpperCase = (str: string): string => {
  return str.toUpperCase();
};

const res = toUpperCase("hello");
//=====================//

interface MyPosition {
  x: number | undefined;
  y: number | undefined;
}
interface myPositionWithDefault extends MyPosition {
  default: string;
}
// function position(): MyPosition;
// function position(a: number): myPositionWithDefault;
// function position(a: number, b: number): MyPosition;
const position = (a?: number, b?: number) => {
  if (!a && !b) {
    return { x: undefined, y: undefined };
  }
  if (a && !b) {
    return { x: a, y: undefined, default: a.toString() };
  }
  return { x: a, y: b };
};
console.log("no params:", position());
console.log("one param:", position(42));
console.log("two params:", position(1, 2));
