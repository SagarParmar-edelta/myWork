const Pool = require('./db')
const express = require('express')
const app = express()
app.use(express.json())

app.listen(3037, () => {
    console.log('server is listiening on port')
})

app.post('/users', async (req, res) => {
    try {
        const { name, designation } = req.body
        const newData = await Pool.query(
            'insert into employee (name, designation) values ($1, $2)',
            [name, designation]
        )
        res.send({ count: newData.rowCount, message: 'Data inserted.' })
        if ((newData.rowCount = 1)) res.status(200)
    } catch (err) {
        console.log(err)
    }
})

app.get('/users', async (req, res) => {
    try {
        const result = await Pool.query(
            'select * from employee order by eid asc'
        )
        res.send(result.rows)
    } catch (err) {
        console.log(err)
    }
})

app.put('/users/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const { name, designation } = req.body
        const result = await Pool.query(
            `update employee set name = $1, designation = $2 where eid = $3`,
            [name, designation, id]
        )
        res.send(result.rowCount + ' Data updated.')
    } catch (err) {
        console.log(err)
    }
})

app.delete('/users/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const result = await Pool.query(`delete from employee where eid = $1`, [
            id,
        ])
        res.json(' data deleted.')
    } catch (err) {
        console.log(err)
    }
})
