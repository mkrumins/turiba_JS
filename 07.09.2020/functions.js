// === salīdzina vērtību un tipu
// == tikai salīdzina
// && - and
// || - or 
// != not
// !== - not + type


// switch tikai pārbauda vērtību, nevar salīdzināt piem. 10 > 20 utt
let c = 40;
switch (c) {
  case 20:
  case 10:
    console.log("C ir 20 vai 10")
    break;
  case 30:
    console.log("C ir 30");
    break;
  default:
    console.log("C nav neviens no variantiem");
    break;
}

// loops

loopFunction = () => {
  let newArray = ["keda", "krekls", "bikses", "šorti", "ķengurs"];
  for (let i=0; i < newArray.length; i++)
  console.log("Arry satur: ", newArray[i]);
}
loopFunction()

// if var strātād bez {}, kaut kādos gadījumos