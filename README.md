# project-graduation
毕设选题系统,采用前后端分离,分别为backend和client.

## 安装
**首先安装服务端**
```
cd backend
npm install 
npm start 
```
**首先安装客户端**
```
cd client
npm install 
npm start 
// 接着会提示让输入Y/N,输入Y即可
```

## 系统设计

### 权限设计
分为三种权限
- 管理员权限(admin) :拥有教师列表,学生列表两个侧边菜单,可以添加教师和学生
- 教师权限(teacher): 查看报名学生列表,添加毕设选题,
- 学生权限(student): 查看老师列表,可报名费老师

老师和学生之间是一对一的关系,一个学生只能向一个老师报名,一个老师也只能收留一个学生.
一个学生可以选择两个题目,但是最后只做一个题目作为他的最终方案,可理解为第一志愿和第二志愿.

### 路由传递参数
A页面通过设置hashHistory.push(obj)中的obj的query属性
```
let path = {
    pathname:'/index',
    query:{name:values.userName}
}
hashHistory.push(path);
```
B页面通过this.props取出
```
this.props.location.query
```
如何实用其值,通过将其设置state,然后通过state显示
```
// 设置给state
constructor(props){
    super(props);
    this.state = {
      user : this.props.location.query.user
    }
}
// 显示其值
 <div>
    <p>欢迎光临,{this.state.user}</p>
</div>
```