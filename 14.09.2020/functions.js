fibonacciGen = () => {
  let fibo = 0;
  let nextFibo = 1;
  let temp;
  const element = 20;
  const fiboDiv = $("#fibonacci").empty();

  for (let i = 0; i < element; i++) {
    temp = fibo;
    fibo += nextFibo;
    nextFibo = temp;

    if ($("#Check")[0].checked) {
      if (i == (element - 1)) {
        fiboDiv.append(fibo);
      } else {
        fiboDiv.append(fibo + ", ");
      }
    }
    else if (i == (element - 1)) {
      fiboDiv.append(fibo);
    }
  }
}