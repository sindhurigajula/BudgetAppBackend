const mongoose = require('mongoose');
var model1 = require("../models/user.model");
exports.getUser = function(req,res){
        model1.findOne({userid:req.params.userid},function(err,response){
        console.log("inside userrrecord test..");
        console.log(response);
        res.send('work in progress:list coming soon' +req.params.userid+"user is "+response+"retrieve :");
        
    });    
};

exports.createUser = function(req,res){
    console.log("sindee0");
    const user = new model1({
        userid:128765,
        username:"sindhu",
        budget:10000,
        expense:5000,
        balance:5000
    });

    console.log("sindee1", user);
    user.save(function(err, user){
        console.log("sindee2");
        if (err) {
            console.log("user error sindee");
            return handleError(err);
        } else {
            console.log("user created"+user);
        }
    });
    res.send("in create user "+req+user);
};


