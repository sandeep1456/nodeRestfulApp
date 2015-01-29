/**
 * Created by sandeepk on 1/29/2015.
 */

var app = require('./config/express')();
var PORT = 3100;

require("./config/routes")(app);

app.listen(PORT);
console.log("Listening on port "+ PORT);