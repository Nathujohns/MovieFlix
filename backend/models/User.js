const mongoose = require ('mongoose')

const Schema = mongoose.Schema
//  Creating our Tweet Schema
const UserModel = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    profilePic: {type: String, default: ""},
    isAdminUser: {type: Boolean, default: false},
    
    // Associate the comment model
    comments: [{
        type: Schema.Types.ObjectId,
        ref:'Comment'
        }],

    myList: [{
        type: Schema.Types.ObjectId,
        ref:'myList'
        }]
},{
    timestamps: true
})
// Storing pur Schema as a model
const User = mongoose.model('User', UserModel)
// Exporting our Model
module.exports = User 