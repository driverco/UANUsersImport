const fetch = require("cross-fetch");
var express = require ('express');
var Users = require('../models/users');


var router  = express.Router();

router.get('/', function(req,res){
    Users.retrieveAll(function(err, users){
        if (err)
            return res.json(err);
        return res.json(users);
    })
});

module.exports = router;