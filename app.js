const Koa=require('koa')

const app=new Koa()

const koaStatic= require('koa-static')

const router=require('./router')
 
const path=require('path')

const bodyParser=require('koa-bodyparser')
 

// const test=require('./test/test')

//_dirname和process.cwd()
//_dirname:是当前目录文件下 process.cwd()：此文件夹下
// console.log('app',__dirname)
// console.log('app cwd',process.cwd())

app.use(koaStatic(path.join(process.cwd(),'public')))

app.use(router.routes())//启动路由

app.use(router.allowedMethods())


app.listen(3000,()=>{
    console.log("服务启动成功")
})