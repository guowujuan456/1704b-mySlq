const mysql=require('mysql')

const connection=mysql.createConnection({
    host:'localhost',
    user:"root",
    password:"root",
    port:"3306",
    database:"homework"
})

connection.connect((error)=>{
    if (error) {
        console.log("数据库连接失败")
    }else{
        console.log('数据连接成功')
    }
})
module.exports=connection