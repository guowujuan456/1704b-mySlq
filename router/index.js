const router =require('koa-router')()

const query=require('../db/query')

//查询成员列表
router.get('/api/userlist',async ctx=>{
    let data=await query('select * from userlist')
   
    ctx.body=data
})
//添加成员信息
router.post('/api/add',async ctx=>{
    let {username,password,age,adress,sex,wordId}=ctx.request.body
    let sql='insert into userlist(username,password,age,adress,sex,wordId) values ()'
})
module.exports=router