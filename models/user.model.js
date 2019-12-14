const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    userid:{type: Number,required: true},
    username: {type: String, required: true, max: 100},
    budget: {type: Number, required: true},
    expense: {type: Number, required:true, default:0},
    balance: {type: Number, required: true},
    expenselist:{type: Array}
}, { collection: "Users" });


// Export the model
//exports.model1 = mongoose.model('Users', UserSchema);
var model1 = mongoose.model('Users', UserSchema);
module.exports = model1;