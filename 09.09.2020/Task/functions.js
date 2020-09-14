calculate = () => {
  let num1 = parseInt($("#num1").val());
  let num2 = parseInt($("#num2").val());

  if (!num1 || !num2) {
    alert("Please Fill All Required Fields");
  } else {

    let addition = num1 + num2;
    let subtraction = num1 - num2;
    let division = num1 / num2;
    let multiplication = num1 * num2;

    $("#addition").text("Sum of addition: " + addition);
    $("#subtraction").text("Sum of subtraction: " + subtraction);
    $("#division").text("Sum of division: " + division);
    $("#multiplication").text("Sum of multiplication: " + multiplication);
  }
}

