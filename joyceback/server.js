const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const app = express()
const routes = require ('./routes')
const cors =require('cors')


app.set('port',process.env.PORT || 9000 )
const dbOptions = {
    host:"127.0.0.1",
    port:3306,
    user:"joyce",
    password:"WXJebYB2VekLMWj",
    database:"joyce"
}
//Middlewares ----------------------------------------------
app.use(myconn(mysql,dbOptions,'single'))
app.use(cors())
app.use(express.json())
//Testing ---------------------------------------------------
app.get('/', (req,res)=>{
    res.send('Funcionaaaa')
})

app.use('/api',routes)
app.use(express.json())
//Server running -------------------------------------------
app.listen(app.get('port'),() => {
    console.log('Server running on port', app.get('port'))
})