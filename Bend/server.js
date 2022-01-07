const express=require('express')
const db=require('./db')
const utils=require('./utils')

const app=express()

app.use(express.json())

app.post('/setmsg',(request,response)=>{
    const{id,msg,name}=request.body
    const statement=`INSERT INTO message VALUES('${id}','${msg}','${name}')`
    const connection=db.openConnection()
 
     connection.query(statement,(error,data)=>{
     connection.end()
     response.send(utils.createResult(error,data))
  })
})

app.get('/getAll',(request,response)=>{
    const statement=`SELECT * FROM message`
    const connection=db.openConnection()

    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})

app.listen(2970,()=>{
    console.log("Server started on port 2970")     //    http://localhost:2970/getAll
})