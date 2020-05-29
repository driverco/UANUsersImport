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
router.get('/external', function(req,resp){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      if (res.status >= 400) {
        throw new Error("Bad response from server");
      }
      return res.json();
    })
    .then(users => {
        //console.log(users);
        resp.json(users);
    })
    .catch(err => {
      console.error(err);
    });

        
});
router.delete('/:id', function(req,res){
    var id = req.params.id;
    Users.delete(id,function(err, user){
        if (err)
            return res.json(err);
        return res.json(user);
    })
});

router.post('/', function(req,res){
    let request = req.body[0];
    

    var id = request.id;
    var name = request.name;
    var username = request.username;
    var email = request.email;
    var add_street = request.address.street;
    var add_suite = request.address.suite;
    var add_city = request.address.city;
    var add_zipcode = request.address.zipcode;
    var add_geo_lat = request.address.geo.lat;
    var add_geo_lng = request.address.geo.lng;
    var phone = request.phone;
    var website = request.website;
    var cmp_name = request.company.name;
    var cmp_catch_phrase = request.company.catchPhrase;
    var cmp_bs = request.company.bs;


    console.log("insertando usuario:"+name);
    Users.retrieve(id,function(user){
        //console.log(user.id);
        if(typeof user[0] === "undefined"){
            Users.insert(id, name, username, email, add_street, add_suite, add_city, add_zipcode, add_geo_lat, add_geo_lng, phone, website, cmp_name, cmp_catch_phrase, cmp_bs,  function(err, users){
                if (err)
                    return res.json(err);
                return res.json(users);
            })
        }else{
            return res.json({error:"ya existe el id"});
        }
    })

});

module.exports = router;