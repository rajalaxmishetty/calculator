const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  //console.log(request);
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
  var n1 = Number(req.body.n1);
  var n2 = Number(req.body.n2);
  var ans = n1 + n2;
  res.send("The ans is :" + ans);
});
app.listen(3000, function () {
  console.log("server running in port 3000");
});
