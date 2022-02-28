const express = require('express');
const app = express();
app.use(express.json());
const pool = require('./db');
const bcrypt = require('bcrypt');
const authSchema = require('./validation');

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is tunning on ${PORT}`);
});

app.post(`/registration`, async (req, res) => {
    try {
        await authSchema.validateAsync(req.body);
        const { name, email } = req.body;
        const newPassword = await bcrypt.hash(req.body.password, 10);
        const result = await pool.query(
            `select * from users where (email = '${email}');`
        );
        if (result.rows.length) {
            res.send('User is already exists');
        } else {
            const queryresult = await pool.query(
                `insert into users (name, email, password) values('${name}', '${email}', '${newPassword}')`
            );

            res.send({
                rowCount: queryresult.rowCount,
                message: 'data inserted.',
            });
        }
    } catch (err) {
        res.send(err.message);
    }
});

app.post(`/login`, async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        await authSchema.validateAsync(req.body);

        const result = await pool.query(
            `select password from users where (email = '${email}');`
        );
        console.log(result.rows);
        if (result.rows.length) {
            const tempPass = result.rows[0].password;
            const match = await bcrypt.compare(password, tempPass);
            if (match) {
                res.send('login successfully');
            } else {
                res.send('username or password is inccorect!');
            }
        } else {
            res.send('user is not exists!');
        }
    } catch (err) {
        res.send(err.message);
    }
});
