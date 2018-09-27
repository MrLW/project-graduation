// var mongoose = require('mongoose');
// //连接相应数据库，在这里连接的是student_dormitory数据库
// var db = mongoose.createConnection('mongodb://test:test@localhost:27017/chatroom');
// var us = db.collection('users');
// let u = us.find();
// console.log('->',u);
const mongoose = require('mongoose');
const async = require('async');
mongoose.connect('mongodb://test:test@localhost:27017/chatroom');
let UserModel = mongoose.model('User', { name: String, pwd: String ,email:String,phone:String});

const save = (obj) => {
    let user = new UserModel(obj);
    user.save();
}


const find = (obj) => {
    UserModel.find({ name: obj.name }, (err, d) => {
        if(err) reject(err);
        else resolve(d);
    })
}
module.exports = UserModel ;
