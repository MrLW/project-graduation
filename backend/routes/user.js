var express = require('express');
var router = express.Router();
var UserModel = require('../model/db');
// 获取列表
router.get('/users', async function (req, res, next) {
    var nums = [{ id: 1, name: '张三' }, { id: 2, name: '李四' }, { id: 3, name: '王五' }];
    res.json(nums);
});


// 登陆
router.get('/login', async (req, res) => {
    let name = req.query.name;
    let pwd = req.query.pwd;
    console.log(name,pwd);
    
    let data = await login(name, pwd);
    if (data)
        res.send({ 'status': 'success' })
    else
        res.send({ 'status': 'fail' })

})

const login = async (name, pwd) => {
    return new Promise((resolve, reject) => {
        UserModel.findOne({ name, pwd }, (err, data) => {
            resolve(data);
        });
    })
}


const regist = async (name, pwd,email,phone,role) => {
    console.log('进入注册方法');
    console.log('role:',role);
    let u = new UserModel({name:name,pwd:pwd,email:email,phone:phone,role:role});
    let result = await u.save()
    console.log(result);
}
////
router.get('/regist', async (req, res) => {
    let name = req.query.name;
    let pwd = req.query.pwd;
    let captcha = req.query.captcha;
    let email = req.query.email;
    let phone = req.query.phone;
    let role = req.query.role ;

    console.log(name,pwd);
    
    let data = await regist(name, pwd,email,phone,role);
    if (data)
        res.send({ 'status': 'success' })
    else
        res.send({ 'status': 'fail' })

})


//        fetch(`/user/regist?name=${values.nickname}&pwd=${values.password}&captcha=${values.captcha}&email=${values.email}&phone=${values.phone}`,{method:'get'})

// module.exports = async()=>{
// user = require('../model/user')();
//     return router;
// } 
module.exports = router;