const db = require ('../database');

class Users {
    static retrieveAll(callback){
        db.query('select  id, name, username, email, add_street, add_suite, add_city, add_zipcode, add_geo_lat, add_geo_lng, phone, website, cmp_name, cmp_catch_phrase, cmp_bs from users',function(err,resp){
            if (err.error)
                return callback(err);
            callback (resp);
        });

    }
    static retrieve(id, callback){
        console.log("consultando id:"+id);
        db.query('select * from users where id = $1', [id],function(err,resp){
            if (err.error)
                return callback(err);
            callback (resp);
        });
    }
    static insert(id, name, username, email, add_street, add_suite, add_city, add_zipcode, add_geo_lat, add_geo_lng, phone, website, cmp_name, cmp_catch_phrase, cmp_bs, callback){
        db.query('insert into users (id, name, username, email, add_street, add_suite, add_city, add_zipcode, add_geo_lat, add_geo_lng, phone, website, cmp_name, cmp_catch_phrase, cmp_bs) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)',[id, name, username, email, add_street, add_suite, add_city, add_zipcode, add_geo_lat, add_geo_lng, phone, website, cmp_name, cmp_catch_phrase, cmp_bs],function(err,resp){
            if (err.error)
                return callback(err);
            callback (resp);
        });
    }
    static delete(id, callback){
        db.query('delete from  users where id = $1',[id],function(err,resp){
            if (err.error)
                return callback(err);
            callback (resp);
        });
    }
}
module.exports = Users;