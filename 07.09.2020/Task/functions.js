createParagraphs = () => {
  $(document).ready(function () {
    let paragraphN = 9;
    for (let i = 0; i < paragraphN; i++) {
      $("#main_cont").append("<p>" + (i + 1) + ". This is paragraph</p>");
    }
    if ($("#main_cont")) {
      var element = $("p");
      for (let i = 0; i < element.length; i++) {
        if (i == 0 || i == 3 || i == 6) {
          element[i].style.color = "red";
        } else if (i == 1 || i == 4 || i == 7) {
          element[i].style.color = "yellow";
        } else {
          element[i].style.color = "green";
        }
      }
    }
  })
}

