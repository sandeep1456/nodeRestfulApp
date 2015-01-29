/**
 * Created by sandeepk on 1/29/2015.
 */

module.exports = function(app){

    var orgs = require("../controllers/org.controller");

    app.route("/api/orgs")
        .get(orgs.list)
        .post(orgs.create);

    app.route("/api/orgs/:orgId")
        .get(orgs.fetch)
        .put(orgs.update)
        .delete(orgs.delete);

    app.param("orgId", orgs.orgById);

}