// Objektu definēšana
defineObject = () => {
  myObject = {
    name: "David",
    lastName: "King",
    age: 10,
    familyMembers: ["John", "Kate", "Sara"],
    driverlicence: false,
    WorkObject: { // objekts objektā
      companyName: "C1",
      companyAddr: "Rigas street 1",
      exp: 2
    }
  }
  myObject.age = 20; // maina objekta lauku

  console.log("Company address:", myObject.WorkObject.companyAddr);
  console.log(myObject.age);
}

// ļauj noķert kļūdu, izpildīt catch un lasīt kodu tālāk
debugFunction = () => {
  try {
    let a;
    a.uiuiuiui(); 
  } catch (error) {
    console.log(error);
  }
finally{
  // obligāti izpildāms neatkarīgi vai nostrādā catch. piem: close loading window
}
  console.log("ejam talak"); // neizpildīsies, ja nebūs try/catch

}