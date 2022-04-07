const express = require('express');
const conn = require('./config')

const app = express();
app.listen(8000);
app.use(express.json());

app.get('/', (req, res) => {
    conn.query("select * from users", (error, result) => {
        if (error) {
            res.send("Error Occured", error);
        } else {
            res.send(result)
        }
    })
})

app.post('/', (req, res) => {
    const data = req.body;
    conn.query("INSERT INTO users SET ?", data, (error, result, fields) => {
        if (error) error;
        res.send(result);

    })
})

app.post('/:id', (req, res) => {
    const data = [req.body.name, req.body.password, req.body.user_type, req.params.id];
    conn.query("UPDATE users SET name = ?, password = ?, user_type = ? where id = ?", data, (error, result, fields) => {
        if (error) throw error;
        res.send(result);
    })
})

app.delete('/:id', (req, res) => {
    conn.query("DELETE from users where id=" + req.params.id, (error, result) => {
        if (error) throw error;
        res.send(result);
    });

})