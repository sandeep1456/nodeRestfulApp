/**
 * Created by sandeepk on 1/29/2015.
 */

var orgs = [];

exports.list = function(req, res){
    res.send(orgs);
};

exports.create = function(req, res){
    var org = req.body;
    orgs.push(org);
    res.send(org)
};

exports.orgById = function(req, res, next, id){
    orgs.forEach(function(org){
        if(org.id == parseInt(id)){
            req.org = org;
        }
    });
    next();
};

exports.fetch = function(req, res, next){
    res.send(req.org);
}

exports.update = function(req, res, next){
    var org = req.org;

    /*orgs.forEach(function(org){
        if(org.id == parseInt(req.org.id)){
            org = req.body;
        }
    });*/

    if(req.body.name != undefined ){
        org.name = req.body.name;
    }

    if(req.body.total_employees != undefined ){
        org.total_employees = req.body.total_employees;
    }

    if(req.body.bench_count != undefined ){
        org.bench_count = req.body.bench_count;
    }

    res.send(org);
}

exports.delete=function(req, res, next){
    var org = req.org;
    orgs.splice(orgs.indexOf(org, 1));
    res.send(org);
}