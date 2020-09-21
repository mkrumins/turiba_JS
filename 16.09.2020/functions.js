loginFun = () => {
  let log = $("#login").val();
  let pas = $("#password").val();

  if (log == "admin" && pas == "admin") {
    sessionStorage.setItem("token", "MKS123");
    window.open("newpage.html", "_self");
  }
  else {
    $("#LoginMsg").text("Invalid username or password");
  }

}

onLoad = () => {
  let storage = sessionStorage.getItem("token");
  if (storage != null && storage == "MKS123") {
    window.open("newpage.html", "_self");
  }
}

onLoad2 = () => {
  let storage = sessionStorage.getItem("token");
  if (storage != "MKS123") {
    window.open("index.html", "_self");
  }
}


logOutFun = () => {
  sessionStorage.removeItem("token");
  window.open("index.html", "_self");
}