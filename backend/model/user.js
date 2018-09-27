var { Model, Database } = require('mongorito');
var db = new Database('mongodb://test:test@localhost:27017/chatroom');
class User extends Model {
    collection() {
        return 'users';
    }
}
// 查询所有用户
const findAll = async () => {
    console.log('findAll');
    return await User.find({});
}

// 根据用户名/密码查找用户
const find = async (username, password) => {
    return await User.find({ username, password });
}

// 添加用户
const save = async (username, password) => {
    var user = new User({ username, password });
    await user.save();
}

module.exports = async() => {
    await db.connect();
    await db.register(User);
    return {
        findAll,
        find,
        save
    }
}
