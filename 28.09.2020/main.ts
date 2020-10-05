let myStr: string;
let myNum: number;
let mybool: boolean;
let myAny: any;

let myArr1: string[];
let myArr2: number[];
let myArr3: boolean[];
let myArr4: any[];

// otrs veids, kā definēt Array
let myArr5: Array<string>;
let myArr6: Array<number>;
let myArr7: Array<boolean>;
let myArr8: Array<any>;

// var definēt apvienotu arry, bet secība ir būtiska
let compArr: [number, string];
compArr = [3, "Hello"];
console.log(compArr);

// --------------------------------------------------------

// Funkcijas
// aiz ():number - tips, kas tiks atgriezts returnā
let getSumm = (num1:number, num2:number):number => {
  return num1 + num2
}
console.log(getSumm(5,2));

// "?" - ne obligāta
let getName = (firstName:string, lastName?:string):string => {
  if (lastName == undefined) {
    return firstName;
  }
  return firstName+ " " + lastName;
}
console.log(getName("John")); // lastName nav norādīta, jo nav obligāts

// Interfeisi

interface toDoList {
  title:string;
  task:string;
  date:string;
}

let getTask = (todo:toDoList) => {
  console.log(todo.title + " " + todo.task + " " + todo.date)
}

// ENUM
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}
