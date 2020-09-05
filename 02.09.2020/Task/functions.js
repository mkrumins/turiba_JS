find_span = () => {
  var newStyle = $("span")[0].style;
  newStyle.color = "#ff4b5c";
  newStyle.fontWeight = "900";
}

hideDiv = () => {
// $(".hide").toggle();
$(".hide").css("display", "none");
}

moveI = () => {
  $("i").css("padding-left", "100px");
}
