var express = require('express');
var { buildSchema } = require('graphql');

var router = express.Router();
const user_controller = require("../controllers/user.controller.js");

exports.schema = buildSchema(`
    type User {
        userid: Int!,
        username: String!,
        budget: Int,
        expense: Int,
        balance: Int,
        expenseList: [Int]
    }

    type Query {
        getUser(userid: Int): User!
    }
`);

exports.root = {
    getUser: user_controller.getUser,
    // createUser: user_controller.createUser
};



// router.get('/create',user_controller.createUser);
// router.get('/',user_controller.empty);
// router.get('/:userid',user_controller.getUser);


// module.exports = router;