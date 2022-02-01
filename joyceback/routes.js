const express = require('express')
const routes = express.Router()

//SELECT
routes.get('/',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM titles', (err,rows)=>{
            if(err) return res.send(err)

            //title.title_date = moment(title.title_date).format('YYYY-MM-DD'),
            res.json(rows)
        })
    })
})

//ADD
routes.post('/',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('INSERT INTO titles set ?',[req.body], (err,rows)=>{
            if(err) return res.send(err)

            res.send("¡Título agregado!")
        })
    })
})

//DELETE
routes.delete('/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('DELETE FROM titles WHERE id=?',[req.params.id], (err,rows)=>{
            if(err) return res.send(err)

            res.send("¡Título eliminado!")
        })
    })
})

//UPDATE
routes.put('/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('UPDATE titles set ? WHERE id=?',[req.body,req.params.id], (err,rows)=>{
            if(err) return res.send(err)

            res.send("¡Título editado correctamente!")
        })
    })
})
module.exports = routes
