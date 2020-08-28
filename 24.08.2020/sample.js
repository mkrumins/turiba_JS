// Data Types
  //Primitive
    // - Number - (int un float)
    // - String - (text)
    // - Boolean - (True / False)
    // - null - (definēts, bet bez vērtības)
    // - undefined (nav nodefinēts)
    // - Symbol - (simbols)
  //Non-Primitive
    // Object


// Mainīgo veidi

// var  - globāls 
// let -  funkcijas ietvaros
// const - konstante, nevar mainīt 

var jaunsobjektsa  = {} // - objkekts
var jaunsobjektsa2  = {a1:123} // objekts ar mainīgo, kam piesaistīta vērtība (atslēga:vērtība vai mainīgais:vērtība)
var jaunsobjektsa2  = {a1:123, a2:"Hello"} // ar divām vērtībām
jaunsobjektsa2.a1 // dabūs ārā tikai vienu no vērtībām  - a1

var vilciens = [] //masīvs (nav obligati jābut viens tips, bet labāk likt vienu)
var test = [2,3,"koks"] // ar dažādiem tipiem
var vilciens = [1,4,10];
vilciens[0] // pēc indexa parāda vērtību
var years = new Array(1990, 2020); // jaunais masīva stils

// -------------------------------------------
// Creating Object
let user = {
  name: "Bob",
  age: 30,
  email: "bob.smith@hello.com",
  location: "Berlin",
  blogPosts: ["10 Things to see in London", "Best burgers in Paris"],
  login: function () { // funkcija, jeb metode
    console.log("User is logged in");
  }
};

user.age = 22; // izmaina Objektā vērtību
user["name"] = "John"; // izmaina Objektā vērtību ar []
