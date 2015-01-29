/**
 * Created by sandeepk on 1/29/2015.
 */

module.exports = function(app){

    require("../routes/org.route")(app);

    app.use("/api/*", function(req, res){
        res.json({"error": "Service not supported"}, 404);
    });

    app.use("/*", function(req, res){
        res.send("<html><body><h1>Page not fount 404</h1></body></html>");
    })
}