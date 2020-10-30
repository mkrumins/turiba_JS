const express = require("express");
const app = express();
let cors = require('cors');

let bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:1080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

// app.get("/getClients", (req, res, next) => {
//     console.log("atnaca pieprasijums getClients");
//     res.json(["Lisa", "Michael", "Ginger", "Food"]);
// });

// app.get("/getObject", (req, res, next) => {
//     console.log("atnaca pieprasijums getObject");
//     res.json({"name":"Antons"});
// });

app.post('/checkUser', (request, response, next) => {
    console.log("request: " + request);

    if (request.body == null) {
        console.log("atnaca tuksums");
        response.send(false);
    }
    console.log("MKS atnaca: " + request.body.login);

    if (request.body.login == "admin" && request.body.password == "parole")
        response.send(true);
    else
        response.send(false);
});



app.listen(1081, () => {
    console.log("Server running on port 1081");
});