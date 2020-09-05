myfunction = () => {
 console.log("Hello World") 
  $("#p1")[0].style.color = "blue";
  $(".p2")[1].style.color = "lime";
}
// Selektors
// DOM - Document Object Model
// $("#p1")[0]
//$("#p1")[0].style.color = "blue";

myfunction2 = () => {
  var a1; // globāls
  let a2; // lokāls
  const a3; // konstante
}

myfunction3 = () => {
  let objekts = $(".p2")[1].style;
  objekts.color = "blue";
  // objekts.display = "none";
  setTimeout(()=>{
    $(".p2")[1].style.color = "lime";
    },2000);
}



// YT ----
// Atgriež
saskaitisana = (skaitlis, skaitlis2) => {
return skaitlis + skaitlis2;
}
var count12 = saskaitisana(1,2);
console.log("Summ is ", count12);


// nepareizi
saskaitisana = (skaitlis, skaitlis2) => {
  return skaitlis + skaitlis2;
  return alert("Ups"); // pie mirmā return funkcija tiek pārtraukta
  }
  var count12 = saskaitisana(3,2);
  console.log("Summ is ", count12);