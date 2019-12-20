const mongoose = require('mongoose');
var model1 = require("../models/user.model");
exports.getUser = (userid) => {
    // let userid = {userid: 128765};
    // model1.findOne({userid: userid.userid},function(err,response){
    //     console.log(userid);
    //     console.log("inside userrrecord test.."+userid);
    //     console.log(response);
    //     // res.send('work in progress:list coming soon' +req.params.userid+"user is "+response+"retrieve :");
    //     
    //     return response;
    // });

    return model1.findOne({userid: userid.userid});

    // model1.findOne({userid: userid.userid})
    // .then((result) => {
    //     console.log(result);
    //     return result.json;
    // });

    // return {
    //     userid:128761,
    //     username:"sindhu1",
    //     budget:11000,
    //     expense:3000,
    //     balance:7000,
    //     expenseList: [2000,1000]
    // };
};

exports.empty = function(req, res) {
    res.send("Idi Budget App ra Yedava");
}

exports.createUser = function(req,res){
    console.log("sindee0");
    const user = new model1({
        userid:128761,
        username:"sindhu1",
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
            return true;
        }
    });
    // res.send("in create user "+req+user);
    return false;
};


